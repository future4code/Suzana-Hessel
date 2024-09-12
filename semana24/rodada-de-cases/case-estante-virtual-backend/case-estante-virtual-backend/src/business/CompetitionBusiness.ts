import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { Competition, CompetitionDTO, UpdateCompetition } from "../model/Competition";
import { IdGenerator } from "../../src/services/IdGenerator";

export class CompetitionBusiness {
    private idGenerator: IdGenerator

    constructor() {
        this.idGenerator = new IdGenerator()
    }

    async createCompetition(competitionDTO: CompetitionDTO) {

        try {

            const id: string = this.idGenerator.generateId()

            const competitionModel: Competition = {
                id,
                name: competitionDTO.name,
                status: competitionDTO.status
            }

            await new CompetitionDatabase().createCompetition(competitionModel)

        } catch (error) {
            throw new Error(error.message)
        }
    }
    
    async updateCompetition(updateCompetition: UpdateCompetition) {

        try {
            const updateCompetitionModel: UpdateCompetition = {
                id: updateCompetition.id,
                status: updateCompetition.status
            }
            
            await new CompetitionDatabase().updateCompetition(updateCompetitionModel)
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

