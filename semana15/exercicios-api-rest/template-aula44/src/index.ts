import express, { Request, Response } from 'express'
import cors from 'cors'


type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

/*
exercicio 1 

*a. Qual método HTTP você deve utilizar para isso?*

**Nesse caso deve ser utilizado o método GET, pois é ele quem busca 
informações na entidade.

*b. Como você indicaria a **entidade** que está sendo manipulada?*
Uma entidade em uma API é um caminho para acessar as
tabelas no banco de dados.

**No express, a entidade é representada pelo path, que no caso é users e 
vai ser indicada da seguinte forma:
"/users"
*/

/* exercicio 2 

Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham 
uma propriedade `type` específica, recebendo apenas um `type` por vez. Após isso, 
responda:
*/

app.get("/users", (req: Request, res: Response ) => {
  try{
    let type = req.query.type as string
    let search = req.query.search as string

    if(type){
      type = type.toUpperCase()

      if(type in USER_ROLES) {
        const result = users.filter(user => user.type)
        return res.status(200).send(result)
      }

      throw new Error("Tipo inválido")
    }

    if(search) {
      search = search.toLowerCase()

      const result = users.filter(
        user => user.name.toLowerCase().includes(search)
      )
      console.log(result, search)

      if (result.length === 0){
        return res.status(204).send("Usuário não encontrado")
      }
      return res.status(200).send(result)
    }
    res.status(200).send(users)
  }catch(err){
    res.status(400).send(err.message)
  }
})

/*
a. Como você passou os parâmetros de type para a requisição? Por quê?
**Foi passado por query, pois é usado para busca dentro de um mesmo conjunto,
como por exemplo, nome.

b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam 
utilizados?
**Creio que é possível especificar cada type para que sejam utilizados somente eles.
Validação.

*/


/*
exercicio 3

Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca 
que encontre um usuário buscando por nome.

*a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*

**Query params

b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário 
tenha sido encontrado.
*/


/*
exercicio 4

Fizemos algumas buscas no nosso conjunto de itens, agora é 
hora de **adicionar** coisas. Comecemos criando um usuário na nossa lista. 
Crie um endpoint que use o método `POST` para adicionar um item ao nosso 
conjunto de usuários.
*/

app.post("/users/crate", (req: Request, res: Response) => {
  try{
    const {name, email, age } = req.body
    let type = req.body.type as string

    if (!name || !email || !age || !type){
      throw new Error("Missing data in body to create user")
    }
    if(typeof name !== "string"){
      throw new Error("Invalid name")
    }
    if(typeof email !== "string"){
      throw new Error("invalid email")
    }
    if(typeof age !== "number"){
      throw new Error("Invalid age")
    }

    type = type.toUpperCase()
    if (!(type in USER_ROLES)) {
      throw new Error("Invalid type")
    }

    users.forEach(user => {
      if (user.email === email) {
        throw new Error("Email already exists")
      }
    })

    const newUser: User = {
      id: users.length,
      name,
      email,
      age,
      type: type === USER_ROLES.NORMAL
      ? USER_ROLES.NORMAL
      : USER_ROLES.ADMIN
    }

    users.push(newUser)

    res.status(200).send({
      message: "user create successfuly",
      user: newUser
    })

  }catch (error){

  }
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})



/*
a. Mude o método do endpoint para `PUT`. O que mudou?
A funcionalidade não mudou porque quem dita o que ocorre é o código no handler, 
o que muda é a semântica do verbo/método na documentação da API e se ela segue os 
padrões estabelecidos pela comunidade.
*/

app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    users.forEach(user => {
      if (user.id === id) {
        user.name += "-ALTERADO"
        return res.status(200).end()
      }
    })
    res.status(204).send("User not found")
  } catch (err) {
    res.status(400).send(err.message)
  }
})

/*
b. Você considera o método `PUT` apropriado para esta transação? Por quê?
  Não, porque a convenção dita que novos itens em entidades sejam aplicados pelo POST, 
  enquanto PUT e PATCH sejam utilizados para edição completa e parcial, respectivamente

*/

app.patch("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    users.forEach(user => {
      if (user.id === id) {
        user.name += "-REALTERADO"
        return res.status(200).end()
      }
    })
    res.status(204).send("User not found")
  } catch (err) {
    res.status(400).send(err.message)
  }
})

app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users.splice(i, 1)
        return res.status(200).end()
      }
    }

    res.status(204).send("User not found")
  } catch (err) {
    res.status(400).send(err.message)
  }
})