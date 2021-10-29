import { Request, Response } from "express";
import { productsTable } from "../model/Product";
import { ProductDTO } from "../business/ProductsBusiness";
import ProductsBusiness from "../business/ProductsBusiness";

class ProductsController {
  //   private userBusiness: UserBusiness;

  async create(req: Request, res: Response) {
    try {
      // Monta o DTO
      const productDTO: ProductDTO = {
        name: req.body.name,
        tags: req.body.tags,
      };

      // Valida o DTO
      if (!productDTO.name || !productDTO.tags) {
        throw new Error("Algum parâmetro faltando");
      }

      // Invoca o caso de uso
        const output = await ProductsBusiness.create(productDTO);

      //   res.send({ token: output.token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
export default new ProductsController();
