import React, { useState } from 'react';
import { Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

export default function Resume() {
  const [expandedJobs, setExpandedJobs] = useState({});
  const [expandedSection, setExpandedSection] = useState({
    experience: true,
    education: true
  });

  const toggleJob = (index) => {
    setExpandedJobs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleSection = (section) => {
    setExpandedSection(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const content = {
    experience: "Experiência Profissional",
    education: {
      title: "Educação",
      items: [
        {
          degree: "MBA em Business Intelligence e Inteligência Artificial",
          institution: "PUC-Rio",
          period: "01/2023 - 12/2024",
          location: "Rio de Janeiro - RJ"
        },
        {
          degree: "Bacharelado em Sistemas de Computação",
          institution: "UFF",
          period: "06/2017 - 07/2022",
          location: "Niterói - RJ"
        }
      ]
    },
    jobs: [
      {
        title: "Cientista de Dados",
        company: "Matech RJ",
        period: "09/2023 - Presente",
        location: "Rio de Janeiro",
        description: [
          "Desenvolvimento de modelos de Deep Learning (autoencoders, IA Generativa) com TensorFlow, aumentando a precisão preditiva em 30%",
          "Engenharia de ML: Produtização de modelos em Azure, incluindo APIs REST (Flask) e monitoramento contínuo",
          "Colaboração com áreas de negócio para identificar oportunidades de IA, traduzindo demandas em soluções técnicas"
        ]
      },
      {
        title: "Analista de Dados",
        company: "Icons4u Inc RJ",
        period: "02/2022 - 08/2023",
        location: "RJ",
        description: [
          "Pipeline de dados: ETL com Python e SQL, reduzindo tempo de processamento em 25%",
          "Visualização de dados: Dashboards Power BI/Plotly para métricas de marketing em tempo real",
          "Projeto NLP: Análise de sentimentos em campanhas de e-mail (NLTK, spaCy)"
        ]
      },
      {
        title: "Co-Fundador",
        company: "Matech 3D RJ",
        period: "01/2018 - 12/2021",
        location: "Nova Iguaçu - RJ",
        description: [
          "Otimização de processos de impressão 3D com algoritmos em Python, reduzindo custos em 15%",
          "Prototipagem ágil de produtos e integração de dados operacionais via SQL"
        ]
      },
      {
        title: "Programador Júnior",
        company: "FeedbackAÍ",
        period: "06/2017 - 12/2017",
        location: "RJ",
        description: [
          "Desenvolvimento de plataforma online para gestão educacional com Bootstrap e Angular",
          "Execução de consultas SQL para recuperação de dados, melhorando a qualidade dos serviços"
        ]
      },
      {
        title: "Iniciação Científica",
        company: "IBCCF-UFRJ",
        period: "2015 - 12/2016",
        location: "Rio de Janeiro",
        description: [
          "Análise de expressões proteicas de patógenos, identificando alvos potenciais para fármacos",
          "Pesquisa científica focada em previsão de fármacos, utilizando técnicas de modelagem molecular"
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <article className="space-y-8 flex-grow pb-16">
        <section>
          <div 
            className="flex items-center space-x-3 mb-6 cursor-pointer"
            onClick={() => toggleSection('experience')}
          >
            <Briefcase className="text-blue-400" size={24} />
            <h3 className="text-2xl font-semibold">{content.experience}</h3>
            {expandedSection.experience ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          {expandedSection.experience && (
            <div className="space-y-6">
              {content.jobs.map((job, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg">
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleJob(index)}
                  >
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                      <p className="text-gray-400">{job.company} | {job.period}</p>
                      <p className="text-gray-400">{job.location}</p>
                    </div>
                    {expandedJobs[index] ? (
                      <ChevronUp className="text-gray-400" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={24} />
                    )}
                  </div>
                  {expandedJobs[index] && (
                    <ul className="space-y-2 text-gray-300 mt-4">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <div 
            className="flex items-center space-x-3 mb-6 cursor-pointer"
            onClick={() => toggleSection('education')}
          >
            <GraduationCap className="text-blue-400" size={24} />
            <h3 className="text-2xl font-semibold">{content.education.title}</h3>
            {expandedSection.education ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          {expandedSection.education && (
            <div className="space-y-6">
              {content.education.items.map((edu, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-gray-400">{edu.period} | {edu.location}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </article>
    </div>
  );
}