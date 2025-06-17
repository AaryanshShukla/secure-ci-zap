
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<form method="POST"><input name="name"/><button>Submit</button></form>');
});

app.post('/', (req, res) => {
  const name = req.body.name;
  res.send(`Hello, ${name}`);  // Intentional XSS risk: no sanitization
});

app.listen(port, () => {
  console.log(`Vulnerable app listening at http://localhost:${port}`);
});
