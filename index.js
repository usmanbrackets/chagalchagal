const app = require("express")();

app.get("/", (req, res) => {
  return res.status(200).send("server is healthy with ci and cd");
});

app.listen(5000, () => {
  console.log("server is running on 123port 5000");
});
