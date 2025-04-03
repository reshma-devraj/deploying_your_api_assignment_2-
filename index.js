const express = require('express');
const { resolve } = require('path');
require('dotenv').config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 3010; // Use .env PORT, fallback to 3010

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// New: Route that uses environment variable IS_ADMIN
app.get('/admin', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "✅ Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "⛔ Access Denied. Admins only!" });
  }
});
console.log("Loaded ENV Variables:");
console.log("PORT:", process.env.PORT);
console.log("IS_ADMIN:", process.env.IS_ADMIN);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
