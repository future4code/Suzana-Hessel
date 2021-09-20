import { app } from "./app"
import { createTask } from "./endpoints/createTask"
import { getTaksById } from "./endpoints/getTaskById"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signupt"


app.post('/user/signup', signup)
app.post('/user/login', login)

app.post('/posts/create', createTask)
app.get('/posts/:id', getTaksById )
