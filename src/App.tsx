import { useState } from "react";
import { Sun, Moon, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [theme, setTheme] = useState("dark");

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

  const isLight = theme === "light";

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isLight ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {/* Floating toggle button when sidebar is closed */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className={`fixed top-4 left-4 z-50 p-2.5 rounded-xl shadow-lg transition-all hover:scale-105 ${
            isLight
              ? "bg-white text-gray-600 hover:text-gray-900"
              : "bg-gray-800 text-gray-400 hover:text-white"
          }`}
          aria-label="Open sidebar"
        >
          <PanelLeftOpen size={20} />
        </button>
      )}

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isLight ? "bg-white shadow-2xl" : "bg-gray-800"
        } ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button inside sidebar */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className={`absolute top-3 right-3 z-50 p-1.5 rounded-lg transition-colors ${
            isLight
              ? "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              : "text-gray-500 hover:text-gray-200 hover:bg-gray-700"
          }`}
          aria-label="Close sidebar"
        >
          <PanelLeftClose size={18} />
        </button>

        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-blue-500">
              <img
                src="/images/foto_perfil.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className={`text-xl font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
              Matheus Bernardes
            </h1>
            <p className={`${isLight ? "text-gray-500" : "text-gray-400"}`}>
              Data Science | Machine Learning
            </p>
          </div>

          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                    }}
                    className={`w-full px-4 py-3 rounded-lg text-left transition-colors text-base font-medium ${
                      activeSection === item.id
                        ? "bg-blue-600 text-white"
                        : isLight
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {item.label[language]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-3">
            <button
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              className={`w-full px-4 py-2 rounded-lg transition-colors ${
                isLight
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {language === "pt" ? "🇺🇸 English" : "🇧🇷 Português"}
            </button>

            <button
              onClick={toggleTheme}
              className={`w-full px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                isLight
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {isLight ? (
                <>
                  <Moon size={18} /> Modo Escuro
                </>
              ) : (
                <>
                  <Sun size={18} /> Modo Claro
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ease-in-out p-6 ${
          isSidebarOpen ? "md:ml-80" : "ml-0"
        }`}
      >
        <div className="max-w-4xl mx-auto pt-12">
          <div
            className={`rounded-lg p-6 shadow-xl ${
              isLight ? "bg-white" : "bg-gray-800"
            }`}
          >
            {renderContent()}
            <Footer language={language} theme={theme} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
