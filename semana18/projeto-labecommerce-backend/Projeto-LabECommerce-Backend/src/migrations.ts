import { BaseDataBase } from "./data/BaseDataBase"

const dataBase = new BaseDataBase()

dataBase
   .createTables()
   .then(dataBase.insertUsers)
   .then(dataBase.insertProducts)
   .then(dataBase.insertPurchases)
   .finally(dataBase.closeConnection)