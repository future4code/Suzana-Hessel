import { CustomError } from "../errors/CustomError";


export class User {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly age: number
    ) {

        if (typeof name !== "string")
        throw new  CustomError(422, `'name' must be of type 'string' `)

        if (typeof age !== "number")
        throw new  CustomError(422, `'age' must be of type 'number' `)

        if (typeof email !== "string")
        throw new  CustomError(422, `'email' must be of type 'string' `)
    }
}