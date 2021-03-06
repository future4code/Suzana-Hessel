import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator} from "../services/IdGenerator";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || email.indexOf("@") === -1 || !password ) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name', 'nickname' e 'email ' corretamente")
      }

      if (password.length < 6) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name', 'nickname' e 'email' corretamente ")
      }

      const [user] = await connection('ToDoListUser') //está assim: ToDoListUser, no meu banco
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      // const IdGenerator = new IdGenerator()

      const id: string = new IdGenerator().generateid()

      const newUser: user = { id, name, nickname, email, password }

      await connection('ToDoListUser')
         .insert(newUser)

      const token: string = new Authenticator().generateToken({id})

      res.status(201).send({ newUser, token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}