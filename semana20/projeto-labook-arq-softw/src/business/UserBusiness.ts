import { UserDatabase } from "../data/UserDataBase"
import { User } from "../model/User"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"
import { IdGenerator } from "../services/idGenerator"

export interface SignupDTO {
    name: string
    email: string
    password: string
    role: any
  }
  
  export class UserBusiness {
    private userDatabase: UserDatabase
    private hashManager: HashManager
    private authenticator: Authenticator
  
    constructor() {
      this.userDatabase = new UserDatabase()
      this.hashManager = new HashManager()
      this.authenticator = new Authenticator()
    }
  
    async signup(signupDTO: SignupDTO) {
      // Gerar um id aleatório pro usuário
      const idGenerator = new IdGenerator()
      const randomId = idGenerator.generateId()
  
      // Encripta a senha
     
      const passwordHash = await this.hashManager.hash(signupDTO.password)
  
      // Não pode repetir o email
      const userByEmail = await this.userDatabase.selectUserByEmail(signupDTO.email)
  
      if(userByEmail) {
        throw new Error('Usuário com esse email já existe!!!')
      }
  
      // Criar modelo do usuário
      const userModel: User = {
        id: randomId,
        email: signupDTO.email,
        name: signupDTO.name,
        password: passwordHash,
        role: signupDTO.role
      }
  
      // Salvar o usuário no banco
      const savedUser = await this.userDatabase.save(userModel)
  
      // Gerar o token de autenticação
      const token = this.authenticator.generateToken({id: savedUser.id})
  
      // Retornar o token de autenticação
      return {
        user: savedUser,
        token: token
      }
    }
  
    async login(email: string, password: string) {
      const user = await this.userDatabase.selectUserByEmail(email)
  
      if(!user) {
        throw new Error('Usuário não existe')
      }
  
      const isPasswordCorrect = await this.hashManager.compare(password, user.password)
  
      if(!isPasswordCorrect) {
        throw new Error('Senha incorreta!')
      }
  
      const token = this.authenticator.generateToken({id: user.id})
  
      return {
        token: token,
        user: user
      }
    }
  }