import {Request, Response} from "express"
import { ProductDataBase } from "../../data/products/ProductDataBase"
import { CustomError } from "../../errors/CustomError"

export const getAllProducts = async (
    req: Request,
    res: Response
) => {
    try {
        const products = await new ProductDataBase().getAllProducts()

        res.send(products)

    } catch (error) {

        if (error instanceof CustomError)
            res
            .status(error.errorStatusCode)
            .send(error.message)
        else
            res 
            .status(500)
            .send("Internal error, please contact support ")

    }
}