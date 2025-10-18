import React from "react";
import { Github } from "lucide-react";

export default function About({ language }) {
  const content = {
    pt: {
      description:
        "Olá, meu nome é Matheus Bernardes. Sou Cientista de Dados com experiência em projetos end-to-end de Machine Learning e IA. Formado em Sistemas de Computação pela UFF e MBA em Business Intelligence/AI na PUC-Rio. Combino expertise técnica em Python, TensorFlow e Azure com visão estratégica em BI, atuando na produtização de modelos escaláveis e desenvolvimento de soluções orientadas a dados para negócios.",

      title: "Sobre Mim",
      whatIDo: "O que eu faço",
      dataScience: "Ciência de Dados",
      dataScienceDesc:
        "Desenvolvo modelos de Deep Learning e IA Generativa, aumentando a precisão preditiva e otimizando processos de negócio.",
      dataEngineering: "Engenharia de Dados",
      dataEngineeringDesc:
        "Construo pipelines de dados robustos com ETL, APIs REST e monitoramento contínuo em ambiente cloud.",
      businessIntelligence: "Business Intelligence",
      businessIntelligenceDesc:
        "Crio dashboards e visualizações interativas para métricas de negócio em tempo real usando Power BI e ferramentas modernas.",
      githubStats: "Estatísticas do GitHub",
      viewProfile: "Ver Perfil",
    },
    en: {
      title: "About Me",
      description:
        "Hello, I'm Matheus Bernardes. I'm a Data Scientist with experience in end-to-end Machine Learning and AI projects. Graduated in Computer Systems from UFF and MBA in Business Intelligence/AI at PUC-Rio. I combine technical expertise in Python, TensorFlow, and Azure with strategic vision in BI, working on scalable model productization and data-driven business solutions.",
      whatIDo: "What I Do",
      dataScience: "Data Science",
      dataScienceDesc:
        "I develop Deep Learning and Generative AI models, increasing predictive accuracy and optimizing business processes.",
      dataEngineering: "Data Engineering",
      dataEngineeringDesc:
        "I build robust data pipelines with ETL, REST APIs, and continuous monitoring in cloud environments.",
      businessIntelligence: "Business Intelligence",
      businessIntelligenceDesc:
        "I create interactive dashboards and visualizations for real-time business metrics using Power BI and modern tools.",
      githubStats: "GitHub Stats",
      viewProfile: "View Profile",
    },
  };

  const text = content[language];

  return (
    <article className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold mb-6">{text.title}</h2>
      </header>

      <section className="text-gray-300 space-y-4">
        <p>{text.description}</p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6">{text.whatIDo}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
            <h4 className="text-xl font-semibold mb-3">{text.dataScience}</h4>
            <p className="text-gray-300">{text.dataScienceDesc}</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
            <h4 className="text-xl font-semibold mb-3">
              {text.dataEngineering}
            </h4>
            <p className="text-gray-300">{text.dataEngineeringDesc}</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
            <h4 className="text-xl font-semibold mb-3">
              {text.businessIntelligence}
            </h4>
            <p className="text-gray-300">{text.businessIntelligenceDesc}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-4 text-center">
          <a
            href="https://github.com/matheusbnas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
          >
            <Github size={20} />
            <span>{text.viewProfile}</span>
          </a>
        </div>
      </section>
    </article>
  );
}
