import { PizzaDatabase } from "../data/PizzaDataBase";
import { Pizza} from "../model/Pizza";
import { IdGenerator } from "../services/idGenerator";
import pizzaList from "../data/PizzaData"

export interface PizzaDTO {
  name: string;
  price: number;
}

class PizzaBusiness {
  async create(pizzaDTO: PizzaDTO) {
    // Gerar um id aleatório pro usuário
    const idGenerator = new IdGenerator();
    const randomId = idGenerator.generateId();

    // Criar modelo do usuário
    const pizzaModel: Pizza = {
      id: randomId,
      name: pizzaDTO.name,
      price: pizzaDTO.price,
    };

    // Salvar o produto no banco
    const savedPizza = await PizzaDatabase.save(pizzaModel);

    return {
      pizza: pizzaModel,
    };
  }

  async search(pizzaDTO: Pizza) {
    const filteredProducts = {
      generalFilter: [],
      nameFilter: [],
     priceFilter: [],
      idFilter: [],
    };
    if (
      pizzaDTO.name !== ":name" &&
      pizzaDTO.price !== ":price" &&
      pizzaDTO.id !== ":id"
    ) {
      filteredPizzas.generalFilter =
        await pizzaDatabase.selectPizzaByTagsAndNameAndId(
          pizzaDTO.price,
          pizzaDTO.name,
          pizzaDTO.id
        );
    }

    if (pizzaDTO.name !== ":name") {
      filteredPizzas.nameFilter = await pizzaDatabase.selectProductByName(
        pizzaDTO.name
      );
    }

    if (pizzaDTO.price !== ":price") {
      filteredPizzas.priceFilter = await pizzaDatabase.selectProductByTags(
        pizzaDTO.price
      );
    }
    if (pizzaDTO.id !== ":id") {
      filteredPizzas.idFilter = await pizzaDatabase.selectProductById(
        pizzaDTO.id
      );
    }
    return {
      filteredPizzas,
    };
  }
}
export default new PizzaBusiness();