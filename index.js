import express from "express.js";
const app = express.js();
const port = 3000;

app.listen(port, () => {
  console.log('Server running on port ${port}.');
})