"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('sobre-mim');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['sobre-mim', 'habilidades', 'experiencias', 'projetos'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'sobre-mim', label: 'Sobre Mim', url: '/index.html#sobre-mim' },
    { id: 'habilidades', label: 'Habilidades', url: '/index.html#habilidades' },
    { id: 'experiencias', label: 'Experiências', url: '/index.html#experiencias' },
    { id: 'projetos', label: 'Projetos', url: '/projetos.html' },
  ];

  return (
    <div className="wrapper flex">
      <aside className="sidebar w-64 bg-gray-100 p-6 fixed h-screen overflow-auto">
        <div className="profile-header text-center">
          <Image
            src="/images/foto_perfil.jpg"
            alt="Imagem de Perfil"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-4"
          />
          <div className="profile-description">
            <h1 className="text-2xl font-bold">Matheus Bernardes</h1>
            <p>Cientista de Dados</p>
          </div>
        </div>
        <nav className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Menu</h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className={`block p-2 rounded ${
                    activeSection === item.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="content flex-1 p-6 ml-64">
        <section id="sobre-mim" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-lg mb-6">
            Olá, meu nome é Matheus Bernardes. Sou formado em Sistemas da Computação na UFF - RJ e pós-graduando em
            Ciências de Dados na PUC-RIO. Atualmente, trabalho com projetos pessoais como Analista de Dados / Cientista
            de Dados para projetos parceiros e universitários.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=matheusbnas&show_icons=true&theme=cobalt&include_all_commits=true&count_private=true"
              alt="GitHub Stats"
              width={495}
              height={195}
              unoptimized
            />
            <Image
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=matheusbnas&layout=compact&langs_count=16&theme=cobalt"
              alt="Top Languages"
              width={350}
              height={195}
              unoptimized
            />
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Entre em contato!</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/matheusbnas" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/matheus-nascimento-b06b639b" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:matheusbnas@gmail.com">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        <section id="habilidades" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Linguagens de Programação e Banco de Dados</h3>
              <ul className="list-disc list-inside">
                <li>Python com foco em análise de dados</li>
                <li>Web scraping com Python</li>
                <li>SQL para extração de dados</li>
                <li>Banco de Dados: SQLite, PostgreSQL e MySQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Estatística e Machine Learning</h3>
              <ul className="list-disc list-inside">
                <li>Estatística descritiva</li>
                <li>Algoritmos de Regressão, Classificação e Agrupamento</li>
                <li>Pacotes de Machine Learning: Sklearn e Tensorflow</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Visualização de Dados</h3>
              <ul className="list-disc list-inside">
                <li>Matplotlib, Seaborn, Plotly</li>
                <li>Power BI e Looker</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Engenharia de Software</h3>
              <ul className="list-disc list-inside">
                <li>Git, Github, Gitlab</li>
                <li>Streamlit, Flask, Python API's</li>
                <li>Cloud: Heroku, Azure</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experiencias" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Experiências</h2>
          <ul className="list-disc list-inside">
            <li>9 meses - Projetos completos de Ciência de Dados (Junho 2023 – Atualmente).</li>
            <li>3 meses - Trabalho como cientista de dados com projeto de dados da pós graduação e projetos freelancer.</li>
          </ul>
        </section>

        <section id="projetos">
          <h2 className="text-3xl font-bold mb-4">Projetos</h2>
          <h3 className="text-2xl font-semibold mb-4">Projetos em Ciência de Dados - Machine Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/Perfil-Investidor-1.png"
                alt="Projeto 1"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Construção de um programa de fidelidade com clusterização de clientes</h3>
                <p className="text-gray-600 mb-4">
                  Eu usei Python, Estatística e técnicas não-supervisionadas de Machine Learning para segmentar um grupo de
                  clientes com base em suas características de performance de compra, a fim de selecionar grupos de
                  clientes investidores para formar um programa de Fidelidade com o objetivo de aumentar a receita da empresa.
                </p>
                <h4 className="text-lg font-semibold mb-2">As ferramentas utilizadas foram:</h4>
                <ul className="list-disc list-inside">
                  <li>Git e Github</li>
                  <li>Python, Pandas, Matplotlib e Seaborn</li>
                  <li>Jupyter Notebook</li>
                  <li>Machine Learning: K-Means, Hierarquical Clustering</li>
                  <li>Metabase Visualization</li>
                </ul>
                <a
                  href="https://github.com/matheusbnas/desafio-cientista-de-dados"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver projeto
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/cavalos.jpg"
                alt="Projeto 2"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Predição de cavalos sobreviventes com base de dados anteriores</h3>
                <p className="text-gray-600 mb-4">
                  Identificação de saúde dos cavalos e de 3 classes de saída indicando se os cavalos nas amostras
                  sobreviveram, morreram ou foram submetidos à eutanásia a partir de uma análise exploratória de dados em Python e
                  técnicas de machine learning: Aprendizado supervisionado - classificação.
                </p>
                <h4 className="text-lg font-semibold mb-2">As ferramentas utilizadas foram:</h4>
                <ul className="list-disc list-inside">
                  <li>Git e Github</li>
                  <li>Python, Pandas, Numpy e Seaborn</li>
                  <li>Google Colab e Jupyter Notebook</li>
                  <li>Machine Learning: Classificação</li>
                </ul>
                <a
                  href="https://github.com/matheusbnas/projeto_dataMining_puc"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver projeto
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Projetos em Business Intelligence - BI</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Rosalia Koury Gestão do Tempo e Vida Acadêmica</h3>
                <p className="text-gray-600 mb-4">
                  A Rosalia Koury Gestão do Tempo e Vida Acadêmica é uma consultoria educacional que auxilia estudantes a
                  organizarem a sua vida acadêmica, assistindo em projetos de formatação de dissertações, mentorias para
                  TCC, orientações para formatação de artigos científicos, entre outros serviços.
                </p>
                <h4 className="text-lg font-semibold mb-2">As ferramentas utilizadas foram:</h4>
                <ul className="list-disc list-inside mb-4">
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
      </main>
    </div>
  );
}