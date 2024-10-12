import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();

  const menuItems = [
    { id: 'sobre-mim', label: 'Sobre Mim', url: '/' },
    { id: 'habilidades', label: 'Habilidades', url: '/habilidades' },
    { id: 'experiencias', label: 'Experiências', url: '/experiencias' },
    { id: 'projetos', label: 'Projetos', url: '/projetos' },
  ];

  return (
    <aside className="w-64 bg-gray-100 p-6 fixed h-screen overflow-auto">
      <div className="text-center">
        <Image
          src="/images/foto_perfil.jpg"
          alt="Imagem de Perfil"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold">Matheus Bernardes</h1>
        <p>Cientista de Dados</p>
      </div>
      <nav className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Menu</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>
                <a className={`block p-2 rounded ${
                  router.pathname === item.url ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                }`}>
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}