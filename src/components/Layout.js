"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import About from './About';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function Layout() {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch(activeSection) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="flex-1 p-8 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}