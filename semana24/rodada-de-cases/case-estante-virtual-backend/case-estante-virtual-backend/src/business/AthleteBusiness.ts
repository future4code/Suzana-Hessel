import { AthleteDatabase } from "../data/AthleteDatabase";
import { Athlete, AthleteDTO } from "../model/Athlete";
import { IdGenerator } from "../../src/services/IdGenerator";

export class AthleteBusiness {
    private idGenerator: IdGenerator

    constructor() {
        this.idGenerator = new IdGenerator()
    }

    async createAthlete(athleteDTO: AthleteDTO) {
        try {

            const id: string = this.idGenerator.generateId()

            const athleteModel: Athlete = {
                id,
                name: athleteDTO.name,
                value: athleteDTO.value,
                unity: athleteDTO.unity,
                competitionId: athleteDTO.competitionId
            }

            await new AthleteDatabase().createAthlete(athleteModel)

        } catch (error) {
            throw new Error(error.message)
        }
    }
}