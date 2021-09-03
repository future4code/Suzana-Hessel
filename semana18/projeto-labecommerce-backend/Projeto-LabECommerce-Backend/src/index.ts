import app from "./App"
import createUser from "./endpoints/createUser"
import createProduct from "./endpoints/createProduct"


app.post(`/user`, createUser)
app.post(`/product`, createProduct)