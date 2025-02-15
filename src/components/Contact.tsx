import React from "react";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

export default function Contact({ language }) {
  const content = {
    pt: {
      title: "Contato",
      subtitle: "Vamos nos conectar!",
      description:
        "Sinta-se à vontade para entrar em contato comigo para colaborações potenciais, discussões de projetos ou ofertas. Será um prazer ouvir de você e me envolver em conversas frutíferas que possam levar a parcerias mutuamente benéficas.",
      email: "Email",
      phone: "Telefone",
      location: "Localização",
      social: "Redes Sociais",
    },
    en: {
      title: "Contact",
      subtitle: "Let's Connect!",
      description:
        "Feel free to reach out to me for potential collaborations, project discussions, or offers. It will be a pleasure to hear from you and engage in fruitful conversations that could lead to mutually beneficial partnerships.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      social: "Social Media",
    },
  };

  const text = content[language];

  return (
    <article className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold mb-2">{text.title}</h2>
        <p className="text-xl text-gray-400">{text.subtitle}</p>
      </header>

      <section className="text-gray-300">
        <p className="mb-8">{text.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold">{text.email}</h3>
            </div>
            <a
              href="mailto:matheusbnas@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              onClick={(e) => {
                window.location.href = "mailto:matheusbnas@gmail.com";
                e.preventDefault();
              }}
            >
              matheusbnas@gmail.com
            </a>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold">{text.phone}</h3>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5521994288152"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              +55 21 99428-8152
            </a>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold">{text.location}</h3>
            </div>
            <p className="text-gray-300">Rio de Janeiro, Brazil</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Linkedin className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold">{text.social}</h3>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/matheusbnas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/matheusbnas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:matheusbnas@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                onClick={(e) => {
                  window.location.href = "mailto:matheusbnas@gmail.com";
                  e.preventDefault();
                }}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
