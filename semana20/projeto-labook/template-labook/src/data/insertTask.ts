import { connection } from "../connection"
import { post, postsTable } from "../types/task"


export const insertTaks = async (
    post: post
): Promise<any> => {
    await connection(`${postsTable}`)
    .insert({
        id: post.id,
        photo: post.photo,
        description: post.description,
        type: post.type,
        created_at: post.createdAt,
        author_id: post.authorId
    })
}