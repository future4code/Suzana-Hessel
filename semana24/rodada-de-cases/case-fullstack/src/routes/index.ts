import { app } from "../app"
import ProductsController from "../controllers/PizzaController"


app.post('/product/create', (req, res) => ProductsController.create(req, res))
// app.get('/product/search', (req, res) => ProductsController.search(req, res))