import { CustomError } from "../errors/CustomError";

export class Product {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly description: string,
        readonly price: number
    ) {
        if (typeof name !== "string")
        throw new CustomError(422, `'name' must be of type 'string'`)

        if (typeof price !== "number")
        throw new CustomError(422, `'price' must be of type 'number'`)

        if (typeof description !== "string")
        throw new CustomError(422, `'description' must be of type 'string'`)

    }
}