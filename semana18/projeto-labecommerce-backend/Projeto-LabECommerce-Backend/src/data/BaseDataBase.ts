import knex from "knex"
import { config } from "dotenv"
import users from "./users/users.json"
import products from "./products/products.json"
import purchases from "./purchases/purchases.json"

config()

export class BaseDataBase {

  protected static connection = knex({
    client: "mysql",
    connection: {
       host: process.env.DB_HOST,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_SCHEMA,
       port: 3306,
       multipleStatements: true
    }
 })

 private printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
 }

 createTables = () => BaseDataBase
    .connection
    .raw(`

       CREATE TABLE IF NOT EXISTS labecommerce_users (
          id VARCHAR(255) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          age INT NOT NULL
       );

       CREATE TABLE IF NOT EXISTS labecommerce_products (
          id VARCHAR(255) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          description VARCHAR(255) NOT NULL,
          price FLOAT NOT NULL,
          origin VARCHAR(255),
          destination VARCHAR(255)
       );

       CREATE TABLE IF NOT EXISTS labecommerce_purchases (
          user_id VARCHAR(255),
          product_id VARCHAR(255),
          quantity INT NOT NULL DEFAULT 1,
          total_amount FLOAT NOT NULL,
          FOREIGN KEY (user_id) REFERENCES labecommerce_users (id),
          FOREIGN KEY (product_id) REFERENCES labecommerce_products (id)
       );

    `)
    .then(() => { console.log("Tables successfully created") })
    .catch(this.printError)

 insertUsers = () => BaseDataBase
    .connection("labecommerce_users")
    .insert(users)
    .then(() => { console.log("Users saved") })
    .catch(this.printError)

 insertProducts = () => BaseDataBase
    .connection("labecommerce_products")
    .insert(products)
    .then(() => { console.log("Products saved") })
    .catch(this.printError)

 insertPurchases = () => BaseDataBase
    .connection("labecommerce_purchases")
    .insert(purchases)
    .then(() => { console.log("Purchases saved") })
    .catch(this.printError)

 closeConnection = () => {
    BaseDataBase.connection.destroy()
 }



}

