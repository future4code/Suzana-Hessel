import { Request, Response} from "express"
import { MissingDataError } from "../errors/CustomError"
import { ProductDataBase } from "../data/ProductDataBase"
import {Product} from "../classes/Product" 

export default async function createProduct (

    req: Request,
    res: Response
): Promise<void> {

    try {

        const {id, name, description, price} = req.body

        if(!id || !name || !description || !price) {
            throw new MissingDataError
        } 

        const product = new Product(
            id,
            name,
            description,
            price
        ) 
        
        const productDataBase = new ProductDataBase()

        await productDataBase.create(product)

        res.status(201).end()


    }catch(error) {

        res.status(error.statusCode || 400).send(error.message)
    }
} 
