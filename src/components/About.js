"use client";

import Image from 'next/image';

export default function About({ language }) {
  const content = {
    pt: {
      title: "Sobre Mim",
      description: "Olá, meu nome é Matheus Bernardes. Sou formado em Sistemas da Computação na UFF - RJ e pós-graduando em Ciências de Dados na PUC-RIO. Atualmente, trabalho com projetos pessoais como Analista de Dados / Cientista de Dados para projetos parceiros e universitários.",
      whatIDo: "O que eu faço",
      dataAnalysis: "Análise de Dados",
      dataAnalysisDesc: "Extraio insights através de análise exploratória meticulosa e emprego de técnicas estatísticas.",
      machineLearning: "Machine Learning",
      machineLearningDesc: "Construo modelos preditivos para contribuir com decisões baseadas em dados e resolver problemas complexos."
    },
    en: {
      title: "About Me",
      description: "Hello, my name is Matheus Bernardes. I have a degree in Computer Systems from UFF - RJ and I'm pursuing a postgraduate degree in Data Science at PUC-RIO. Currently, I work on personal projects as a Data Analyst / Data Scientist for partner and university projects.",
      whatIDo: "What I Do",
      dataAnalysis: "Data Analysis",
      dataAnalysisDesc: "I extract insights through meticulous exploratory analysis and the use of statistical techniques.",
      machineLearning: "Machine Learning",
      machineLearningDesc: "I build predictive models to contribute to data-driven decisions and solve complex problems."
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
      </section>

      <section className="service mb-8">
        <h3 className="text-2xl font-semibold mb-4">{text.whatIDo}</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="bg-gray-800 p-4 rounded">
            <h4 className="text-xl font-semibold mb-2">{text.dataAnalysis}</h4>
            <p className="text-gray-300">
              {text.dataAnalysisDesc}
            </p>
          </li>
          <li className="bg-gray-800 p-4 rounded">
            <h4 className="text-xl font-semibold mb-2">{text.machineLearning}</h4>
            <p className="text-gray-300">
              {text.machineLearningDesc}
            </p>
          </li>
        </ul>
      </section>

      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <Image
          src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=matheusbnas&show_icons=true&theme=dark&include_all_commits=true&count_private=true"
          alt="GitHub Stats"
          width={495}
          height={195}
          unoptimized
        />
        <Image
          src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=matheusbnas&layout=compact&langs_count=16&theme=dark"
          alt="Top Languages"
          width={350}
          height={195}
          unoptimized
        />
      </div>
    </article>
  );
}