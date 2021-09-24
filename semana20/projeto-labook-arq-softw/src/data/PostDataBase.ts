import { Post, postsTable, toPostModel } from "../model/Post";
import { connection } from "../connection";
import { usersTable} from "../model/User";

export class PostDatabase {
  async createPost(post: Post) {

  try {

  await connection(`${postsTable}`)
  .insert({
      id: post.id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      created_at: post.createdAt.toISOString().substring(0, 10),
      author_id: post.authorId, 
     
  })
    
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message)
  }
    
}

  async selectTaskById (id: string): Promise<any> {
    const result = await connection.raw(`
      SELECT posts.*, name FROM ${postsTable} AS posts
      JOIN ${usersTable} AS users
      ON author_id = users.id
      WHERE posts.id = '${id}'
      `);

      return result[0];
    
  }

 
}