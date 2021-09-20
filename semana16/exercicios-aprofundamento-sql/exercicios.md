### exercicio 1

a) ALTER TABLE Actor DROP COLUMN salary;

* Comando utilizado para remover a coluna salary da tabela

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

* Comando para renomear a coluna e alterar suas definições  que no caso é de, gender para sex.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

* Comando para alterar o numero de caracter da coluna gender de (6) para (255).

d) Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres

* ALTER TABLE Actor CHANGE gender gender VARVHAR(100)


### exercicio 2

*a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*
* 
UPDADTE Actor 
SET 
name = "Suzana",
birth_date = "1992-12-28"
WHERE id = "003"


*b. Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.
* 
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "004";

c. Escreva uma query que atualize todas as informações do ator com o id `005`*
* 

UPDATE Actor 
SET 
name  = "John Doe",
salary = 10000,
birth_date = "1955-10-02",
gender = "male"
WHERE id = "005"

d*. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*
* 
UPDATE Actor 
SET 
name = "LILICA",
WHERE id = "006"

Resultado: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

### exercicio 3

*a. Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*
* 
DELETE FROM Actor WHERE name = "Fernada Montegro"

*b. Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*
* 
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

### exercicio 4

*a. Escreva uma query que pegue o maior salário de todos os atores e atrizes*
* 
SELECT MAX(salary) FROM Actor 

*b. Escreva uma query que pegue o menor salário das atrizes*
* 
SELECT MIN(salary) FROM Actor WHERE gender = "female"

*c. Escreva uma query que pegue a quantidade de atrizes*
* 
SELECT COUNT(*) FROM Actor WHERE gender = "female"

*d. Escreva uma query que pegue a soma de todos os salários*
* 
SELECT SUM(salary) FROM Actor
SELECT SUM(salary) FROM Actor WHERE gender = "female";
SELECT SUM(salary) FROM Actor WHERE gender = "male";

### exercicio 5

* LIMIT: 
SELECT * FROM Actor LIMIT 3

* ORDER BY
- ORDER BY ASC(orderm alfabetica crescente): SELECT * FROM Actor ORDER BY name ASC
- ORDER BY ASC com LIMIT: SELECT * FROM Actor ORDER BY name
ASC LIMIT 4
- ORDER BY ASC com LIMIT: 
SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4

* GROUP BY:
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender

*a. Releia a última query. Teste-a. Explique o resultado com as suas palavras*
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
* 
Essa query retorna a quantidade de atrizes e atores presentes na tabela.

*b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
* 
SELECT * FROM Actor 
WHERE gender = "male"
ORDER BY name DESC

*c. Faça uma query que retorne todos os atores ordenados pelo salário*
* 
SELECT * FROM Actor WHERE salary ORDER BY salary DESC
or
SELECT * FROM Actor ORDER BY salary

*d. Faça uma query que retorne os atores com os três maiores salarios*
* 
SELECT * FROM Actor 
ORDER BY salary DESC 
LIMIT 3;

*e. Faça uma query que retorne a média de salário por gênero*
* 
SELECT AVG(salary), gender FROM Actor 
GROUP BY gender

### exercicio 6
*a. Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 

*b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*

*c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*

*d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*


### exercicio 7
### exercicio 8