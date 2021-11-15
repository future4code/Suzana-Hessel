import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionDTO, UpdateCompetition } from "../model/Competition";


export class CompetitionController {

    async createCompetition(request: Request, response: Response) {

        try {

            const competitionDTO: CompetitionDTO = {
                name: request.body.name,
                status: request.body.status
            }

            if(!competitionDTO.name || !competitionDTO.status) {
                throw new Error("Any parameter missing!")
            }

            await new CompetitionBusiness().createCompetition(competitionDTO)

            response.status(201).send("Competition registered successfully!")

        } catch (error) {
            let message = error.sqlMessage || error.message
            response.statusCode = 400

            response.send({message})
        }
    }

    async updateCompetition(req: Request, res: Response) {

        try {

            const updateCompetition: UpdateCompetition = {
                id: req.body.id,
                status: req.body.status
            }
        
            await new CompetitionBusiness().updateCompetition(updateCompetition)
            
            res.status(200).send("Competition status updated successfully!")

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({message})
        }
    }
}
