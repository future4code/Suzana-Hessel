import { BaseDataBase } from "./BaseDataBase";
import { Product } from "../classes/Product";

export class ProductDataBase extends BaseDataBase {

    private TABLE_NAME = "product"
    
    async create(product: Product) {
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(product)
    }

    async getAll() {
        return BaseDataBase.connection(this.TABLE_NAME)
        .select()

    }
}