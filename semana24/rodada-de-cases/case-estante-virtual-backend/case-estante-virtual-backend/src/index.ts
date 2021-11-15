import app from "./app";
import { CompetitionController } from './controller/CompetitionController';
import { AthleteController } from './controller/AthleteController';
import { CompetitionDatabase } from './data/CompetitionDatabase';

const competitionController = new CompetitionController()
const athleteController = new AthleteController()
const competitionDatabase = new CompetitionDatabase()

app.get("/competition/results", (req, res) => competitionDatabase.getResultsFromCompetition(req, res))
app.post("/competition/create", (req, res) => competitionController.createCompetition(req, res))
app.post("/athlete/create", (req, res) => athleteController.createAthlete(req, res))
app.put("/competition/update", (req, res) => competitionController.updateCompetition(req, res))


