"use client";

export default function Resume() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold mb-4">Experiência Profissional</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Cientista de Dados Freelancer</h3>
          <p className="text-gray-400">Junho 2023 - Presente</p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Desenvolvimento de projetos completos de Ciência de Dados para clientes diversos.</li>
            <li>Aplicação de técnicas avançadas de machine learning e análise estatística.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Cientista de Dados - Projetos Acadêmicos</h3>
          <p className="text-gray-400">Março 2023 - Maio 2023</p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Colaboração em projetos de pesquisa durante a pós-graduação.</li>
            <li>Análise de dados e desenvolvimento de modelos para problemas complexos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}