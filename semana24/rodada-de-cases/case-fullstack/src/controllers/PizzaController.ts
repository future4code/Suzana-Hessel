import { Request, Response } from "express";
import { PizzaBusiness } from "../business/PizzaBusiness";
import { IngredientDataBase } from "../data/IngredientsDataBase";
import { PizzaDataBase } from "../data/PizzaDataBase";
import { PizzaInputDTO } from "../model/Pizza";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PizzaController{
    private pizzaBusiness: PizzaBusiness

    constructor(){
        this.pizzaBusiness = new PizzaBusiness(
            new PizzaDataBase(),
            new Authenticator(),
            new IdGenerator(),
            new IngredientDataBase()
        )
    }

    async createPizza(req: Request, res: Response){
        try{
            const input: PizzaInputDTO = {
                name: req.body.name,
                price: req.body.price,
                ingredients: req.body.ingredients
            }
    
            const token = req.headers.authorization
    
            if(!token){
                throw new Error("Deve ter token para criar pizza")
            }
    
            if(!input.name || !input.price || input.ingredients.length === 0){
                throw new Error(`Os campos ${input.name}, ${input.price} e ${input.ingredients} são obrigatórios`)
            }

            if(typeof input.ingredients !== "object"){
                throw new Error("Os ingredientes devem ser informados dentro de um array")
            }
    
            const result = await this.pizzaBusiness.createPizza(input, token)
    
            res.status(200).send(result)
        }catch(error: any){
            res.status(400).send({error: error.message})
        }
        

    }

    async getPizzas(req: Request, res: Response){
        try{
            const result = await this.pizzaBusiness.getPizzas()

            res.status(200).send(result)

        }catch(error: any){
            res.status(400).send({error: error.message})
        }
    }
}


// import { Request, Response } from "express";
// import { Pizza, pizzasTable } from "../model/Pizza";
// import { PizzaDTO } from "../business/PizzaBusiness";
// import pizzaBusiness from "../business/PizzaBusiness";

// class PizzaController {
//   // async create(req: Request, res: Response) {
//   //   try {
//   //     // Monta o DTO
//   //     const pizzaDTO: PizzaDTO = {
//   //       name: req.body.name,
//   //       tags: req.body.tags,
//   //     };

//   //     // Valida o DTO
//   //     if (!pizzaDTO.name || !pizzaDTO.tags) {
//   //       throw new Error("Algum parâmetro faltando");
//   //     }

//   //     // Invoca o caso de uso
//   //     const output = await pizzaBusiness.create(pizzaDTO);
//   //     res.status(200).send(output);
//   //   } catch (error) {
//   //     res.status(400).send(error.message);
//   //   }
//   // }

//   async search(req: Request, res: Response) {
//     try {
//       // Monta o DTO
      
//       const input: Pizza = {
//         name: req.params.name,
//         price: req.params.price,
//       };
//       console.debug("input", input)
//       // Valida o DTO
//       // if (!productDTO.name || !productDTO.tags) {
//       //   throw new Error("Algum parâmetro faltando");
//       // }

//       // Invoca o caso de uso
//       const output = await pizzaBusiness.search(input);
//       res.status(200).send(output);
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   }
// }
// export default new PizzaController();
