import React, { useState } from "react";
import { Menu } from "lucide-react";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [language, setLanguage] = useState("pt");

  const menuItems = [
    { id: "about", label: { pt: "Sobre", en: "About" } },
    { id: "resume", label: { pt: "Currículo", en: "Resume" } },
    { id: "skills", label: { pt: "Habilidades", en: "Skills" } },
    { id: "projects", label: { pt: "Portfólio", en: "Portfolio" } },
    // { id: "blog", label: { pt: "Blog", en: "Blog" } },
    { id: "contact", label: { pt: "Contato", en: "Contact" } },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <About language={language} />;
      case "resume":
        return <Resume language={language} />;
      case "skills":
        return <Skills language={language} />;
      case "projects":
        return <Projects language={language} />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact language={language} />;
      default:
        return <About language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out z-40
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src="images/foto_perfil.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold">Matheus Bernardes</h1>
            <p className="text-gray-400">Data Science | Machine Learning</p>
          </div>

          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`
                      w-full px-4 py-2 rounded-lg text-left transition-colors
                      ${
                        activeSection === item.id
                          ? "bg-blue-600 text-white"
                          : "hover:bg-gray-700 text-gray-300"
                      }
                    `}
                  >
                    {item.label[language]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8">
            <button
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-gray-300"
            >
              {language === "pt" ? "EN" : "PT"}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={`
        transition-all duration-300 ease-in-out
        md:ml-64 p-6
      `}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            {renderContent()}
            <Footer language={language} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
