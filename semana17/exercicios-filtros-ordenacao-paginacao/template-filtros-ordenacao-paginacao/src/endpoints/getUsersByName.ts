import { Request, Response } from "express"
import selectUsersByName from "../data/selectUsersByName"

export const getUsersByName = async(req: Request, res: Response): Promise<void> =>{
   try {
   
      const name = req.params.name || "%"

      const users = await selectUsersByName(name)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}


// return {
   //    id: input.id,
   //    title: input.title,
   //    description: input.description,
   //    userId: input.user_id,
   //    createdAt: input.created_at
   // }

// CREATE TABLE IF NOT EXISTS aula49_users (
//    id VARCHAR(255) PRIMARY KEY,
//    name VARCHAR(255) UNIQUE NOT NULL,
//    email VARCHAR(255) UNIQUE NOT NULL,
//    password VARCHAR(255) NOT NULL
// );

// CREATE TABLE IF NOT EXISTS aula49_recipes (
//    id VARCHAR(255) PRIMARY KEY,
//    title VARCHAR(255) NOT NULL,
//    description TEXT(1023),
//    user_id VARCHAR(255),
//    created_at BIGINT,
//    FOREIGN KEY(user_id) REFERENCES aula49_users(id) 
// );