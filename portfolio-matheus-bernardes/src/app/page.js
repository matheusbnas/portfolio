import dynamic from 'next/dynamic';

const DynamicPortfolio = dynamic(() => import('../components/Portfolio'), {
  ssr: false,
});

export default function Home() {
  return <DynamicPortfolio />;
}