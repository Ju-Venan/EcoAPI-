// frontend/src/pages/index.tsx
import { GetServerSideProps, NextPage } from 'next';
import { Area } from '../types/area';

interface HomePageProps {
  areas: Area[];
}

const HomePage: NextPage<HomePageProps> = ({ areas }) => {
  return (
    <main className="container mx-auto p-6">
      {/* Cabeçalho / Hero */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Bem-vindo à EcoAPI</h1>
        <p className="text-lg text-gray-600 mt-2">Conheça nossas áreas ambientais</p>
      </header>

      {/* Lista de Áreas */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Nossas Áreas Ambientais</h2>
        {areas.length === 0 ? (
          <p>Nenhuma área disponível no momento.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <article
                key={area.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-medium mb-2">{area.nome}</h3>
                <p><strong>Continente:</strong> {area.continente}</p>
                <p><strong>País:</strong> {area.pais}</p>
                <p><strong>Nível de Risco:</strong> {area.nivel_risco}</p>
                {/* Aqui pode adicionar botão/link para detalhes */}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  try {
    const response = await fetch('http://localhost:3000/areas');
    if (!response.ok) {
      throw new Error(`Erro ao buscar áreas: ${response.statusText}`);
    }
    const areas: Area[] = await response.json();

    return { props: { areas } };
  } catch (error) {
    console.error(error);
    return { props: { areas: [] } };
  }
};

export default HomePage;
