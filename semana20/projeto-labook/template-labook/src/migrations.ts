import { connection } from "./connection";
import { postsTable } from "./types/task";
import { usersTable } from "./types/user";

connection
  .raw(
    `
      CREATE TABLE IF NOT EXISTS ${usersTable}(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL,
         role ENUM ("NORMAL", "ADMIN") NOT NULL
      );

      CREATE TABLE IF NOT EXISTS ${postsTable}(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES ${usersTable} (id)
      )
      
   `
  )
  .then(() => console.log("MySql tables were succcessfully created"))
  .catch((error) => console.log(error.message))
  .finally(() => {
    connection.destroy;
  });
