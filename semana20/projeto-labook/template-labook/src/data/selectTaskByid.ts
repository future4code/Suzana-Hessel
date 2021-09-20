import { connection } from "../connection";
import { postsTable } from "../types/task";
import { usersTable } from "../types/user";

export const selectTaskById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT posts.*, name FROM ${postsTable} AS posts
    JOIN ${usersTable} AS users
    ON author_id = users.id
    WHERE posts.id = '${id}'

    `);

  // OU
  // const result = await connection.raw(`
  // SELECT * FROM ${postsTable} AS posts
  // WHERE id = '${id}'

  // `);
  
  return result[0];
};
