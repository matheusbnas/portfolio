"use client";

import { useState } from 'react';
import Sidebar from './Sidebar';
import About from './About';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function Layout() {
  const [activeSection, setActiveSection] = useState('about');
  const [language, setLanguage] = useState('pt');

  const menuItems = [
    { id: 'about', label: { pt: 'Sobre', en: 'About' } },
    { id: 'resume', label: { pt: 'Currículo', en: 'Resume' } },
    { id: 'skills', label: { pt: 'Habilidades', en: 'Skills' } },
    { id: 'projects', label: { pt: 'Portfólio', en: 'Portfolio' } },
    { id: 'contact', label: { pt: 'Contato', en: 'Contact' } },
  ];

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About language={language} />;
      case 'resume':
        return <Resume language={language} />;
      case 'skills':
        return <Skills language={language} />;
      case 'projects':
        return <Projects language={language} />;
      case 'contact':
        return <Contact language={language} />;
      default:
        return <About language={language} />;
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ms-auto" style={{left: '290px'}}>
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`nav-link btn ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label[language]}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={toggleLanguage} className="btn btn-outline-light">
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
        </nav>
        <main className="p-4" style={{marginLeft: '290px', marginTop: '56px'}}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}