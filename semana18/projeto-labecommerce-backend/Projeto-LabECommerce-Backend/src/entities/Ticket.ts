import { CustomError } from "../errors/CustomError";
import { Product } from "./Product";

export class Ticket extends Product {

    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        readonly origin: string,
        readonly destination: string
    ) {
        super(id, name, description, price)

        if (typeof origin !== "string")
        throw new CustomError(422, `'origin' must be of type 'string'` )

        if (typeof destination !== "string")
        throw new CustomError(422, `'destination' must be of type 'string' `)
    }
}