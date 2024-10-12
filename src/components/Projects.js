"use client";

import Image from 'next/image';

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-white">Projetos</h2>
      <h3 className="text-2xl font-semibold mb-4 text-white">Projetos em Ciência de Dados - Machine Learning</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/Perfil-Investidor-1.png"
            alt="Projeto 1"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-white">Construção de um programa de fidelidade com clusterização de clientes</h3>
            <p className="text-gray-300 mb-4">
              Utilizei Python, Estatística e técnicas não-supervisionadas de Machine Learning para segmentar um grupo de
              clientes com base em suas características de performance de compra, visando formar um programa de Fidelidade
              para aumentar a receita da empresa.
            </p>
            <h4 className="text-lg font-semibold mb-2 text-white">Ferramentas utilizadas:</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Git e Github</li>
              <li>Python, Pandas, Matplotlib e Seaborn</li>
              <li>Jupyter Notebook</li>
              <li>Machine Learning: K-Means, Hierarchical Clustering</li>
              <li>Metabase Visualization</li>
            </ul>
            <a
              href="https://github.com/matheusbnas/desafio-cientista-de-dados"
              className="text-blue-400 hover:underline mt-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projeto
            </a>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/cavalos.jpg"
            alt="Projeto 2"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-white">Predição de cavalos sobreviventes com base de dados anteriores</h3>
            <p className="text-gray-300 mb-4">
              Identificação de saúde dos cavalos e de 3 classes de saída indicando se os cavalos nas amostras
              sobreviveram, morreram ou foram submetidos à eutanásia a partir de uma análise exploratória de dados em Python e
              técnicas de machine learning: Aprendizado supervisionado - classificação.
            </p>
            <h4 className="text-lg font-semibold mb-2 text-white">Ferramentas utilizadas:</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Git e Github</li>
              <li>Python, Pandas, Numpy e Seaborn</li>
              <li>Google Colab e Jupyter Notebook</li>
              <li>Machine Learning: Classificação</li>
            </ul>
            <a
              href="https://github.com/matheusbnas/projeto_dataMining_puc"
              className="text-blue-400 hover:underline mt-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projeto
            </a>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8 text-white">Projetos em Business Intelligence - BI</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-white">Rosalia Koury Gestão do Tempo e Vida Acadêmica</h3>
            <p className="text-gray-300 mb-4">
              A Rosalia Koury Gestão do Tempo e Vida Acadêmica é uma consultoria educacional que auxilia estudantes a
              organizarem a sua vida acadêmica, assistindo em projetos de formatação de dissertações, mentorias para
              TCC, orientações para formatação de artigos científicos, entre outros serviços.
            </p>
            <h4 className="text-lg font-semibold mb-2 text-white">Ferramentas utilizadas:</h4>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Pentaho e PostgreSQL</li>
              <li>Power BI</li>
            </ul>
            <iframe 
              title="relatorio-consultoria-rosalia-v1" 
              width="100%" 
              height="300" 
              src="https://app.powerbi.com/view?r=eyJrIjoiNzAyNjA1MGMtOGFmOC00YjZjLThjZDYtMjQ1OTZjZWUwYzNlIiwidCI6ImIyZTE2Mjk3LTJlZDYtNDFiOC1iODIyLWE5NTRlOTViZDJmMCIsImMiOjR9" 
              frameBorder="0" 
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}