import Layout from '../components/Layout';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function SobreMim() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
      <p className="text-lg mb-6">
        Olá, meu nome é Matheus Bernardes. Sou formado em Sistemas da Computação na UFF - RJ e pós-graduando em
        Ciências de Dados na PUC-RIO. Atualmente, trabalho com projetos pessoais como Analista de Dados / Cientista
        de Dados para projetos parceiros e universitários.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <Image
          src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=matheusbnas&show_icons=true&theme=cobalt&include_all_commits=true&count_private=true"
          alt="GitHub Stats"
          width={495}
          height={195}
          unoptimized
        />
        <Image
          src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=matheusbnas&layout=compact&langs_count=16&theme=cobalt"
          alt="Top Languages"
          width={350}
          height={195}
          unoptimized
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Entre em contato!</h2>
        <div className="flex space-x-4">
          <a href="https://github.com/matheusbnas" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/matheus-nascimento-b06b639b" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:matheusbnas@gmail.com">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </Layout>
  );
}