const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
const indexRouter = require('./routes/indexRouter');
const collectionRouter = require('./routes/collectionRouter');
const productRouter = require('./routes/productRouter');

app.use('/', indexRouter);
app.use('/collection', collectionRouter);
app.use('/product', productRouter);

// Add this middleware for handling 404 errors
app.use((req, res, next) => {
  res.status(404).render('404'); // Render the 404.ejs template
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
