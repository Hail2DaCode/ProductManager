const Product = require('../models/product.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allDaProducts) => {
            res.json({ Products: allDaProducts})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
          /* The method below is new */
module.exports.createProduct = (request, response) => {
    // Mongoose's "create" method is run using our Product model to add a new Product to our db's Product collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}

