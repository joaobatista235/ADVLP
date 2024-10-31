import AddProductModal, { FormData } from '@/components/ProductModal';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const products = [
  { name: 'Cherry Delight', id: '#KP287400', price: '$90.50', stock: '350 pcs', type: 'Dessert', status: 'Pending' },
  { name: 'Kiwi', id: '#TL651535', price: '$12.00', stock: '650 kg', type: 'Fruits', status: 'Active' },
  { name: 'Mango Magic', id: '#GB51535', price: '$100.50', stock: '1200 pcs', type: 'Ice Cream', status: 'Inactive' },
  { name: 'Joy Care', id: '#ER651535', price: '$59.99', stock: '700 pcs', type: 'Care', status: 'On Sale' },
  { name: 'Blueberry Bliss', id: '#SO487441', price: '$150.90', stock: '100 lt', type: 'Dessert', status: 'Bouncing' },
  { name: 'Watermelon', id: '#TL49003', price: '$10.99', stock: '23 lt', type: 'Juice', status: 'Pending' },
  { name: 'Trilogy', id: '#KP651535', price: '$130.00', stock: '3000 pcs', type: 'Oil', status: 'Active' },
  { name: 'Dryskin', id: '#GB49003', price: '$40.70', stock: '400 pcs', type: 'Ice Cream', status: 'Inactive' },
  { name: 'Olive Oil', id: '#SD46903', price: '$35.50', stock: '200 lt', type: 'Oil', status: 'On Sale' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
  { name: 'Citrus Brust', id: '#ER58612', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing' },
];

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Ajustado para 5 itens
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [isModalOpen, setModalOpen] = useState(false);

  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const { data: clients, isLoading: clientsLoading } = useQuery({
    queryKey: ["list-users"],
    queryFn: async () => {
      const { data } = await axios.get('http://127.0.0.7:8091/restapi/clientes/listar', {
        headers: {
          Authorization: 'Basic YWRtaW46IA==',
        },
      });

      return data.items as FormData[]
    },
  })

  console.log(clients)

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
      <AddProductModal open={isModalOpen} handleClose={() => setModalOpen(false)} />

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Product Name</th>
                <th className="py-2 px-4 text-left">Product Name</th>
                <th className="py-2 px-4 text-left">Product Name</th>
                <th className="py-2 px-4 text-left">Product Name</th>
                <th className="py-2 px-4 text-left">Product ID</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Stock</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Actions</th>
                <th className="py-2 px-4 text-left">Actions</th>
                <th className="py-2 px-4 text-left">Actions</th>
                <th className="py-2 px-4 text-left">Actions</th>
                <th className="py-2 px-4 text-left">Actions</th>
                <th className="py-2 px-4 text-left">Actions</th>
                <th className="py-2 px-4 text-left">Actions</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients?.map((client, index) => (
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
                    <button className="text-gray-500">...</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <div className="text-sm">Page {currentPage} of {totalPages}</div>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
}
