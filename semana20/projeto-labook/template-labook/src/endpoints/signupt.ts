import { hash } from "../services/hashManager"
import {Request, Response} from "express"
import { generateToken } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { insertUser } from "../data/insertUser"

export const signup = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {

        const { name, email, password, role } = req.body
    
        if (!name || !email || !password || !role) {
           res.statusCode = 406
           throw new Error('"name", "email", "role", and "password" must be provided')
        }
    
        const id: string = generateId()
    
        const cypherPassword = await hash(password);
    
        await insertUser({
              id,
              name,
              email,
              password: cypherPassword,
              role
           })
    
        const token: string = generateToken({ id, role: role})
    
        res.status(201).send({ message: "Usuário criado!", token })
    
     } catch (error) {
        res.status(400).send(error.message)
     }

}

