### Exercício 1

a)

- FLOAT: para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
* 
- VARCHAR(n): serve para caracteres variáveis, strings de no máximo n caracteres;
- DATE: representa uma data (YYY-MM-DD);
- PRIMARY KEY: chave de identificação única;
- NOT NULL: serve para fixar como obrigatório e não opcional 

b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.
* 
- SHOW DATABASES: Mostra os nomes de cada database que existe na schema.
- SHOW TABLES: Mostra as tabelas que existem na schema.

c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.
* 
Esse comando retorna as informações em forma de tabela, de forma mais clara e estruturada que nos comandos SQL.

### Exercício 2

O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
``` 
*
a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
``` 

b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*
* 
Surgiu a seguinte mensagem: Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMÁRIA'.
Esse erro ocorreu, pois a primary key é uma chave de identificação única, cada query tem a sua e não pode ser repetida.

c) 
* 
Error Code: 1136. Column count doesn't match value count at row 1. 
A contagem de colunas não corresponde à contagem de valores na linha 1

d)
* Error Code: 1364. Field 'name' doesn't have a default value.
O campo 'nome' não tem um valor padrão.

e)
* 
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1.
Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.

O dado do campo birth_date precisa ser uma string no formato "YYYY-MM-DD"
Y de year (ano), M de month (mês) e D de day (dia)

f)

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Patolino",
  100000,
  "1930-08-20", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Liloca",
  2000000,
  "1926-02-05", 
  "female"
);
```
### Exercicio 3

*a. Escreva uma query que retorne todas as informações das atrizes*
*
SELECT * FROM Actor WHERE gender = "female"

*b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*
* 
SELECT id, salary from Actor WHERE name = "Tony Ramos"

*c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*
* 

SELECT * FROM Actor WHERE gender = "invalid"

A pesquisa é válida, mas não é encontrado nenhuma info com gender invalid.


*d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*
* 
SELECT id, name, salary from Actor WHERE salary < 500000

e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*

SELECT id, nome from Actor WHERE id = "002"

* 
Error Code: 1054. Unknown column 'nome' in 'field list'
Coluna desconhecida 'nome' na 'lista de campos'
Esse erro ocorreu em razão da coluna nome não existir e sim name.

a quert correta é:

SELECT name, id from Actor WHERE id = "002"


### Exercicio 4

Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

- cujos nomes começam com "A" ou "J"; e
- cujos salários são maiores do que R$300.000

SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000


*a. Explique com as suas palavras a query acima*
* 
Selecione todos os atores e atrizes cujos nomes começam com "A" ou "J"; e cujos salários são maiores do que R$300.000

*b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*
* 
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000

*c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 

SELECT * FROM Actor WHERE (name LIKE "%g% OR name LIKE %G%") 

*d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*
