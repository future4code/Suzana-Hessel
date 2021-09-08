EXERCICIO 1 : 

*a. Quando um id do tipo string é utilizado, as combinações de caracteres são mais variadas pois o id gerado pode ser composto tanto por letras quanto por números.*

*b. Função para gerar Id, na pasta services:

Instalação da lib UUID: 
npm i uuid @types/uuid
npm i uuid -D @types/uuid

import {v4} from "uuid"

export class IdGenerator {
    public generateid = () =>  v4()
}
--ou--
export function generateId(): string {
    return v4()
}
*

EXERCICIO 2 : 

a. O código representa a conexão com o banco de dados e a criação de um usuário com id, email e senha.

b. CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)

c. 
const userTableName =  "User"
 
const createUser = async (
    id: string,
    email: string,
    password: string
)=>{
    await connection 
    .insert({
        id,
        email,
        password
    })
    .into(userTableName)
}

EXERCICIO 3 :

