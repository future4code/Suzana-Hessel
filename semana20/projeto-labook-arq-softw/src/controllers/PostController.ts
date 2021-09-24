import { Request, Response } from "express";
import {
  PostBusiness,
  PostDTO,
  SelectTaskByIdDTO,
} from "../business/PostBusiness";
import { Post, selectTaskByIdOutputDTO } from "../model/Post";
import { Authenticator } from "../services/authenticator";
import { IdGenerator } from "../services/idGenerator";

export class PostController {
  private postBusiness: PostBusiness;
  private authenticator: Authenticator;
  private idGenerator: IdGenerator;

  constructor() {
    this.postBusiness = new PostBusiness();
    this.authenticator = new Authenticator();
    this.idGenerator = new IdGenerator();
  }

  async createTask(req: Request, res: Response) {
    try {
      const token: string = req.headers.authorization as string;

      // const { photo, description, type, authorId } = req.body;

      // const tokenData: authenticationData = getTokenData(token);

      // if(!tokenData) {
      //     res.statusCode = 401
      //     throw new Error("Unauthorized")
      // }

      // if(!photo || !description || !type || !authorId) {
      //     res.statusCode = 422
      //     throw new Error(" 'photo', 'description', 'type' and 'authorId' required")
      //   }

      // const id: string = generateId();

      // const createdAt =  new Date()

      // await insertTaks ({
      //   id,
      //   photo,
      //   description,
      //   type,
      //   createdAt,
      //   authorId
      // })

      const postDTO: PostDTO = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
        token,
      };

      await new PostBusiness().createPost(postDTO);

      res.status(201).send("Post successfully created!");
    } catch (error) {
      console.log(error.message);
      res.status(400).send(error.sqlMessage || error.message);
    }
  }

  async selectTaskById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const selectTaskByIdDTO: SelectTaskByIdDTO = {
        id: req.params.id,
      };

      const post: Post = await new PostBusiness().selectTaskById(
        selectTaskByIdDTO
      );

      const output: selectTaskByIdOutputDTO = {
        photo: post.photo,
        type: post.type,
        description: post.description,
        createdAt: post.createdAt,
      };

      res.status(200).send(`"Success!", ${output}`);

    } catch (error) {
      res.status(400).send(error.sqlMessage || error.message);
    }
  }
}
