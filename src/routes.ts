import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes }
/*
  Tipos de parametros
  * Routes Params => Parametros de rotas
      http://localhost:3333/settings/1

  * Query Params => Filtos de buscas
      http://localhost:3333/settings/1?search=algumacoisa

  * Body Params => Parametros do corpo da requisição
      json
*/