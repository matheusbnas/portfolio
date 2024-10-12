"use client";

import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Sidebar({ setActiveSection, activeSection }) {
  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <aside className="w-64 bg-gray-800 p-6 fixed h-screen overflow-auto">
      <div className="text-center">
        <Image
          src="/images/foto_perfil.jpg"
          alt="Matheus Bernardes"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-white">Matheus Bernardes</h1>
        <p className="text-gray-400">Cientista de Dados</p>
      </div>
      <nav className="mt-8">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
                  activeSection === item.id ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 flex justify-center space-x-4">
        <a href="https://github.com/matheusbnas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/matheus-nascimento-b06b639b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:matheusbnas@gmail.com" className="text-gray-400 hover:text-white">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </aside>
  );
}