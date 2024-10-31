import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

interface SidebarProps {
  onCollapseChange: (isCollapsed: boolean) => void; // Callback para informar o estado de recolhimento
}

export const Sidebar = ({ onCollapseChange }: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // Estado para controlar o recolhimento da sidebar

  const navigation = [
    { name: 'Dashboard', href: '#', icon: Menu, current: true }
  ];

    // Função para alternar a expansão/recolhimento e notificar o Layout
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
      onCollapseChange(!isCollapsed); // Notifica o Layout
    };

  return (
    <>
      {/* Mobile Sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <X className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Spacer */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop Sidebar */}
      <div className={`hidden md:flex ${isCollapsed ? 'md:w-20' : ' md:w-64'} md:flex-col md:fixed md:inset-y-0 transition-all duration-300 ease-in-out`}>
        <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
          <div className="flex items-center justify-between px-4 py-4">
            {/* Botão para recolher ou expandir a Sidebar */}
            <button
               onClick={toggleCollapse} // Chama a função que alterna o recolhimento
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isCollapsed ? (
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              ) : (
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <item.icon
                    className={`${isCollapsed ? "" : "mr-3"} h-6 w-6 text-gray-300 group-hover:text-gray-300`}
                    aria-hidden="true"
                  />
                  {!isCollapsed && <span>{item.name}</span>}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Open Sidebar Button for mobile */}
      <div className="md:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </>
  );
};
