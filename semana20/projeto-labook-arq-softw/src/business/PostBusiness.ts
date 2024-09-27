import { PostDatabase } from "../data/PostDataBase";
import { Post, POST_TYPES } from "../model/Post";
import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";

export interface PostDTO {
  photo: string;
  description: string;
  type: POST_TYPES;
  token: string;
  
}

export interface SelectTaskByIdDTO {
  id: string;
}

export class PostBusiness {
  private postDataBase: PostDatabase;
  private hashManager: HashManager;
  private authenticator: Authenticator;
  private idGenerator: IdGenerator;

  constructor() {
    this.postDataBase = new PostDatabase();
    this.hashManager = new HashManager();
    this.authenticator = new Authenticator();
    this.idGenerator = new IdGenerator();
  }

  async createPost(postDTO: PostDTO) {
    try {
      if (!postDTO.token) {
        throw new Error("A jwt must be provided");
      }

      const tokenData = this.authenticator.getTokenData(postDTO.token);

      const id: string = this.idGenerator.generateId();

      // Criar modelo do post
      const postModel: Post = {
        id,
        authorId: tokenData.id,
        createdAt: new Date(),
        description: postDTO.description,
        photo: postDTO.photo,
        type: postDTO.type,
      };

      await new PostDatabase().createPost(postModel);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async selectTaskById(selectUserByIdDTO: SelectTaskByIdDTO) {
    try {

      const post: Post = await new PostDatabase().selectTaskById(selectUserByIdDTO.id)
    
      if (!post) {
        throw new Error("Post not found")
      }

      return post;
      
    } catch (error: any) {
        throw new Error(error.message)
    }
  }
}
