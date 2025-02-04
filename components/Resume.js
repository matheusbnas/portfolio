"use client";

export default function Resume({ language }) {
  const content = {
    pt: {
      title: "Currículo",
      experience: "Experiência",
      job1: {
        title: "Cientista de Dados",
        company: "Matech RJ",
        period: "Setembro 2023 - Presente",
        description: [
          "Desenvolvimento de modelos de Deep Learning (autoencoders, IA Generativa) com TensorFlow, aumentando a precisão preditiva em 30%",
          "Engenharia de ML com produtização de modelos em Azure, incluindo APIs REST (Flask) e monitoramento contínuo",
          "Colaboração com áreas de negócio para identificar oportunidades de IA, traduzindo demandas em soluções técnicas",
        ],
      },
      job2: {
        title: "Analista de Dados",
        company: "Icons4u Inc RJ",
        period: "Fevereiro 2022 - Agosto 2023",
        description: [
          "Pipeline de dados: ETL com Python e SQL, reduzindo tempo de processamento em 25%",
          "Visualização de dados: Dashboards Power BI/Plotly para métricas de marketing em tempo real",
          "Projeto NLP de análise de sentimentos em campanhas de e-mail utilizando NLTK e spaCy",
        ],
      },
      job3: {
        title: "Co-Fundador",
        company: "Matech 3D RJ",
        period: "Janeiro 2018 - Dezembro 2021",
        description: [
          "Otimização de processos de impressão 3D com algoritmos em Python, reduzindo custos em 15%",
          "Prototipagem ágil de produtos e integração de dados operacionais via SQL",
        ],
      },
      job4: {
        title: "Programador Júnior",
        company: "FeedbackAÍ",
        period: "Junho 2017 - Dezembro 2017",
        description: [
          "Desenvolvimento de plataforma online para gestão educacional com Bootstrap e Angular",
          "Execução de consultas SQL para recuperação de dados, melhorando a qualidade dos serviços",
        ],
      },
      job5: {
        title: "Iniciação Científica",
        company: "IBCCF-UFRJ",
        period: "Janeiro 2015 - Dezembro 2016",
        description: [
          "Análise de expressões proteicas de patógenos, identificando alvos potenciais para fármacos",
          "Pesquisa científica focada em previsão de fármacos, utilizando técnicas de modelagem molecular",
        ],
      },
    },
    en: {
      title: "Resume",
      experience: "Experience",
      job1: {
        title: "Data Scientist",
        company: "Matech RJ",
        period: "September 2023 - Present",
        description: [
          "Development of Deep Learning models (autoencoders, Generative AI) with TensorFlow, increasing predictive accuracy by 30%",
          "ML Engineering with model productization in Azure, including REST APIs (Flask) and continuous monitoring",
          "Collaboration with business areas to identify AI opportunities, translating demands into technical solutions",
        ],
      },
      job2: {
        title: "Data Analyst",
        company: "Icons4u Inc RJ",
        period: "February 2022 - August 2023",
        description: [
          "Data pipeline development: ETL with Python and SQL, reducing processing time by 25%",
          "Data visualization: Power BI/Plotly dashboards for real-time marketing metrics",
          "NLP project with sentiment analysis in email campaigns using NLTK and spaCy",
        ],
      },
      job3: {
        title: "Co-Founder",
        company: "Matech 3D RJ",
        period: "January 2018 - December 2021",
        description: [
          "Optimization of 3D printing processes with Python algorithms, reducing costs by 15%",
          "Agile prototyping of products and operational data integration via SQL",
        ],
      },
      job4: {
        title: "Junior Programmer",
        company: "FeedbackAÍ",
        period: "June 2017 - December 2017",
        description: [
          "Development of online platform for educational management with Bootstrap and Angular",
          "Execution of SQL queries for data retrieval, improving service quality",
        ],
      },
      job5: {
        title: "Scientific Initiation",
        company: "IBCCF-UFRJ",
        period: "January 2015 - December 2016",
        description: [
          "Analysis of pathogen protein expressions, identifying potential drug targets",
          "Scientific research focused on drug prediction using molecular modeling techniques",
        ],
      },
    },
  };

  const text = content[language];

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">{text.title}</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* Adicione o ícone apropriado aqui */}
          </div>
          <h3 className="h3">{text.experience}</h3>
        </div>

        <ol className="timeline-list">
          {[text.job1, text.job2, text.job3, text.job4, text.job5].map(
            (job, index) => (
              <li
                key={index}
                className="timeline-item mb-6 pb-6 border-b border-gray-200 last:border-b-0"
              >
                <h4 className="h4 timeline-item-title text-lg font-semibold mb-2">
                  {job.title}
                </h4>
                <span className="block text-gray-600 mb-2">
                  {job.company} | {job.period}
                </span>
                <ul className="list-disc list-inside space-y-1">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ol>
      </section>
    </article>
  );
}
