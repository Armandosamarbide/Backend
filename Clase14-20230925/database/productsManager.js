const products = [
    {
      "name": 'Samsung TV 42 inch',
      "price": 799.99,
      "stock": 15,
      "description": 'High-definition TV with smart features',
      "id": 1
    },
    {
      "name": 'Samsung TV 24 inch',
      "price": 499.99,
      "stock": 15,
      "description": 'High-definition TV with smart features',
      "id": 1
    },
    {
      "name": 'Samsung TV 32 inch',
      "price": 599.99,
      "stock": 15,
      "description": 'High-definition TV with smart features',
      "id": 1
    },
    {
      "name": 'Samsung TV 45 inch',
      "price": 899.99,
      "stock": 15,
      "description": 'High-definition TV with smart features',
      "id": 1
    },
    {
      "name": 'Samsung TV 55 inch',
      "price": 999.99,
      "stock": 15,
      "description": 'High-definition TV with smart features',
      "id": 1
    },
    {
      "name": 'Samsung TV 70 inch',
      "price": 1099.99,
      "stock": 15,
      "description": 'High-definition TV with smart features',
      "id": 1
    },
    {
      "name": 'Samsung TV 75 inch',
      "price": 1799.99,
      "stock": 15,
      "description": 'High-definition TV with smart features',
      "id": 1
    }
  ]

  const getAllProducts = () => {
    return products
}
const getProductById = (id) => {

}

const deleteProductById = (id) =>{
    let posProductoBuscado = products.findIndex(product => product.id === Number(id))
    products.splice(posProductoBuscado, 1)
}
const updateStockById = (id, stock) =>{
    const productToUpdate = products.find(product => product.id === Number(id))
    productToUpdate.stock =  stock

}
        
        
module.exports = { getAllProducts, deleteProductById, updateStockById}
