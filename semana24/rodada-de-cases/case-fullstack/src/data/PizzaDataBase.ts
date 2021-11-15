import { Pizza, pizzasTable} from "../model/Pizza";
import { connection } from "../connection";

export class PizzaDatabase {
  async save(pizza: Pizza) {
    const pizzaDB = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price
      
    };

   const result =  await connection.insert(pizzaDB).onConflict('id').merge().into(`${pizzasTable}`);

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
