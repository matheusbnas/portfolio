"use client";

import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact({ language }) {
  const content = {
    pt: {
      title: "Contato",
      subtitle: "🔗 Vamos nos conectar!",
      description: "Sinta-se à vontade para entrar em contato comigo para colaborações potenciais, discussões de projetos ou ofertas. Será um prazer ouvir de você e me envolver em conversas frutíferas que possam levar a parcerias mutuamente benéficas.",
    },
    en: {
      title: "Contact",
      subtitle: "🔗 Let's Connect!",
      description: "Feel free to reach out to me for potential collaborations, project discussions, or offers. It will be a pleasure to hear from you and engage in fruitful conversations that could lead to mutually beneficial partnerships.",
    }
  };

  const text = content[language];

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">{text.title}</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">{text.subtitle}</h3>

        <section className="about-text">
          <p>{text.description}</p>
        </section>

        <section className="about-text">
          <ul className="space-y-4">
            <li className="social-item">
              <a href="https://www.linkedin.com/in/matheus-nascimento-b06b639b" target="_blank" rel="noopener noreferrer" className="social-link flex items-center space-x-3">
                <Linkedin className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300 hover:text-blue-400">LinkedIn</span>
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/matheusbnas" target="_blank" rel="noopener noreferrer" className="social-link flex items-center space-x-3">
                <Github className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300 hover:text-blue-400">GitHub</span>
              </a>
            </li>
            <li className="social-item">
              <a href="mailto:matheusbnas@gmail.com"  target="_blank" className="social-link flex items-center space-x-3">
                <Mail className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300 hover:text-blue-400">Email</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </article>
  );
}