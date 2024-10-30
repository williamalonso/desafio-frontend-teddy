// src/components/partners/PartnersList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddPartnerModal from '../addModal/AddPartnerModal';
import PartnerModal from '../editModal/PartnerModal';

const PartnersList = ({ currentPage, onPageChange }) => {
  
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPartner, setCurrentPartner] = useState(null);
  const [itemsPerPage] = useState(5); // Número de itens por página

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get(
          'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners'
        );
        setPartners(response.data);
      } catch (error) {
        setError('Erro ao buscar parceiros');
        console.error('Error fetching partners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const addPartner = (newPartner) => {
    setPartners((prevPartners) => [...prevPartners, newPartner]);
  };

  const deletePartner = async (id) => {
    try {
      await axios.delete(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`);
      setPartners((prevPartners) => prevPartners.filter((partner) => partner.id !== id));
    } catch (error) {
      console.error('Erro ao deletar parceiro:', error);
      setError('Erro ao deletar parceiro');
    }
  };

  const editPartner = (partner) => {
    setCurrentPartner(partner);
    setIsModalOpen(true);
  };

  const updatePartner = async (updatedPartner) => {
    try {
      const response = await axios.put(
        `https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${updatedPartner.id}`,
        updatedPartner
      );
      setPartners((prevPartners) =>
        prevPartners.map((partner) => (partner.id === updatedPartner.id ? response.data : partner))
      );
      setIsModalOpen(false);
      setCurrentPartner(null);
    } catch (error) {
      console.error('Erro ao atualizar parceiro:', error);
      setError('Erro ao atualizar parceiro');
    }
  };

  // Cálculo dos parceiros a serem exibidos na página atual
  const indexOfLastPartner = currentPage * itemsPerPage;
  const indexOfFirstPartner = indexOfLastPartner - itemsPerPage;
  const currentPartners = partners.slice(indexOfFirstPartner, indexOfLastPartner);

  const totalPages = Math.ceil(partners.length / itemsPerPage);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Lista de Parceiros</h1>
      <button
        onClick={() => {
          setCurrentPartner(null);
          setIsModalOpen(true);
        }}
      >
        Adicionar Parceiro
      </button>
      <div style={{ width: '100%', padding: '20px' }}>
        <table style={{ width: '100%', tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentPartners.map((partner) => (
              <tr key={partner.id}>
                <td>{partner.id}</td>
                <td>{partner.name}</td>
                <td>
                  <button
                    onClick={() => editPartner(partner)}
                    style={{ backgroundColor: '#535bf2' }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deletePartner(partner.id)}
                    style={{ backgroundColor: 'red', marginLeft: '10px' }}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Controles de Paginação */}
      <div style={{ marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)} // Chama o callback ao mudar de página
            style={{
              margin: '0 5px',
              backgroundColor: currentPage === index + 1 ? '#ddd' : '#fff',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <AddPartnerModal
        isOpen={isModalOpen && currentPartner === null}
        onRequestClose={() => setIsModalOpen(false)}
        onAddPartner={addPartner}
      />

      <PartnerModal
        isOpen={isModalOpen && currentPartner !== null}
        onRequestClose={() => setIsModalOpen(false)}
        onUpdatePartner={updatePartner}
        partner={currentPartner}
      />
    </div>
  );
};

export default PartnersList;
