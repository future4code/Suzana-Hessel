import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)


 
//Exercícios - Herança

//1. 

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public getPass(): string {
        return this.password
    }

    public introduceYourSelf(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
  }
  
  const id = "a1b2c3d4";
  const email = "su@hotmail.com";
  const name = "Suzana";
  const password = "su****"

  const user = new User(id, email, name, password)

//   console.log(user.getId(), user.getEmail(), user.getName(), user.getPass());

//2. 

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
      purchaseTotal: number
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal = purchaseTotal;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }

    
  }

const creditCard = "cartão de crédito" 
const purchaseTotal = 550

const userCostumer = new Customer(id, email, name, password, creditCard, purchaseTotal) 


//3.

// console.log(
//     userCostumer.getId(), 
//     userCostumer.getEmail(), 
//     userCostumer.getName(), 
//     userCostumer.getPass(), 
//     userCostumer.getCreditCard(),
//     userCostumer.purchaseTotal
//     )

//4. 

userCostumer.introduceYourSelf()

console.log(
    userCostumer.getId(), 
    userCostumer.getEmail(), 
    userCostumer.getName(), 
    userCostumer.getPass(), 
    userCostumer.getCreditCard(),
    userCostumer.purchaseTotal,
    userCostumer.introduceYourSelf()
    )

//5.

// public introduceYourSelf(): string {
//     return `Olá, sou ${this.name}. Bom dia!`
// }


//Exercícios - Polimorfismo

//1. 

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

  const client: Client = {
      name: "Jenny",
      registrationNumber: 2,
      consumedEnergy: 120,

      calculateBill:() => {
          return 5
      }
  }

  console.log(client.name, client.registrationNumber, client.consumedEnergy,client.calculateBill())


  //2

  export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

  

//   const newPlace = new Place(cep)

//3.
export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
      this.residentsQuantity = residentsQuantity
      this.cep = cep
    }

    public getResidentsQuantity(): number{
        return this.residentsQuantity
    }

}

const residentsQuantity = 6


export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
      this.floorsQuantity = floorsQuantity
      this.cep = cep
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

const floorsQuantity = 12

export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
        super(cep);
        this.machinesQuantity = machinesQuantity
        this.cep = cep
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

const machinesQuantity = 10


//4. 

class ResidentialClient extends Residence implements Client {
    constructor(

        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string

    ){
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}

//5.

class CommercialClient extends Commerce implements Client {
    constructor(

        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ){
        super(floorsQuantity, cep)
    }

    public getCnpj(): string{
        return this.cnpj
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}

//6.

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: number,
        machinesQuantity: number,
        cep: string
    ){
        super(machinesQuantity, cep)
    }

    public getIndustryNumber(): number {
        return this.industryNumber
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity
    }
}
