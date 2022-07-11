const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, postColor } = require("./controller");
let baseMoney = 5000;
let picUrl =
  "https://thumbs.dreamstime.com/b/cute-cartoon-snail-isolated-white-background-vector-74738243.jpg";

app.get(`/api/compliment`, getCompliment);
app.get(`/api/fortune`, getFortune);
app.post(`/api/color`, postColor);
app.get(`/api/money`, (req, res) => {
  res.send(baseMoney.toString());
});

app.put(`/api/moneyadd`, (req, res) => {
  baseMoney += 1000;
  res.send(baseMoney.toString());
});

app.put(`/api/moneyminus`, (req, res) => {
  baseMoney -= 1000;
  res.send(baseMoney.toString());
});

app.get(`/api/pic`, (req, res) => {
  res.send(picUrl);
});
app.delete(`/api/pic`, (req, res) => {
  let picUrl = "";
  res.send(picUrl);
});

app.listen(4000, () => console.log("Server running on 4000"));
