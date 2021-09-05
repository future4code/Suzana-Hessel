import { Request, Response} from "express"
import { CustomError, MissingDataError } from "../../errors/CustomError"
import { ProductDataBase } from "../../data/products/ProductDataBase"
import {Product} from "../../entities/Product"
import { IdGenerator } from "../../services/idGenerator"

export default async function createProduct (

    req: Request,
    res: Response
): Promise<void> {

    try {

        const  {name, description, price} = req.body

        const id = new IdGenerator().execute()

        const product = new Product(
            id,
            name,
            description,
            price
        ) 

        if(!id || !name || !description || !price) {
            throw new MissingDataError
        } 
        
        await new ProductDataBase().createProduct(product)

        res.status(201).send({product})


    }catch(error) {
        if(error instanceof CustomError)
            res
             .status(error.errorStatusCode || 400)
             .send(error.message)

        else
            res
             .status(500)
             .send("Internal error, please contact support")

    }
} 
