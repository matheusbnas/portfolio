import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 ml-64">
        {children}
      </main>
    </div>
  );
}