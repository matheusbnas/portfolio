"use client";

export default function Skills() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Linguagens de Programação e Banco de Dados</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Python com foco em análise de dados</li>
            <li>Web scraping com Python</li>
            <li>SQL para extração de dados</li>
            <li>Banco de Dados: SQLite, PostgreSQL e MySQL</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Estatística e Machine Learning</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Estatística descritiva</li>
            <li>Algoritmos de Regressão, Classificação e Agrupamento</li>
            <li>Pacotes de Machine Learning: Sklearn e Tensorflow</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Visualização de Dados</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Matplotlib, Seaborn, Plotly</li>
            <li>Power BI e Looker</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Engenharia de Software</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Git, Github, Gitlab</li>
            <li>Streamlit, Flask, Python API's</li>
            <li>Cloud: Heroku, Azure</li>
          </ul>
        </div>
      </div>
    </section>
  );
}