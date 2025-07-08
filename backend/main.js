const express = require("express");
const cors = require("cors");
const app = express();
const areaRoutes = require("./routes/area.routes");

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.use("/areas", areaRoutes);

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
