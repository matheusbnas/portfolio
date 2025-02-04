import React from 'react';

export default function Footer({ language }) {
  return (
    <footer className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
      <p>&copy; 2025 Matheus Bernardes. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
    </footer>
  );
}