export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export interface Post {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export interface selectTaskByIdOutputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date
}

export function toPostModel(object: any): Post{
    return object && {
        id: object.id,
        photo: object.photo,
        description: object.description,
        type: object.type,
        createdAt: object.created_at,
        authorId: object.author_id
      }
}

export const postsTable = "labook_posts" 