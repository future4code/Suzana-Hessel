import {Request, Response} from "express"
import { connection } from "../data/connection"
import { Authenticator } from "../services/Authenticator"

export const profile = async (

    req: Request,
    res: Response
) => {

    try{
        const token = req.headers.authorization as string

        const tokenData = new Authenticator().getTokenData(token)
    
        const [user] = await connection("ToDoListUser")
            
            res.status(200).send({
          id: user.id,
          email: user.email,
        });
    } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

}