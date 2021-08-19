### exercicio 1

*a. Explique o que é uma chave estrangeira*
* 
FOREIGN KEY é uma chave estrangeira utilizada para relacionar (ou referenciar) uma tabela com outra e deve sempre se referenciar a uma PRIMARY KEY da outra tabela.

*b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
* 
CREATE TABLE Ratings (
	id VARCHAR(255) PRIMARY KEY,
	comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Ratings (id, comment, rate, movie_id)
VALUES (
"001",
"Amei!",
10,
"004"
);
INSERT INTO Ratings (id, comment, rate, movie_id)
VALUES (
"002",
"Bom!",
7,
"003"
);
INSERT INTO Ratings (id, comment, rate, movie_id)
VALUES (
"003",
"Amei!",
10,
"005"
);
INSERT INTO Ratings (id, comment, rate, movie_id)
VALUES (
"004",
"Mais ou menos!",
5,
"001"
);

SELECT * FROM Ratings;

*c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*
* 
Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`molina-2136367-suzana-hessel`.`Ratings`, CONSTRAINT` Ratings_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movie` (` id`))
Resulta em um erro relacionado a FOREIGN KEY, já que as tabelas estão relacionadas a partir dessa chave e o id do filme, que no caso não existe.

d. *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*

ALTER TABLE Movie DROP COLUMN rating;

*e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*
* 
Surge o seguinte resultado: 
Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`molina-2136367-suzana-hessel`.`Ratings`, CONSTRAINT` Ratings_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movie` (` id`))
Para deletar um item que está relacionado com duas tabelas é necessário deletar antes, todas as referencias dele.


### exercicio 2

CREATE TABLE MovieCast (
movie_id VARCHAR(255),
actor_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

*a. Explique, com as suas palavras, essa tabela*
* 
Foi criada uma tabela para listar o elenco de um filme  relacionando duas tabelas anteriores a de Movie e a de Actor pelo id.

*b. Crie, ao menos, 6 relações nessa tabela* 
* 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"001",
"004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"001",
"005"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"002",
"004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
'003'
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"005",
"001"
);


*c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*
* 
Essa relação não resulta no seguinte erro:
Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`molina-2136367-suzana-hessel`.`MovieCast`, CONSTRAINT` MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movie` (` id`))


*d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*
* 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"008",
"001"
);

Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`molina-2136367-suzana-hessel`.`MovieCast`, CONSTRAINT` MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERÊNCIAS` Ator` (` id`))
Esse erro ocorre pois, para deletar um item que está relacionado com duas tabelas é necessário deletar antes, todas as referencias dele.

### exercicio 3

*a. Explique, com suas palavras, a query acima. O que é o operador `ON`?*
* 
SELECT * FROM Movie 
INNER JOIN Ratings ON Movie.id = Ratings.movie_id;

Essa query juntou as informações correspondentes das tabelas Movie e Ratings, a partir do id de cada elemento.

*b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
* 
SELECT m.id as movie_id, r.rate as ratings, m.name as name FROM
Movie m
INNER JOIN Ratings r ON m.id = r.movie_id;

### DESAFIOS