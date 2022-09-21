const app = require("express")();

console.log("process.env\n\n ", process.env);

app.get("/", (req, res) => {
  return res.status(200).send("server is healthy with ci and cd");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
