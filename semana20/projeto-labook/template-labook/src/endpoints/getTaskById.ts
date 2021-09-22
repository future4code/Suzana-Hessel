import { Request, Response } from "express";
import { selectTaskById } from "../data/selectTaskByid";

export const getTaksById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const result = await selectTaskById(id);

    if (!result) {
      res.statusCode = 404;
      throw new Error("Post not found");
    }
    console.log("RESULT", result);
    const post = {
      id: result[0].id,
      photo: result[0].photo,
      description: result[0].description,
      type: result[0].type,
      createdAt: result[0].created_at,
      authorId: result[0].author_id,
    };

    res.status(200).send({ post });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
