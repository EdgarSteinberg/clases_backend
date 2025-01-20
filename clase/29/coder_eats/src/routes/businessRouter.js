import { Router } from 'express';

import businessController from '../controllers/businessController.js';
const { getBusiness, getBusinessById, createBusiness, addProduct } = businessController;


const router = Router();

router.get("/", getBusiness);
router.get("/:bid", getBusinessById);
router.post("/", createBusiness);
router.put("/:bid", addProduct)

export default router;