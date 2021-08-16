import express, {Express, Request, Response} from "express"
import cors from "cors"
import {countries} from "./data"
import {country} from "./types"

const app: Express = express()

app.use(express.json())
app.use(cors())

// app.get('/countries', (req:Request, res:Response) => {
//     res.send(countries)
//     console.log(req.headers)
//     console.log(req.query)
    
// })

/*exercício1: Buscar todos os países pelo id e name
*/    
app.get('/countries', (req:Request, res:Response) => {
    const result = countries.map((country) => {
        return {id: country.id,name: country.name}
    })
    res.status(200).send(result);
})

/*exercício2: Buscar país pelo id 
*/ 

app.get('/countries/:id', (req:Request, res:Response) => {
    const result = countries.find(
        (country) => {return country.id === Number(req.params.id)}
    )
    res.send(result)
 })

 /*exercício3: Buscacom filtros
*/ 

app.get('/countries/search', (req: Request, res: Response) => {

    let result: country[] = countries

    try{

        if(!req.query.name && !req.query.capital && !req.query.continent){
            throw new Error("Parametro inválido")
        }

        if(req.query.name){
            result = result.filter((country) => 
                country.name.includes(req.query.name as string)
            )
        }
        if(req.query.capital){
            result = result.filter((country) => 
                country.capital.includes(req.query.capital as string)
            )
        }
        if(req.query.continent){
            result = result.filter((country) => 
                country.continent.includes(req.query.continent as string)
            )
        }
        res.status(200).send(result)
    }
    catch(error){
        console.log(error)
        res.status(400).send(error)
    }
  
 })

 /*exercicio4 - editar país   */

 app.post('/countries/:id', (req: Request, res: Response) => {
     let errorCode: number = 400
     
    try{
         const countryIndex: number = countries.findIndex((country) => 
             country.id === Number(req.params.id)
         )

         if(countryIndex === -1){
             errorCode = 404
             throw new Error()

         }
         if (!req.body.name && !req.body.capital) {
            throw new Error("Invalid Parameters");
        }
        if(req.body.name){
            countries[countryIndex].name = req.body.name
        }
        if(req.body.capital){
            countries[countryIndex].capital = req.body.capital
        }
         
    res.status(200).send("País editado com sucesso");

     }catch(error){
         console.log(error)
         res.status(errorCode).send(error.message)
     }
 
 })

app.listen(3003, () => {
    console.log("Servidor pronto!")
})

