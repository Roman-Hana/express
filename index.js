import express from "express";
const app = express();
const port = 3000;

app.get("/hello", function (req, res) {
  const name = req.query.name;
  res.send({ message: `Hello ${name}` });
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
