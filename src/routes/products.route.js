import { Router } from "express";
import ProductController from "../controller/products.controller.js";

const productsRouter = Router()

productsRouter.post('/', ProductController.createMethod)
productsRouter.get('/', ProductController.getMethod)
productsRouter.delete('/:productId', ProductController.deleteMethod)
productsRouter.put('/:productId', ProductController.updateMethod)

export default productsRouter
