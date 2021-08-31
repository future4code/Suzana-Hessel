import express, {Request, Response} from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import {AddressInfo} from "net"
import {criaTurmaInput, TIPO_TURMA, criaEstudanteInput } from "./types"
import { connection } from "./data/connection";

dotenv.config();

const app = express();
app.use(express.json);
app.use(cors());


app.post("/turma", async (req: Request, res: Response) => {
let errorCode = 400;
    try{

        const input: criaTurmaInput = {
            id: req.body.id,
            nome: req.body.nome,
            data_inicio: req.body.data_inicio,
            data_fim: req.body.data_fim,
            modulo: 0,
            tipo: req.body.tipo
        }

        if(!input.id || !input.nome || !input.data_inicio || !input.data_fim || !input.tipo){
            errorCode = 422;
                throw new Error ("Preencha os campos corretamente")
        }

        if(input.tipo !== TIPO_TURMA.INTEGRAL && input.tipo !== TIPO_TURMA.NOTURNO){
            errorCode = 422;
                throw new Error ("Os valores possíveis são 'integral' ou 'noturno' ")
        }

        if(input.tipo === TIPO_TURMA.NOTURNO){
            input.nome = input.nome+="-na-night"
        }

        await connection.raw(`
        INSERT INTO TURMA (id, nome, data_inicio, data_fim, modulo)
        VALUES(
            ${input.id},
            "${input.nome}",
            "${input.data_inicio}",
            "${input.data_fim}",
            ${input.modulo}
        )
        
        `)

        res.status(200).send({message: "Turma criada com sucesso"})



    }catch(error){
       res.status(errorCode).send({message: error.message}) 
    }

})

app.post("/estudante", async (req: Request, res: Response) => {
    let errorCode = 400
   try {
       const input: criaEstudanteInput = {
        id: req.body.id,
        nome: req.body.nome,
        email: req.body.email,
        data_nasc: req.body.data_nasc,
        hobbies: req.body.hobbies,
        turma_id: req.body.turma_id
       }

       if(!input.id || !input.nome || !input.email || !input.data_nasc || input.hobbies.length<1 ){
        errorCode = 422;
            throw new Error ("Preencha os campos corretamente")
    }

    await connection.raw(`
    INSERT INTO ESTUDANTE(id, nome, email, data_nsc, hobbies,  turma_id)
    VALUES(
        ${input.id},
       " ${input.nome}",
        "${input.email}",
        "${input.data_nasc}",
        "${input.turma_id}"
    )
    `)

    for( let hobby of input.hobbies){
        const idPassatempo = Math.floor(Math.random() * 1000000 )
        await connection.raw(`
        INSERT INTO PASSATEMPO(id, nome)
        VALUES(
            ${idPassatempo},
            "${hobby}"
        )
        `)
        await connection.raw(`
        INSERT INTO PASSATEMPO(estudante_id, passatempo_id)
        VALUES(
            ${input.id},
            ${idPassatempo}
        )
        `)
    }

    res.status(201).send({message: "Conseguimos criar!"})

   } catch(error){
       res.status(errorCode).send({message: error.message})

   }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 })
