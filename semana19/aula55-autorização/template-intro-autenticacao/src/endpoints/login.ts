import {Request, Response} from "express"
import { connection } from "../data/connection"
import { Authenticator } from "../services/Authenticator"

export const login = async (
    req: Request,
    res: Response
)=>{

    try {
        const {email, password} = req.body

        
        //buscar o usuário no banco
        const [user] = await connection("ToDoListUser")
        .where({email})
        
        //conferir se ele está definido e a senha está correta
        if(!user || user.password !== password){
            res.statusCode = 401
            throw new Error("Credenciais inválidas") 
        }


        //gerar o token e enviar na resposta da requisição
        const token: string = new Authenticator().generateToken({
            id: user.id
        })

        res.send({token})

    } catch (error) {

        if (res.statusCode === 200) {
           res.status(500).send({ message: "Internal server error" })
        } else {
           res.send({ message: error.sqlMessage || error.message })
        }
     }

}

