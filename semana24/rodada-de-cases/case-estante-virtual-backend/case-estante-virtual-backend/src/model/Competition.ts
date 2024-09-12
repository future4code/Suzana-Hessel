export interface Competition {
    id: string,
    name: string,
    status: number
}

export interface CompetitionDTO {
    name: string,
    status: number
}

export interface UpdateCompetition {
    id: string,
    status: number
}

export interface ResultsCompetition {
    competitionId: string
}