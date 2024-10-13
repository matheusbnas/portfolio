"use client";

export default function Resume({ language }) {
  const content = {
    pt: {
      title: "Currículo",
      experience: "Experiência",
      job1: {
        title: "Cientista de Dados Freelancer",
        period: "Junho 2023 - Presente",
        description: "Desenvolvimento de projetos completos de Ciência de Dados para clientes diversos. Aplicação de técnicas avançadas de machine learning e análise estatística."
      },
      job2: {
        title: "Cientista de Dados - Projetos Acadêmicos",
        period: "Março 2023 - Maio 2023",
        description: "Colaboração em projetos de pesquisa durante a pós-graduação. Análise de dados e desenvolvimento de modelos para problemas complexos."
      }
    },
    en: {
      title: "Resume",
      experience: "Experience",
      job1: {
        title: "Freelance Data Scientist",
        period: "June 2023 - Present",
        description: "Development of complete Data Science projects for various clients. Application of advanced machine learning techniques and statistical analysis."
      },
      job2: {
        title: "Data Scientist - Academic Projects",
        period: "March 2023 - May 2023",
        description: "Collaboration on research projects during postgraduate studies. Data analysis and model development for complex problems."
      }
    }
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
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">{text.job1.title}</h4>
            <span>{text.job1.period}</span>
            <p className="timeline-text">{text.job1.description}</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">{text.job2.title}</h4>
            <span>{text.job2.period}</span>
            <p className="timeline-text">{text.job2.description}</p>
          </li>
        </ol>
      </section>

      {/* Adicione outras seções como Education, Certifications, etc. se necessário */}
    </article>
  );
}