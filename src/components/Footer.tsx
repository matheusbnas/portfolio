
export default function Footer({ language, theme }: { language: "pt" | "en"; theme: string }) {
  const isLight = theme === "light";

  return (
    <footer
      className={`mt-8 pt-4 border-t text-center transition-colors ${
        isLight ? "border-gray-200 text-gray-500" : "border-gray-700 text-gray-400"
      }`}
    >
      <p>
        &copy; 2026 Matheus Bernardes.{" "}
        {language === "pt"
          ? "Todos os direitos reservados."
          : "All rights reserved."}
      </p>
    </footer>
  );
}
