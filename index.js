import express from "express";      // Requisição do pacote do express
const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "Luis henrique ",      // Substitua pelo seu nome
  });
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

//index.js
app.get("/usuario/:id", async (req, res) => {
    console.log("Rota GET /usuario/# solicitada");
    try {
      const usuario = await selectUsuario(req.params.id);
      if (usuario.length > 0) res.json(usuario);
      else res.status(404).json({ message: "Usuário não encontrado!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });

//index.js
app.use(express.json());
//index.js

import { selectUsuario, selectUsuario, insertUsuario } from "./bd.js";

//index.js
app.post("/usuario", async (req, res) => {
    console.log("Rota POST /usuario solicitada");
    try {
      await insertUsuario(req.body);
      res.status(201).json({ message: "Usuário inserido com sucesso!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });

//index.js
import { selectUsuario, selectUsuario, insertUsuario, deleteUsuario } from "./bd.js";

//index.js
app.delete("/usuario/:id", async (req, res) => {
    console.log("Rota DELETE /usuario/# solicitada");
    try {
      const usuario = await selectUsuario(req.params.id);
      if (usuario.length > 0) {
        await deleteUsuario(req.params.id);
        res.status(200).json({ message: "Usuário excluido com sucesso!!" });
      } else res.status(404).json({ message: "Usuário não encontrado!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });

  //index.js

import { selectUsuario, selectUsuario, insertUsuario, deleteUsuario, updateUsuario } from "./bd.js";

//index.js
app.put("/usuario/:id", async (req, res) => {
    console.log("Rota PUT /usuario/# solicitada");
    try {
      const id = req.params.id;
      const usuario = await selectUsuario(id);
      if (usuario.length > 0) {
        await updateUsuario(id, req.body);
        res.status(200).json({ message: "Usuário atualizado com sucesso!" });
      } else res.status(404).json({ message: "Usuário não encontrado!" });
    } catch (error) {
      console.log(error);
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });