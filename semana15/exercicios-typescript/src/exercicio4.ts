/* 4)
a) Como você faria, já com a extensão instalada, 
para gerar um arquivo javascript a partir do  arquivo typescript 
com o código abaixo?

type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

** Como instalei o TS com um comando global: npm install -g typescript,
 para gerar um arquivo JS a partir de um TS, 
deve-se executar o comando:
 tsc ./nome-do-arquivo.ts


 b) E se este arquivo estivesse dentro de uma pasta chamada src. 
 O processo seria diferente? Se sim, descreva as diferenças.

 **Sim, deve-se adicionar o nome da pasta antes do nome do arquivo
 da seguinte forma:
 tsc ./src/nome-do-arquivo.ts


 c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? 
 Caso conheça, explique como fazer.

 ** Sim, executando o comando sem parâmetros: tsc.

 d) Compare esse arquivo com o que criamos durante a aula (ele está disponível 
na área de **configuração do projeto** ali em cima). Leia as descrições sobre 
cada uma das propriedades. Alguma configuração que chamou sua atenção? 
O que mudou em comparação com o arquivo criado pelos slides?

** Foram descomentadas algumas funcionalidades como:

 "sourceMap": true,          
 "outDir": "./build",       
 "rootDir": "./src",        
 "removeComments": true,   
 "noImplicitAny": true 

 E modificada a funcionalidade "target" de es5 para es6.
   

*/

