import { defaultErrorReturn } from "../utils/defaults.js"
import ProductsDAO from "./products.DAO.js"
import { ProductException, productValidator, validateProductId } from "./products.validator.js"

const createMethod = async (req, res) => {
    try {

        productValidator(req.body)

        const [productId] = await ProductsDAO.createProduct(req.body)

        res.send({ productId })
    } catch (error) {
        let status = 400
        if(error instanceof ProductException) status = 422
        res.status(status).send(defaultErrorReturn(error, status))
    }
}

const getMethod = async (req, res) => {
    try {
        const products = await ProductsDAO.getProducts()
        res.send(products)
    } catch (error) {
        res.status(500).send(defaultErrorReturn(error))
    }
}

const deleteMethod = async (req, res) => {
    try {
        const { productId } = req.params
        await validateProductId(productId)

        await ProductsDAO.deleteProduct(productId)
        res.send({
            message: `Product with id ${productId} has been deleted`
        })
    } catch (error) {
        let status = 500
        if(error instanceof ProductException) status = 422
        res.status(status).send(defaultErrorReturn(error, status))
    }
}

const updateMethod = async (req, res) => {
    try {
        const { productId } = req.params
        await validateProductId(productId)
        productValidator(req.body)

        await ProductsDAO.updateProduct(productId, req.body)
        res.send({
            message: `Product with id ${productId} has been updated`
        })
    } catch (error) {
        let status = 500
        if(error instanceof ProductException) status = 422
        res.status(status).send(defaultErrorReturn(error, status))
    }
}

const ProductController = {
    createMethod,
    getMethod,
    deleteMethod,
    updateMethod
}

export default ProductController
