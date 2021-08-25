import app from "./app"
import createUser from './endpoints/createUser'
import { getAddressInfo } from "./services/getAddressInfo"

app.post('/users/signup', createUser)

getAddressInfo("80530230")  
    .then(console.log)