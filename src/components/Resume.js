"use client";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* Adicione o ícone apropriado aqui */}
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Cientista de Dados Freelancer</h4>
            <span>Junho 2023 - Presente</span>
            <p className="timeline-text">
              Desenvolvimento de projetos completos de Ciência de Dados para clientes diversos.
              Aplicação de técnicas avançadas de machine learning e análise estatística.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Cientista de Dados - Projetos Acadêmicos</h4>
            <span>Março 2023 - Maio 2023</span>
            <p className="timeline-text">
              Colaboração em projetos de pesquisa durante a pós-graduação.
              Análise de dados e desenvolvimento de modelos para problemas complexos.
            </p>
          </li>
        </ol>
      </section>

      {/* Adicione outras seções como Education, Certifications, etc. se necessário */}
    </article>
  );
}