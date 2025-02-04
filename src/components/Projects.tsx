import React, { useState } from 'react';
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
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      link: "https://github.com/matheusbnas/desafio-cientista-de-dados"
    },
    {
      id: 2,
      title: {
        pt: "Predição de cavalos sobreviventes com base de dados anteriores",
        en: "Prediction of surviving horses based on previous data"
      },
      category: "machine-learning",
      imageUrl: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&h=400&fit=crop",
      link: "https://github.com/matheusbnas/projeto_dataMining_puc"
    },
    {
      id: 3,
      title: {
        pt: "Rosalia Koury Gestão do Tempo e Vida Acadêmica",
        en: "Rosalia Koury Time Management and Academic Life"
      },
      category: "business-intelligence",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      link: "https://app.powerbi.com/view?r=eyJrIjoiNzAyNjA1MGMtOGFmOC00YjZjLThjZDYtMjQ1OTZjZWUwYzNlIiwidCI6ImIyZTE2Mjk3LTJlZDYtNDFiOC1iODIyLWE5NTRlOTViZDJmMCIsImMiOjR9"
    },
    {
      id: 4,
      title: {
        pt: "Classificação de Insetos com Visão Computacional",
        en: "Insect Classification with Computer Vision"
      },
      category: "machine-learning",
      imageUrl: "/images/insetos.jpg",
      link: "https://selecao-insetos.vercel.app/"
    },
    {
      id: 5,
      title: {
        pt: "Chatbot com OpenAI",
        en: "OpenAI Chatbot"
      },
      category: "artificial-intelligence",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      link: "https://chatbot-ai-openai.streamlit.app/"
    },
    {
      id: 6,
      title: {
        pt: "App de Análise de Jogadores de FIFA",
        en: "FIFA Players Analysis App"
      },
      category: "data-analysis",
      imageUrl: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=400&fit=crop",
      link: "https://projetoappfifa.streamlit.app/"
    }
  ];

  const categories = [
    { id: 'all', label: { pt: 'Todos', en: 'All' } },
    { id: 'machine-learning', label: { pt: 'Machine Learning', en: 'Machine Learning' } },
    { id: 'business-intelligence', label: { pt: 'Business Intelligence', en: 'Business Intelligence' } },
    { id: 'artificial-intelligence', label: { pt: 'Inteligência Artificial', en: 'Artificial Intelligence' } },
    { id: 'data-analysis', label: { pt: 'Análise de Dados', en: 'Data Analysis' } }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <article className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold mb-6">{language === 'pt' ? 'Portfólio' : 'Portfolio'}</h2>
      </header>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`
              px-4 py-2 rounded-lg transition-colors
              ${filter === category.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }
            `}
          >
            {category.label[language]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={project.imageUrl}
                alt={project.title[language]}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full">
                <Eye size={20} className="text-white" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {project.title[language]}
              </h3>
              <p className="text-sm text-gray-400 capitalize">
                {project.category.replace('-', ' ')}
              </p>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}