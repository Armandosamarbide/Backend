"use strict";
/* Producto */
class Product {
    constructor(title, price, stock, id) {
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.id = id;
    }
}
/* Carrito */
class Cart {
    constructor(id) {
        this.cart = [];
        this.id = id;
    }
}
/* Manager de Carritos de compras */
class CartManager {
    constructor() {
        this.carts = [];
        this.id = 0;
    }
    /*     createCart crea un carrito con las propiedades cart (empieza como array vacío) e id (cada nuevo carrito tiene un id distinto)
     */ createCart() {
        this.carts.push(new Cart(this.id++));
    }
    /* getcartById recibe un cartID (cid) y devuelve el carrito buscado. Caso contrario devuelve null */
    getCartById(cid) {
        const cartFound /* Porque puede devolver un Cart o un undefined */ = this.carts.find((cart) => cart.id === cid);
        return cartFound ? cartFound : null; /* Ternario, tal como lo vimos en React */
    }
    /*  addProductCart(cid, product, quantity) recibe un cartId y un product:Product y una cantidad: Number
        Si el producto ya existe en el carrito, incrementa la cantidad
        Sino, agrega la propiedad quantity al Product, y a ese Product lo agregará al array del carrito cuyo id sea idéntico al cid
        pasado por parámetro */
    addProductCart(cid, product, quantity) {
        /* El carrito al que queremos agregar el producto existe */
        if (this.getCartById(cid)) {
            /* Yo ya se que el carrito existe */
            this.carts = this.carts.map((cartManager) => {
                if (cartManager.id === cid) {
                    if (cartManager.isInCart(product.id)) {
                        /* Logica para aumentar la cantidad del producto */
                        cartManager.cart = cartManager.cart.map((currentProduct) => {
                            if (currentProduct.id === product.id) {
                                currentProduct.quantity += quantity;
                            }
                            return currentProduct;
                        });
                    }
                    else {
                        /* Logica para agregar el producto al array cart */
                        product.quantity = quantity;
                        cartManager.addProduct(product);
                    }
                }
                return cartManager;
            });
        }
    }
}
const managerCarts = new CartManager();
managerCarts.createCart();
managerCarts.createCart();
managerCarts.createCart();
console.log(managerCarts.getCartById(11));
console.log(managerCarts.carts);
