import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Areas() {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios
      .get("http://localhost:3001/areas")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setAreas(res.data);
        } else {
          
          console.warn("A API não retornou um array:", res.data);
          setAreas([]);
          setError("Dados inesperados recebidos do servidor.");
        }
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Erro ao buscar áreas:", err);
        setError("Erro ao carregar os dados. Tente novamente mais tarde.");
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <div className="p-4">Carregando áreas...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Erro: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Áreas</h1>
      {areas.length === 0 ? (
        <p className="mt-2">Nenhuma área encontrada.</p>
      ) : (
        <ul className="mt-2 list-disc pl-5">
          {areas.map((area) => (
            <li key={area.id}>{area.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
}