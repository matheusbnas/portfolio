import React from 'react';

export default function Skills({ language }) {
  const content = {
    pt: {
      title: "Habilidades",
      programmingLanguages: {
        title: "Linguagens de Programação e Banco de Dados",
        skills: [
          "Python com foco em análise de dados e Machine Learning",
          "Javascript e Angular para desenvolvimento web",
          "SQL para análise e manipulação de dados",
          "Bancos de Dados: MongoDB, MySQL, PostgreSQL, SQLite",
          "APIs REST com Flask e integração de serviços"
        ]
      },
      artificialIntelligence: {
        title: "Inteligência Artificial e Machine Learning",
        skills: [
          "Deep Learning com TensorFlow e autoencoders",
          "IA Generativa e modelos avançados",
          "NLP com NLTK e spaCy para análise de sentimentos",
          "Clustering e técnicas de segmentação",
          "Modelagem preditiva e classificação"
        ]
      },
      dataVisualization: {
        title: "Visualização e Análise de Dados",
        skills: [
          "Power BI para dashboards interativos",
          "Plotly e Seaborn para visualizações científicas",
          "ETL e pipelines de dados",
          "Business Intelligence e análise estratégica",
          "BeautifulSoup para web scraping"
        ]
      },
      cloudEngineering: {
        title: "Cloud e DevOps",
        skills: [
          "Microsoft Azure (AZ-900 e DP-900)",
          "Google Cloud Platform (GCP)",
          "Docker e containerização",
          "Git e controle de versão",
          "Deploy com Render, Vercel e Streamlit"
        ]
      }
    },
    en: {
      title: "Skills",
      programmingLanguages: {
        title: "Programming Languages and Databases",
        skills: [
          "Python focused on data analysis and Machine Learning",
          "Javascript and Angular for web development",
          "SQL for data analysis and manipulation",
          "Databases: MongoDB, MySQL, PostgreSQL, SQLite",
          "REST APIs with Flask and service integration"
        ]
      },
      artificialIntelligence: {
        title: "Artificial Intelligence and Machine Learning",
        skills: [
          "Deep Learning with TensorFlow and autoencoders",
          "Generative AI and advanced models",
          "NLP with NLTK and spaCy for sentiment analysis",
          "Clustering and segmentation techniques",
          "Predictive modeling and classification"
        ]
      },
      dataVisualization: {
        title: "Data Visualization and Analysis",
        skills: [
          "Power BI for interactive dashboards",
          "Plotly and Seaborn for scientific visualizations",
          "ETL and data pipelines",
          "Business Intelligence and strategic analysis",
          "BeautifulSoup for web scraping"
        ]
      },
      cloudEngineering: {
        title: "Cloud and DevOps",
        skills: [
          "Microsoft Azure (AZ-900 and DP-900)",
          "Google Cloud Platform (GCP)",
          "Docker and containerization",
          "Git and version control",
          "Deployment with Render, Vercel and Streamlit"
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
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">{text.programmingLanguages.title}</h3>
          <ul className="space-y-2 text-gray-300">
            {text.programmingLanguages.skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">{text.artificialIntelligence.title}</h3>
          <ul className="space-y-2 text-gray-300">
            {text.artificialIntelligence.skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">{text.dataVisualization.title}</h3>
          <ul className="space-y-2 text-gray-300">
            {text.dataVisualization.skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">{text.cloudEngineering.title}</h3>
          <ul className="space-y-2 text-gray-300">
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