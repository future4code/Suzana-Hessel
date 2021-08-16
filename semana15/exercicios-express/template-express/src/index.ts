import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//padrão : app.method(path, handler)

app.get('/test', (req: Request, res: Response) => {
    res.send('Hello, world!')
})


console.log("Hello, world!")
