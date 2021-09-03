import {Request, Response} from "express"
import { MissingDataError } from "../errors/CustomError"
import { UserDataBase } from "../data/UserDataBase"
import {User} from "../classes/User"

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    
    try {

        const {name, email, age} = req.body

        if(!name || !email || !age) {
            throw new MissingDataError 
        }

        const user = new User(
            name,
            email,
            age
        )

        const userDataBase = new UserDataBase()

        await userDataBase.create(user)

        res.status(201).end()

    } catch(error) {
        res.status(error.statusCode || 400).send(error.message)
    }
    
}