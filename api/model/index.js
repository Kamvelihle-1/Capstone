const Products = require('./Products')
const Users = require('./Users')
const Cart = require('./Cart')

module.exports = {
    products: new Products(),
    users: new Users(),
    carts: new Cart()
}