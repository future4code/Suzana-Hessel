import { Request, Response} from 'express'
import { SignupDTO, UserBusiness } from '../business/UserBusiness';


export class UserController {
    private userBusiness: UserBusiness;
  
    constructor() {
      // Instanciando o business
      this.userBusiness = new UserBusiness();
    }
  
    async signup(req: Request, res: Response) {
      try {
        // Monta o DTO
        const signupDTO: SignupDTO = {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role
        };
  
        // Valida o DTO
        if (!signupDTO.email || !signupDTO.name || !signupDTO.password) {
          throw new Error("Algum parâmetro faltando");
        }
  
        // Invoca o caso de uso
        const output = await this.userBusiness.signup(signupDTO);
  
        res.send({ token: output.token });
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    }
  
    async login(req: Request, res: Response) {
      try {
        const email = req.body.email;
        const password = req.body.password;
  
        // Valida as entradas
        if (!email || !password) {
          throw new Error("Algum parâmetro faltando");
        }
  
        // Invoca o caso de uso
        const output = await this.userBusiness.login(email, password);
  
        res.send({ token: output.token });
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    }
  }