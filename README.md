# EasyShop
Uma página inspirada em um ecommerce feita com [React](https://react.dev) + [Next.js](https://nextjs.org) e [MySQL](https://www.mysql.com)

# Instruções para iniciar o projeto:

Instala todas as dependências necessárias para rodar o projeto.

```sh
npm install
```

Necessário criar um banco com as seguintes configurações:

Um schema com o nome "shopeasy".

Duas tabelas, a de produtos:

```sh
CREATE TABLE `produtos` (
  `produtosid` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `preco` int DEFAULT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`produtosid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

e a de usuários:

```sh
CREATE TABLE `users` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `cep` int DEFAULT NULL,
  `endereco` varchar(45) DEFAULT NULL,
  `bairro` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```


Após isso, é necessário você informar a senha que está registrada em seu banco de dados. Após o clone do repositório, acesse a pasta "src" e dentro dela haverá um arquivo chamado "db.js"

Dentro do arquivo, você encontrará o seguinte código:

```sh
import mysql from'mysql2/promise'

const dbconnection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'shopeasy',
    password: '****',
  });

  export default dbconnection;
```


em "password", você substituirá as aspas pela senha do seu banco.


# Compilar e inicializar o projeto

Para conseguir inicializar o projeto, execute o comando abaixo no terminal:

```sh
npm run dev
```
