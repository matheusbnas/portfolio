import React, { useState } from "react";
import { Eye } from "lucide-react";

export default function Projects({ language }) {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: {
        pt: "Construção de um programa de fidelidade com clusterização de clientes",
        en: "Building a loyalty program with customer clustering",
      },
      category: "machine-learning",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      link: "https://github.com/matheusbnas/desafio-cientista-de-dados",
      description: {
        pt: "Segmentação de clientes com K-means para criação de programas de fidelidade personalizados, baseada em análise de perfil de consumo e comportamento.",
        en: "Customer segmentation with K-means to create personalized loyalty programs, based on consumption profile and behavior analysis.",
      },
      tags: ["Python", "Scikit-learn", "Pandas", "K-means"],
    },
    {
      id: 2,
      title: {
        pt: "Predição de cavalos sobreviventes com base de dados anteriores",
        en: "Prediction of surviving horses based on previous data",
      },
      category: "machine-learning",
      imageUrl:
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&h=400&fit=crop",
      link: "https://github.com/matheusbnas/projeto_dataMining_puc",
      description: {
        pt: "Projeto de Data Mining com múltiplos classificadores (KNN, Regressão Logística, Random Forest, SVM) para predição de sobrevivência de cavalos.",
        en: "Data Mining project with multiple classifiers (KNN, Logistic Regression, Random Forest, SVM) for predicting horse survival.",
      },
      tags: [
        "Python",
        "KNeighborsClassifier",
        "LogisticRegression",
        "Random Forest",
        "SVM",
        "Pandas",
      ],
    },
    {
      id: 3,
      title: {
        pt: "Rosalia Koury Gestão do Tempo e Vida Acadêmica",
        en: "Rosalia Koury Time Management and Academic Life",
      },
      category: "business-intelligence",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      link: "https://app.powerbi.com/view?r=eyJrIjoiNzAyNjA1MGMtOGFmOC00YjZjLThjZDYtMjQ1OTZjZWUwYzNlIiwidCI6ImIyZTE2Mjk3LTJlZDYtNDFiOC1iODIyLWE5NTRlOTViZDJmMCIsImMiOjR9",
      description: {
        pt: "Dashboard interativo no Power BI para análise de gestão do tempo e desempenho acadêmico, com pipeline de ETL estruturado via Pentaho para transformação e modelagem dos dados.",
        en: "Interactive Power BI dashboard for time management and academic performance analysis, with ETL pipeline structured via Pentaho for data transformation and modeling.",
      },
      tags: ["Power BI", "Pentaho", "ETL", "DAX", "SQL", "Data Visualization"],
    },
    {
      id: 4,
      title: {
        pt: "Classificação de Insetos com Visão Computacional",
        en: "Insect Classification with Computer Vision",
      },
      category: "computer-vision",
      imageUrl: "/images/insetos.jpg",
      link: "https://selecao-insetos.vercel.app/",
      description: {
        pt: "Modelo de Visão Computacional usando TensorFlow e CNN para classificação de espécies de insetos, com deploy em aplicação web interativa.",
        en: "Computer Vision model using TensorFlow and CNN for insect species classification, deployed as an interactive web application.",
      },
      tags: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"],
    },
    {
      id: 5,
      title: {
        pt: "Assistente Educacional DNA da Força",
        en: "DNA da Força Educational Assistant",
      },
      category: "generative-ai",
      imageUrl:
        "https://images.unsplash.com/photo-1676573409967-986dcf64d35a?w=800&h=400&fit=crop",
      link: "https://iadnadaforca.com.br/chat",
      description: {
        pt: "Assistente IA para perguntas sobre treinamento, programas e prevenção de lesões, com respostas baseadas em fontes e trilhas de aprendizagem personalizadas.",
        en: "AI assistant for training questions, workout plans and injury prevention, with source-based answers and personalized learning pathways.",
      },
      tags: ["React", "TypeScript", "FastAPI", "Supabase", "RAG", "ChromaDB"],
    },
    {
      id: 6,
      title: {
        pt: "Automação de Processos de Patentes",
        en: "Patent Process Automation",
      },
      category: "artificial-intelligence",
      imageUrl:
        "https://images.unsplash.com/photo-1767972463877-b64ba4283cd0?w=800&h=400&fit=crop",
      link: "https://patenteisaias.streamlit.app/",
      description: {
        pt: "Solução para agilizar o fluxo de patentes com IA: geração de relatórios INPI, documentos DOCX, entrada por voz e automação das etapas críticas. Utiliza RAG com FAISS para busca semântica em bases de propriedade intelectual.",
        en: "AI solution to streamline the patent workflow: generation of INPI reports, DOCX documents, voice input and automation of critical steps. Uses RAG with FAISS for semantic search in intellectual property databases.",
      },
      tags: ["Python", "Streamlit", "RAG", "FAISS", "Voice Input", "DOCX", "INPI", "Workflow"],
    },
    {
      id: 7,
      title: {
        pt: "App de Análise de Jogadores de FIFA",
        en: "FIFA Players Analysis App",
      },
      category: "data-analysis",
      imageUrl:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=400&fit=crop",
      link: "https://projetoappfifa.streamlit.app/",
      description: {
        pt: "Aplicação interativa para análise de dados de jogadores de FIFA, com gráficos comparativos, filtros por posição e estatísticas de desempenho.",
        en: "Interactive app for FIFA player data analysis, with comparative charts, position filters and performance statistics.",
      },
      tags: ["Python", "Streamlit", "Pandas", "Plotly"],
    },
    {
      id: 8,
      title: {
        pt: "Análise de Chuvas no Rio de Janeiro",
        en: "Rainfall Analysis for Rio de Janeiro",
      },
      category: "data-analysis",
      imageUrl:
        "https://images.unsplash.com/photo-1656119650749-1d9e4689ae48?w=800&h=400&fit=crop",
      link: "https://chovendo-agora.netlify.app/",
      description: {
        pt: "Painel de análise de precipitação para o Rio de Janeiro com dados em tempo real via API de chuvas e série histórica desde 1997. Pipeline de dados orquestrado com Prefect do banco de dados para o Google Cloud Platform, permitindo análise histórica para mitigação de riscos.",
        en: "Rainfall analysis dashboard for Rio de Janeiro with real-time data via rain API and historical series since 1997. Data pipeline orchestrated with Prefect from database to Google Cloud Platform, enabling historical analysis for risk mitigation.",
      },
      tags: ["Python", "Prefect", "GCP", "Pipeline", "API", "Banco de Dados", "Weather"],
    },
    {
      id: 9,
      title: {
        pt: "LLM Chess Arena",
        en: "LLM Chess Arena",
      },
      category: "generative-ai",
      imageUrl:
        "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=800&h=400&fit=crop",
      link: "https://llm-chess-arena.streamlit.app/",
      description: {
        pt: "TCC: Análise comparativa de LLMs usando xadrez como benchmark cognitivo. Torneios automatizados, ranking ELO dinâmico, sistema RAG com dados do Lichess e integração com GPT-4, Gemini, Claude, DeepSeek e Llama.",
        en: "Thesis: Comparative analysis of LLMs using chess as a cognitive benchmark. Automated tournaments, dynamic ELO ranking, RAG system with Lichess data and integration with GPT-4, Gemini, Claude, DeepSeek and Llama.",
      },
      tags: ["Python", "Streamlit", "LLM", "Chess", "RAG", "PUC-Rio", "TCC"],
    },
  ];

  const categories = [
    { id: "all", label: { pt: "Todos", en: "All" } },
    {
      id: "machine-learning",
      label: { pt: "Machine Learning", en: "Machine Learning" },
    },
    {
      id: "computer-vision",
      label: { pt: "Visão Computacional", en: "Computer Vision" },
    },
    {
      id: "generative-ai",
      label: { pt: "IA Generativa", en: "Generative AI" },
    },
    {
      id: "artificial-intelligence",
      label: { pt: "IA e Automação", en: "AI & Automation" },
    },
    {
      id: "business-intelligence",
      label: { pt: "Business Intelligence", en: "Business Intelligence" },
    },
    {
      id: "data-analysis",
      label: { pt: "Análise de Dados", en: "Data Analysis" },
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <article className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold mb-6">
          {language === "pt" ? "Portfólio" : "Portfolio"}
        </h2>
      </header>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`
              px-4 py-2 rounded-lg transition-colors
              ${
                filter === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }
            `}
          >
            {category.label[language]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm"
          >
            <div className="relative">
              <img
                src={project.imageUrl}
                alt={project.title[language]}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full">
                <Eye size={20} className="text-white" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors">
                {project.title[language]}
              </h3>
              {project.description && (
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">
                  {project.description[language]}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-xs rounded-full text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}
