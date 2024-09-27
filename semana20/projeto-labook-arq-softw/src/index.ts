import { app } from "./app"
import { PostController } from "./controllers/PostController"
import { UserController } from "./controllers/UserController"

const userController = new UserController()
const postController = new PostController()

app.post('/users/signup', (req, res) => userController.signup(req, res))
app.post('/users/login', (req, res) => userController.login(req, res))

app.post('/posts/create', (req, res) => postController.createTask(req, res))
app.get('/posts/:id', (req, res) => postController.selectTaskById(req, res))
