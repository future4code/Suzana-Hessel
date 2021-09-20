import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body

      const token = req.headers.authorization

      const tokenData = new Authenticator().getTokenData(token)

      if(!tokenData){
         res.statusCode = 401
         throw new Error("Não autorizado")
      }

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      await connection('ToDoListUser')
         .update({ name, nickname })
         .where({ id: tokenData.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}