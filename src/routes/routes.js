import { Router } from "express";
import { PetRoutes } from "./petsRoutes.js";
import { AuthRoutes } from "./authRoutes.js";
import { UsuariosRoutes } from './usuarioRoutes.js'
import { TarefaRoutes } from './tarefaRoutes.js'
import { FeedbackRoutes } from "./feedbackRoutes.js";
import { PatrocinioRoutes } from "./patrocinioRoutes.js";
import { adocaoRoutes } from "./adocaoRoutes.js";
import { EventoRoutes } from './eventosRoutes.js'

const routes = Router();

// Adicionando as rotas
routes.use('/pet', PetRoutes);
routes.use('/usuario', UsuariosRoutes);
routes.use('/tarefa', TarefaRoutes)
routes.use('/feedback', FeedbackRoutes);
routes.use('/auth', AuthRoutes);
routes.use('/patrocinio', PatrocinioRoutes);
routes.use('/adocao', adocaoRoutes);
routes.use('/eventos', EventoRoutes);

export default routes;
