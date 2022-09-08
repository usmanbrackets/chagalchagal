const app = require("express")();

app.get("/", (req, res) => {
  return res.status(200).send("server is healthy");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
//
