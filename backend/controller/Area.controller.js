const areas = require("../model/Area.model");

// [GET] Listar todas as áreas
function listarAreas(req, res) {
  console.log("Dados sendo enviados pela API", areas)
  res.json(areas);
}

// [GET] Buscar por ID
function buscarAreaPorId(req, res) {
  const id = parseInt(req.params.id);
  const area = areas.find(a => a.id === id);
  if (!area) return res.status(404).json({ mensagem: "Área não encontrada" });
  res.json(area);
}

// [GET] Buscar por continente
function buscarPorContinente(req, res) {
  const continente = req.params.continente.toLowerCase();
  const filtradas = areas.filter(a => a.continente.toLowerCase() === continente);

  if (filtradas.length === 0) return res.status(404).json({ mensagem: "Nenhuma área encontrada para esse continente" });

  res.json(filtradas);
}

module.exports = {
  listarAreas,
  buscarAreaPorId,
  buscarPorContinente
};
