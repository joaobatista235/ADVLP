import AddProductModal, { FormData } from '@/components/ProductModal';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const getStatusStyle = (status: string) => {
  switch (status) {
    case '1':
      return 'bg-green-200 text-green-700';
    case '2':
      return 'bg-red-200 text-red-700';
    default:
      return '';
  }
};

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState<FormData | null>(null)
  const itemsPerPage = 10; 

  const offset = (currentPage - 1) * itemsPerPage;

  const { data: clients, isLoading: clientsLoading, isError } = useQuery({
    queryKey: ["list-users", currentPage], 
    queryFn: async () => {
      try {
        const { data } = await axios.get('http://127.0.0.7:8091/restapi/clientes/listar', {
          headers: {
            Authorization: 'Basic YWRtaW46IA==',
          },
          params: {
            limit: itemsPerPage,  
            offset,               
          },
        });
        return data as FormData[];
      } catch (error) {
        console.error('Erro ao carregar clientes');
      }
    },
    keepPreviousData: true,
  });

  const totalPages = Math.ceil(clients ? clients?.length : 0 / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Fragment>
      <div className="p-6 bg-white rounded-xl shadow-sm h-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Clientes</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Adicionar
          </button>
        </div>
        <AddProductModal open={isModalOpen} handleClose={() => {
          setModalOpen(false);
          setCurrentUser(null)
        }} user={currentUser} />

        <div className="bg-white shadow-md rounded-lg overflow-x-auto max-w-full"> {/* Tabela agora é responsiva */}
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Código</th>
                <th className="py-2 px-4 text-left">Bairro</th>
                <th className="py-2 px-4 text-left">CEP</th>
                <th className="py-2 px-4 text-left">Cidade</th>
                <th className="py-2 px-4 text-left">CNPJ</th>
                <th className="py-2 px-4 text-left">Contato</th>
                <th className="py-2 px-4 text-left">DDD</th>
                <th className="py-2 px-4 text-left">E-mail</th>
                <th className="py-2 px-4 text-left">Endereço</th>
                <th className="py-2 px-4 text-left">Estado</th>
                <th className="py-2 px-4 text-left">Loja</th>
                <th className="py-2 px-4 text-left">Nome</th>
                <th className="py-2 px-4 text-left">Pais</th>
                <th className="py-2 px-4 text-left">Pessoa</th>
                <th className="py-2 px-4 text-left">Telefone</th>
                <th className="py-2 px-4 text-left">Tipo</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
            {clients && clients.length > 0 ? (
              clients.map((client, index) => (
                <tr key={index} className="border-b">
                  <tr key={index} className="border-b">
                  <td className="py-3 px-4">{client.codigo}</td>
                  <td className="py-3 px-4">{client.bairro}</td>
                  <td className="py-3 px-4">{client.cep}</td>
                  <td className="py-3 px-4">{client.cidade}</td>
                  <td className="py-3 px-4">{client.cnpj}</td>
                  <td className="py-3 px-4">{client.contato}</td>
                  <td className="py-3 px-4">{client.ddd}</td>
                  <td className="py-3 px-4">{client.email}</td>
                  <td className="py-3 px-4">{client.endereco}</td>
                  <td className="py-3 px-4">{client.estado}</td>
                  <td className="py-3 px-4">{client.loja}</td>
                  <td className="py-3 px-4">{client.nome}</td>
                  <td className="py-3 px-4">{client.pais}</td>
                  <td className="py-3 px-4">{client.pessoa}</td>
                  <td className="py-3 px-4">{client.telefone}</td>
                  <td className="py-3 px-4">{client.tipo}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(client.status)}`}
                    >
                      {client.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-400" onClick={() => {
                      setCurrentUser(client);
                      setModalOpen(true)
                    }}>view</button>
                  </td>
                </tr>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={17} className="py-3 px-4 text-center">Nenhum cliente encontrado.</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="mt-6 flex justify-between items-center">
          <button
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <div className="text-sm">
            Página {currentPage} de {totalPages}
          </div>
          <button
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
}
