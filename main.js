const express = require("express");
const app = express();
const areaRoutes = require("./src/routes/area.routes");

app.use(express.json());
app.use("/areas", areaRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
