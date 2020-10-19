
const app = require("express")();

const hostname = '127.0.0.1';
const port =  process.env.PORT || 3000;


app.get("/data", (req, res) => {
  console.log("success!");
//   console.log(req);
  res.json({ ok: "success" });
});

app.listen(3000, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
