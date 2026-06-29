
export default function Skills({ language }) {
  const content = {
    pt: {
      title: "Habilidades",
      programmingLanguages: {
        title: "Linguagens & Bancos de Dados",
        skills: [
          "Python — análise de dados, ML, automação e APIs",
          "SQL — consultas complexas, modelagem e otimização",
          "JavaScript / TypeScript — desenvolvimento web e dashboards",
          "Bancos: MongoDB, MySQL, PostgreSQL, SQLite",
          "APIs REST com Flask e FastAPI"
        ]
      },
      artificialIntelligence: {
        title: "IA, Machine Learning & Agentes",
        skills: [
          "IA Generativa — LLMs, RAG, Agentes e Multiagentes",
          "Bancos Vetoriais — FAISS, ChromaDB para busca semântica",
          "Machine Learning — Scikit-learn, classificação, regressão, clustering",
          "Deep Learning — TensorFlow, CNN, Visão Computacional, OpenCV",
          "NLP — NLTK, spaCy, análise de sentimentos e processamento de texto"
        ]
      },
      dataVisualization: {
        title: "Visualização, BI & Análise",
        skills: [
          "Power BI — dashboards interativos, DAX e relatórios executivos",
          "Pentaho — ETL e transformação de dados para BI",
          "Streamlit — apps interativos para análise e IA",
          "Plotly, Matplotlib, Seaborn — visualizações científicas",
          "Apresentações executivas — PowerPoint e relatórios analíticos"
        ]
      },
      cloudEngineering: {
        title: "Cloud, Pipeline & DevOps",
        skills: [
          "Google Cloud Platform (GCP) — storage, pipelines e deploy",
          "Prefect — orquestração de pipelines de dados",
          "Docker — containerização de aplicações",
          "Git/GitHub — controle de versão e CI/CD",
          "Deploy — Streamlit Cloud, Vercel, Render, Netlify"
        ]
      }
    },
    en: {
      title: "Skills",
      programmingLanguages: {
        title: "Languages & Databases",
        skills: [
          "Python — data analysis, ML, automation and APIs",
          "SQL — complex queries, modeling and optimization",
          "JavaScript / TypeScript — web development and dashboards",
          "Databases: MongoDB, MySQL, PostgreSQL, SQLite",
          "REST APIs with Flask and FastAPI"
        ]
      },
      artificialIntelligence: {
        title: "AI, Machine Learning & Agents",
        skills: [
          "Generative AI — LLMs, RAG, Agents and Multi-agents",
          "Vector Databases — FAISS, ChromaDB for semantic search",
          "Machine Learning — Scikit-learn, classification, regression, clustering",
          "Deep Learning — TensorFlow, CNN, Computer Vision, OpenCV",
          "NLP — NLTK, spaCy, sentiment analysis and text processing"
        ]
      },
      dataVisualization: {
        title: "Visualization, BI & Analysis",
        skills: [
          "Power BI — interactive dashboards, DAX and executive reports",
          "Pentaho — ETL and data transformation for BI",
          "Streamlit — interactive apps for data analysis and AI",
          "Plotly, Matplotlib, Seaborn — scientific visualizations",
          "Executive presentations — PowerPoint and analytical reports"
        ]
      },
      cloudEngineering: {
        title: "Cloud, Pipeline & DevOps",
        skills: [
          "Google Cloud Platform (GCP) — storage, pipelines and deploy",
          "Prefect — data pipeline orchestration",
          "Docker — application containerization",
          "Git/GitHub — version control and CI/CD",
          "Deploy — Streamlit Cloud, Vercel, Render, Netlify"
        ]
      }
    }
  };

  const text = content[language];

  return (
    <article className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold mb-6">{text.title}</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{text.programmingLanguages.title}</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {text.programmingLanguages.skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{text.artificialIntelligence.title}</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {text.artificialIntelligence.skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{text.dataVisualization.title}</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {text.dataVisualization.skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{text.cloudEngineering.title}</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {text.cloudEngineering.skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}