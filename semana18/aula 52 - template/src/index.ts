import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)


/* EXERCICIO 1

Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e 
quais são privadas e responda as perguntas discursivas em comentários no arquivo 
`index.ts`

a*) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*

O construtor serve para inicializar variáveis dentro de uma classe e deve ser declarado 
com a função constructor. Para chamar o construtor utiliza-se o this.


b*) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa 
classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem 
`"Chamando o construtor da classe User"` foi impressa no terminal?*
*/

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf(): string {
        return this.cpf
    }

    public getName(): string {
        return this.name
    }
    public getAge(): number {
        return this.age
    }

}

    const cpf = "abc123";
    const name = "Astrodev";
    const age = 25

    const user = new UserAccount(cpf, name, age);

    console.log(user. getCpf());
    console.log(user. getName());
    console.log(user. getAge());

//A mensagem aparece somente uma vez.

/* 
c*) Como conseguimos ter acesso às propriedades privadas de uma classe?*

Variáveis privadas só podem ser acessadas de dentro da própria classe 
(usando a keyword this).

*/

/* 

Transforme a variável de tipo abaixo, chamada Transaction em uma classe Transaction. 
Ela deve conter as mesmas propriedades: data, valor e descrição. Agora, porém, todas 
elas devem ser privadas. Portanto, crie métodos (getters) para a leitura desses valores,
tanto para essa classe quanto para a classe UserAccount. 
Crie uma instância dessa classe e adicione à instância já criada de UserAccount 

*/

type Transaction = {
    description: string,
    value: number,
    date: string
}

class Transaction {
    private date: string,
    private value: number,
    private description: string

    constructor(date: string, value: number, description: string){
        this.date = date;
        this.value = value;
        this.description = description
    }

    public getDate(): string{
        return this.date
    }

    public getValue(): number{
        return this.value
    }

    public getDescription(): string{
        return this.description

    }
}

/*

Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação. 
Ela deve possuir a propriedades accounts, privada (crie os getters e setters que achar 
apropriado).

*/

class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]){
        this.accounts = accounts
    }

    public getAccountsUser() {
        return this.accounts
    }

}


