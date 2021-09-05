import { BaseDataBase } from "../BaseDataBase";
import { Product} from "../../entities/Product"
import { Ticket } from "../../entities/Ticket"

export class ProductDataBase extends BaseDataBase {

    private static tableName = "labecommerce_products"

    private toProduct = (input: any): Product => {
        if (input.origin)
        return new Ticket(
            input.id,
            input.name,
            input.description,
            input.price,
            input.origin,
            input.destination
        )
        else
        return new Product(
            input.id,
            input.name,
            input.description,
            input.price
        )
    }

    createProduct = (product: Product) => 
        BaseDataBase.connection(ProductDataBase.tableName)
        .insert(product)
    

   getAllProducts = async () => {

    const result = await BaseDataBase
    .connection(ProductDataBase.tableName)

    return result.map(this.toProduct)

   }
    
}