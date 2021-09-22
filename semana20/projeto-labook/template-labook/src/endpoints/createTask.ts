import { Request, Response } from "express";
import { insertTaks } from "../data/insertTask";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { authenticationData } from "../types/user";

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const token: string = req.headers.authorization as string;

    const { photo, description, type, authorId } = req.body;

    const tokenData: authenticationData = getTokenData(token);

    if(!tokenData) {
        res.statusCode = 401
        throw new Error("Unauthorized")
    }

    if(!photo || !description || !type || !authorId) {
        res.statusCode = 422
        throw new Error(" 'photo', 'description', 'type' and 'authorId' required")
      }

    const id: string = generateId();

    const createdAt =  new Date()

    await insertTaks ({
      id,
      photo,
      description,
      type,
      createdAt,
      authorId
    })

    res.status(201).send("Post successfully created!");

  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message || "Internal server error")
  }

};
