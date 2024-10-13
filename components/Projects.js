"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';

export default function Projects({ language }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: {
        pt: "Construção de um programa de fidelidade com clusterização de clientes",
        en: "Building a loyalty program with customer clustering"
      },
      category: "machine-learning",
      imageUrl: "/images/Perfil-Investidor-1.png",
      link: "https://github.com/matheusbnas/desafio-cientista-de-dados"
    },
    {
      id: 2,
      title: {
        pt: "Predição de cavalos sobreviventes com base de dados anteriores",
        en: "Prediction of surviving horses based on previous data"
      },
      category: "machine-learning",
      imageUrl: "/images/cavalos.jpg",
      link: "https://github.com/matheusbnas/projeto_dataMining_puc"
    },
    {
      id: 3,
      title: {
        pt: "Rosalia Koury Gestão do Tempo e Vida Acadêmica",
        en: "Rosalia Koury Time Management and Academic Life"
      },
      category: "business-intelligence",
      isIframe: true,
      iframeSrc: "https://app.powerbi.com/view?r=eyJrIjoiNzAyNjA1MGMtOGFmOC00YjZjLThjZDYtMjQ1OTZjZWUwYzNlIiwidCI6ImIyZTE2Mjk3LTJlZDYtNDFiOC1iODIyLWE5NTRlOTViZDJmMCIsImMiOjR9",
      link: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">{language === 'pt' ? 'Portfólio' : 'Portfolio'}</h2>
      </header>

      <section className="projects">
        <ul className="filter-list flex justify-center mb-6">
          <li className="filter-item">
            <button 
              className={`px-4 py-2 ${filter === 'all' ? 'bg-blue-600 text-white' : ''}`} 
              onClick={() => setFilter('all')}
            >
              {language === 'pt' ? 'Todos' : 'All'}
            </button>
          </li>
          <li className="filter-item">
            <button 
              className={`px-4 py-2 ${filter === 'machine-learning' ? 'bg-blue-600 text-white' : ''}`} 
              onClick={() => setFilter('machine-learning')}
            >
              Machine Learning
            </button>
          </li>
          <li className="filter-item">
            <button 
              className={`px-4 py-2 ${filter === 'business-intelligence' ? 'bg-blue-600 text-white' : ''}`} 
              onClick={() => setFilter('business-intelligence')}
            >
              Business Intelligence
            </button>
          </li>
        </ul>

        <ul className="project-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <li key={project.id} className="project-item rounded-lg overflow-hidden">
              <a href={project.link} className="block">
                <figure className="project-img relative">
                  <div className="project-item-icon-box absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2">
                    <Eye size={20} className="text-white" />
                  </div>
                  {project.isIframe ? (
                    <iframe 
                      title={project.title[language]}
                      width="100%" 
                      height="200" 
                      src={project.iframeSrc}
                      frameBorder="0" 
                      allowFullScreen={true}
                    ></iframe>
                  ) : (
                    <Image
                      src={project.imageUrl}
                      alt={project.title[language]}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  )}
                </figure>
                <div className="p-4">
                  <h3 className="project-title text-lg font-semibold mb-2">{project.title[language]}</h3>
                  <p className="project-category text-sm">{project.category}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}