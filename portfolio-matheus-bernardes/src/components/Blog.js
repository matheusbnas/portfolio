import React from 'react';

export default function Blog() {
  const posts = [
    { id: 1, title: "Introdução ao Machine Learning", date: "10 Mar 2024", excerpt: "Uma visão geral sobre os conceitos básicos de Machine Learning e suas aplicações." },
    { id: 2, title: "Técnicas Avançadas de Data Cleaning", date: "15 Feb 2024", excerpt: "Explorando métodos eficientes para preparar seus dados para análise." },
    { id: 3, title: "Visualização de Dados com Python", date: "20 Jan 2024", excerpt: "Um guia prático sobre como criar visualizações impactantes usando bibliotecas Python." },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-2">{post.date}</p>
            <p className="text-gray-300">{post.excerpt}</p>
            <a href="#" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">Leia mais</a>
          </div>
        ))}
      </div>
    </section>
  );
}