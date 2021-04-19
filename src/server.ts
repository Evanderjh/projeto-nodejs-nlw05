import express, { request, response } from 'express';

const app = express();

app.get("/", (request, response) => {
  //return response.send("Olá NLW 05");
  return response.json({
    message: "Olá NLW 05"
  });
})

app.post("/", (request, response) => {
  return response.json({ message: "Usuário salvo com sucesso!" })
})

app.listen(3333, () => console.log("Server is running on port 3333"));

/*
Quando aparecer 3 pontinhos na importação da biblioteca, significa que temos
que instalgar as tipagens da biblioteca.

Neste caso damos o seguinte comando no terminal

npm i @types/express -D
-D é para instalar como dependencia de desenvolvimento

Após instalar o express, intalamos tbm o typescript, tbm como dependencia
de desenvolvimento e após a instalação, fazemos o comando:
  npm tsc --init
para que ele configure nosso

Instalaremos tbm a dependencia  ts-node-dev como dependencia de desenvolvimento
  ts-node-dev -D
Ele nos ajuda a executar o nosso server e o atualiza quando percebe alguma
alteração no código do server

  GET = BUSCAS
  POST = CRIAÇÃO
  PUT = ALTERAÇÃO
  DELETE = DELETAR
  PATCH = ALTERAR UMA INFO ESPECÍFICA
*/