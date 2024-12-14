import { Router } from "express";

import { PatrocinioController } from "../controllers/PatrocinioController.js";

const router = Router();
const patrocinioController = new PatrocinioController();

router.get('/', patrocinioController.getAll);
router.get('/:id', patrocinioController.getById);
router.put('/:id', patrocinioController.update);
router.post('/', patrocinioController.create);
router.delete('/:id', patrocinioController.delete);

export { router as PatrocinioRoutes }