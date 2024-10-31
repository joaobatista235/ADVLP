import { ReactNode, useState } from 'react';
import { Sidebar } from '@/components/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Estado que acompanha o recolhimento da Sidebar

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar onCollapseChange={setIsSidebarCollapsed} /> {/* Passa a função de callback */}

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'md:pl-12' : 'md:pl-64'
        }`} // Ajusta o padding esquerdo com base no estado da sidebar
      >
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};