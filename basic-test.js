console.log('Hello from basic test!');
const express = require('express');
console.log('Express imported');
const app = express();
console.log('Express app created');
app.listen(8081, () => console.log('Basic server running on 8081'));
