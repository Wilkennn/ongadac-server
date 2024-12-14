import { Router } from "express";

import { PetController } from "../controllers/PetController.js";

const router = Router();
const petController = new PetController();

router.post('/', petController.createPet);
router.get('/', petController.getAllPet);
router.get('/:id', petController.getPetById);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);

export { router as PetRoutes }