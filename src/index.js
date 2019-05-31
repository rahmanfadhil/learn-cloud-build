import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world! everyone");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`> Listening on port ${PORT}`);
});
