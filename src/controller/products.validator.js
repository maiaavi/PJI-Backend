import { isEmptyString, validateIdParam } from "../utils/validator.js";
import ProductsDAO from "./products.DAO.js";

export class ProductException extends Error {
    constructor(message) {
        super(message);
        this.name = 'ProductException';
    }
}

const validateName = name => {
    if (isEmptyString(name)) {
        throw new ProductException('Invalid name')
    }
}

const validateCategory = category => {
    if (isEmptyString(category)) {
        throw new ProductException('Invalid category')
    }
}

const validateStatus = status => {
    if (isEmptyString(status)) {
        throw new ProductException('Invalid status')
    }
}

const validatePrice = price => {
    if (isNaN(Number(price))) {
        throw new ProductException('Invalid price')
    }
}

const validateQuantity = quantity => {
    if (isNaN(Number(quantity)) || Number(quantity) === 0) {
        throw new ProductException('Invalid quantity')
    }
}

const validateRating = rating => {
    if (isNaN(Number(rating))) {
        throw new ProductException('Invalid rating')
    }
}

export const validateProductId = async id => {
    if (!validateIdParam(id)) throw new ProductException('Invalid ID')
    const [product] = await ProductsDAO.getProductById(id)
    if (!product) throw new ProductException('Product not found')
}

export const productValidator = (product) => {
    validateName(product.name)
    validateCategory(product.category)
    validateStatus(product.status)
    validatePrice(product.price)
    validateQuantity(product.quantity)
    validateRating(product.rating)
}
