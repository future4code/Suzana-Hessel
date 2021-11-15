import { Request, Response } from "express";
import { Competition, ResultsCompetition, UpdateCompetition } from "../model/Competition";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {

    async createCompetition(competition: Competition) {

        try {
            await BaseDatabase.connection("COMPETITION").insert({
                id: competition.id,
                name: competition.name,
                status: competition.status
            })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async updateCompetition(updateCompetitionModel: UpdateCompetition) {

        try {
            await BaseDatabase.connection.raw(`
            UPDATE COMPETITION
            SET status = ${updateCompetitionModel.status}
            WHERE id = "${updateCompetitionModel.id}"
        `)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getResultsFromCompetition(req: Request, res: Response) {

        try {

            const input: ResultsCompetition = {
                competitionId: req.body.competitionId
            } 

            const queryResponse = await BaseDatabase.connection.raw(`
                SELECT name, value FROM ATHLETE
                WHERE competitionId = "${input.competitionId}"
                ORDER BY value DESC
            `)

            const results = queryResponse[0]

            if(!results) {
                return null
            }

            res.status(200).send(results)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}