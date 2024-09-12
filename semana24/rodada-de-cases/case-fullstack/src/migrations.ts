import { connection } from "./connection";
import { pizzasTable } from "./model/Pizza";

connection
  .raw(
    `
      CREATE TABLE IF NOT EXISTS ${pizzasTable}(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         tags VARCHAR(255) NOT NULL  
      );
   `
  )
  .then(() => console.log("MySql tables were succcessfully created"))
  .catch((error) => console.log(error.message))
  .finally(() => {
    connection.destroy;
  });
