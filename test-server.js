const express = require('express');
const path = require('path');

const app = express();

// Test route
app.get('/test', (req, res) => {
  res.json({ status: 'success', message: 'Server is working!' });
});

// Set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

const port = 8080;
app.listen(port, () => {
  console.log(`Test server is running on port ${port}`);
});
