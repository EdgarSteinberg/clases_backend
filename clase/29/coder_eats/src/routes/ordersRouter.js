import { Router } from 'express';

import ordersController from '../controllers/ordersController.js';
const { getOrders, getOrderById, createOrder, resolverOrder } = ordersController;

const router = Router();

router.get("/", getOrders);
router.get("/:oid", getOrderById);
router.post("/", createOrder);
router.put("/:oid", resolverOrder);

export default router;