const ProductController = require('../controllers/product.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', ProductController.findAllProducts);
    app.post('/api/product', ProductController.createProduct);
}

