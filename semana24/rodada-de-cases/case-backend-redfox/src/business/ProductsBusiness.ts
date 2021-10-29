import { UserDatabase } from "../data/ProductDataBase";
import { Product } from "../model/Product";
import { IdGenerator } from "../services/idGenerator";

export interface ProductDTO {
  name: string;
  tags: Array<string>;
}

class ProductsBusiness {
  private userDatabase: UserDatabase;

  constructor() {
    this.userDatabase = new UserDatabase();
  }

  async create(productDTO: ProductDTO) {
    // Gerar um id aleatório pro usuário
    const idGenerator = new IdGenerator();
    const randomId = idGenerator.generateId();

    // Criar modelo do usuário
    const productModel: Product = {
      id: randomId,
      name: productDTO.name,
      tags: productDTO.tags,
    };

    // Salvar o produto no banco
    const savedProduct = await this.userDatabase.save(productModel);

    return {
      product: savedProduct,
    };
  }
}
export default new ProductsBusiness()
