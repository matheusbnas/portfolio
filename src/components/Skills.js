"use client";

export default function Skills({ language }) {
  const content = {
    pt: {
      title: "Habilidades",
      programmingLanguages: {
        title: "Linguagens de Programação e Banco de Dados",
        skills: [
          "Python com foco em análise de dados",
          "Web scraping com Python",
          "SQL para extração de dados",
          "Banco de Dados: SQLite, PostgreSQL e MySQL"
        ]
      },
      statistics: {
        title: "Estatística e Machine Learning",
        skills: [
          "Estatística descritiva",
          "Algoritmos de Regressão, Classificação e Agrupamento",
          "Pacotes de Machine Learning: Sklearn e Tensorflow"
        ]
      },
      dataVisualization: {
        title: "Visualização de Dados",
        skills: [
          "Matplotlib, Seaborn, Plotly",
          "Power BI e Looker"
        ]
      },
      softwareEngineering: {
        title: "Engenharia de Software",
        skills: [
          "Git, Github, Gitlab",
          "Streamlit, Flask, Python API's",
          "Cloud: Heroku, Azure"
        ]
      }
    },
    en: {
      title: "Skills",
      programmingLanguages: {
        title: "Programming Languages and Databases",
        skills: [
          "Python with focus on data analysis",
          "Web scraping with Python",
          "SQL for data extraction",
          "Databases: SQLite, PostgreSQL and MySQL"
        ]
      },
      statistics: {
        title: "Statistics and Machine Learning",
        skills: [
          "Descriptive statistics",
          "Regression, Classification and Clustering algorithms",
          "Machine Learning packages: Sklearn and Tensorflow"
        ]
      },
      dataVisualization: {
        title: "Data Visualization",
        skills: [
          "Matplotlib, Seaborn, Plotly",
          "Power BI and Looker"
        ]
      },
      softwareEngineering: {
        title: "Software Engineering",
        skills: [
          "Git, Github, Gitlab",
          "Streamlit, Flask, Python APIs",
          "Cloud: Heroku, Azure"
        ]
      }
    }
  };

  const text = content[language];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold mb-4">{text.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">{text.programmingLanguages.title}</h3>
          <ul className="list-disc list-inside text-gray-300">
            {text.programmingLanguages.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{text.statistics.title}</h3>
          <ul className="list-disc list-inside text-gray-300">
            {text.statistics.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">{text.dataVisualization.title}</h3>
          <ul className="list-disc list-inside text-gray-300">
            {text.dataVisualization.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{text.softwareEngineering.title}</h3>
          <ul className="list-disc list-inside text-gray-300">
            {text.softwareEngineering.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}