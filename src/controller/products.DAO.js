import db from "../config/db.js";

const tableName = 'products'

const createProduct = (productData) => db(tableName).insert({...productData})
const getProducts = () => db(tableName)
const getProductById = id => getProducts().where('id', id)
const deleteProduct = (productId) => db(tableName).where('id', productId).del()
const updateProduct = (productId, productData) => db(tableName).where('id', productId).update(productData)

const ProductsDAO = {
    createProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    getProductById
}

export default ProductsDAO
