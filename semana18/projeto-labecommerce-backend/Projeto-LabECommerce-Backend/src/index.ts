import app from "./App"
import createUser from "./endpoints/users/createUser"
import createProduct from "./endpoints/products/createProduct"
import { getAllProducts } from "./endpoints/products/getAllProducts"
import { getAllUsers } from "./endpoints/users/getAllUsers"


app.post("/user", createUser)
app.post("/product", createProduct)

app.get("/user", getAllUsers)
app.get("/products", getAllProducts)
