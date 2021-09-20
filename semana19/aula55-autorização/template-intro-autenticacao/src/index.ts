import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import {v4} from "uuid"
import { sign, verify } from "jsonwebtoken"
import { login } from "./endpoints/login"

app.post('/users/signup', createUser)
app.post('/users/login', login )
app.put('/users', editUser)


console.log("IDD", v4())

const token:string = sign(
    {id: "id-da-Alice"},
    "segredo para gerar a assinatura do token",
    // { expiresIn: "3h" } //tempo de expiração do token
    {expiresIn: "20h"}
)

const tokenData = verify(token, "segredo para gerar a assinatura do token")

// console.log({token})

console.log("NOVOO",{token, tokenData})
