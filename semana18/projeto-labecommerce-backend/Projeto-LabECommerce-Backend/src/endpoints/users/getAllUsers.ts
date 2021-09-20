import {Request, Response} from "express" 
import { UserDataBase } from "../../data/users/UserDataBase"
import { CustomError } from "../../errors/CustomError"

export const getAllUsers = async (
    req: Request,
    res: Response
) => {
    try{
        const users = await new UserDataBase().getAllUsers()

        res.send(users)

    }catch (error){

        if (error instanceof CustomError)
         res
            .status(error.errorStatusCode)
            .send(error.message)
        else
            res 
                .status(500)
                .send("Internal error, please contact support")
    }
}