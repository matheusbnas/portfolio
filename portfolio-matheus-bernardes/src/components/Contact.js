"use client";

import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-white">Contato</h2>
      <p className="text-gray-300 mb-6">
        Sinta-se à vontade para entrar em contato comigo para colaborações potenciais, discussões de projetos ou ofertas.
        Será um prazer ouvir de você e me envolver em conversas frutíferas que possam levar a parcerias mutuamente benéficas.
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-6 h-6 text-blue-400" />
          <a href="mailto:matheusbnas@gmail.com" className="text-gray-300 hover:text-blue-400">matheusbnas@gmail.com</a>
        </div>
        <div className="flex items-center space-x-3">
          <Linkedin className="w-6 h-6 text-blue-400" />
          <a href="https://www.linkedin.com/in/matheus-nascimento-b06b639b" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
            linkedin.com/in/matheus-nascimento-b06b639b
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Github className="w-6 h-6 text-blue-400" />
          <a href="https://github.com/matheusbnas" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
            github.com/matheusbnas
          </a>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-white">Vamos conversar!</h3>
        <p className="text-gray-300">
          Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto interessante,
          uma oferta de trabalho ou simplesmente quer trocar ideias sobre ciência de dados e machine learning,
          não hesite em entrar em contato. Estou ansioso para ouvir de você!
        </p>
      </div>
    </section>
  );
}