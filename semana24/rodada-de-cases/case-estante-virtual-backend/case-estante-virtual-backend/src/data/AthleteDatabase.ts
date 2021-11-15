import { Athlete } from "../model/Athlete";
import { BaseDatabase } from "./BaseDatabase";

export class AthleteDatabase extends BaseDatabase {

    async createAthlete(athlete: Athlete) {

        try {

            await BaseDatabase.connection("ATHLETE").insert({
                id: athlete.id,
                name: athlete.name,
                value: athlete.value,
                unity: athlete.unity,
                competitionId: athlete.competitionId
            })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}