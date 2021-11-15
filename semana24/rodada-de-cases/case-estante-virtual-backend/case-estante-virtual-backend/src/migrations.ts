import { BaseDatabase } from "./data/BaseDatabase";

async function createTables() {
    try {
        await BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS COMPETITION (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                status INT NOT NULL DEFAULT 1
            )
        `)

        await BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ATHLETE (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                value VARCHAR(255) NOT NULL,
                unity VARCHAR(255) NOT NULL,
                competitionId VARCHAR(255),
                FOREIGN KEY(competitionId) REFERENCES COMPETITION(id)
            )
        `)

        console.log("Tables completed with sucess!!")
    } catch (error) {
        console.log(error)
    }
}

createTables()