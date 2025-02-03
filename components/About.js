"use client";

import Image from 'next/image';

export default function About({ language }) {
  const content = {
    pt: {
      title: "Sobre Mim",
      description: "Olá, meu nome é Matheus Bernardes. Sou Cientista de Dados com 9 anos de experiência em projetos end-to-end de Machine Learning e IA. Formado em Sistemas de Computação pela UFF e atualmente cursando MBA em Business Intelligence/AI na PUC-Rio. Combino expertise técnica em Python, TensorFlow e Azure com visão estratégica em BI, atuando na produtização de modelos escaláveis e desenvolvimento de soluções orientadas a dados para negócios.",
      whatIDo: "O que eu faço",
      dataScience: "Ciência de Dados",
      dataScienceDesc: "Desenvolvo modelos de Deep Learning e IA Generativa, aumentando a precisão preditiva e otimizando processos de negócio.",
      dataEngineering: "Engenharia de Dados",
      dataEngineeringDesc: "Construo pipelines de dados robustos com ETL, APIs REST e monitoramento contínuo em ambiente cloud.",
      businessIntelligence: "Business Intelligence",
      businessIntelligenceDesc: "Crio dashboards e visualizações interativas para métricas de negócio em tempo real usando Power BI e ferramentas modernas.",
      contact: {
        linkedin: "https://www.linkedin.com/in/matheusbnas/",
        portfolio: "https://matheusbnas-portfolio.vercel.app/",
        github: "https://github.com/matheusbnas"
      }
    },
    en: {
      title: "About Me",
      description: "Hello, I'm Matheus Bernardes. I'm a Data Scientist with 9 years of experience in end-to-end Machine Learning and AI projects. Graduated in Computer Systems from UFF and currently pursuing an MBA in Business Intelligence/AI at PUC-Rio. I combine technical expertise in Python, TensorFlow, and Azure with strategic vision in BI, working on scalable model productization and data-driven business solutions.",
      whatIDo: "What I Do",
      dataScience: "Data Science",
      dataScienceDesc: "I develop Deep Learning and Generative AI models, increasing predictive accuracy and optimizing business processes.",
      dataEngineering: "Data Engineering",
      dataEngineeringDesc: "I build robust data pipelines with ETL, REST APIs, and continuous monitoring in cloud environments.",
      businessIntelligence: "Business Intelligence",
      businessIntelligenceDesc: "I create interactive dashboards and visualizations for real-time business metrics using Power BI and modern tools.",
      contact: {
        linkedin: "https://www.linkedin.com/in/matheusbnas/",
        portfolio: "https://matheusbnas-portfolio.vercel.app/",
        github: "https://github.com/matheusbnas"
      }
    }
  };

  const text = content[language];

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="text-3xl font-bold mb-6">{text.title}</h2>
      </header>

      <section className="about-text mb-8">
        <p className="text-gray-300 mb-4">
          {text.description}
        </p>
        <div className="flex gap-4 mb-6">
        </div>
      </section>

      <section className="service mb-8">
        <h3 className="text-2xl font-semibold mb-4">{text.whatIDo}</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="bg-gray-800 p-4 rounded">
            <h4 className="text-xl font-semibold mb-2">{text.dataScience}</h4>
            <p className="text-gray-300">{text.dataScienceDesc}</p>
          </li>
          <li className="bg-gray-800 p-4 rounded">
            <h4 className="text-xl font-semibold mb-2">{text.dataEngineering}</h4>
            <p className="text-gray-300">{text.dataEngineeringDesc}</p>
          </li>
          <li className="bg-gray-800 p-4 rounded">
            <h4 className="text-xl font-semibold mb-2">{text.businessIntelligence}</h4>
            <p className="text-gray-300">{text.businessIntelligenceDesc}</p>
          </li>
        </ul>
      </section>

      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <a 
          href={text.contact.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full md:w-auto"
        >
          <Image
            src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=matheusbnas&show_icons=true&theme=dark&include_all_commits=true&count_private=true"
            alt="GitHub Stats"
            width={495}
            height={195}
            unoptimized
            className="w-full"
          />
        </a>
        <a 
          href={text.contact.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full md:w-auto"
        >
          <Image
            src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=matheusbnas&layout=compact&langs_count=16&theme=dark"
            alt="Top Languages"
            width={350}
            height={195}
            unoptimized
            className="w-full"
          />
        </a>
      </div>
    </article>
  );
}