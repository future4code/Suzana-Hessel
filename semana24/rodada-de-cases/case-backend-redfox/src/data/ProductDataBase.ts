import { Product, productsTable} from "../model/Product";
import { connection } from "../connection";

export class ProductDatabase {
  async save(product: Product) {
    const productDB = {
      id: product.id,
      name: product.name,
      tags: product.tags
      
    };

   const result =  await connection.insert(productDB).onConflict('id').merge().into(`${productsTable}`);

    return result;
  }

  // async selectUserByEmail(email: string) {
  //   const result = await connection(usersTable).select("*").where({ email });

  //   const user: User = {
  //       id: result[0].id,
  //       name: result[0].name,
  //       email: result[0].email,
  //       password: result[0].password,
  //       role: result[0].USER_ROLES,
  //   }

  //   return user
  // }
}
