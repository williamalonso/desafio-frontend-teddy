// src/components/partners/PartnersList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddPartnerModal from '../addModal/AddPartnerModal';
import PartnerModal from '../editModal/PartnerModal';

const PartnersList = () => {

  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPartner, setCurrentPartner] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners');
        console.log('Partners:', response.data);
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
      // Fazendo a chamada para excluir o parceiro na API
      await axios.delete(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`);
      // Atualizando o estado para remover o parceiro da lista
      setPartners((prevPartners) => prevPartners.filter(partner => partner.id !== id));
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
      const response = await axios.put(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${updatedPartner.id}`, updatedPartner);
      setPartners((prevPartners) => prevPartners.map(partner => (partner.id === updatedPartner.id ? response.data : partner)));
      setIsModalOpen(false); // Fecha o modal
      setCurrentPartner(null); // Reseta o parceiro atual
    } catch (error) {
      console.error('Erro ao atualizar parceiro:', error);
      setError('Erro ao atualizar parceiro');
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Parceiros</h1>
      <button onClick={() => {
        setCurrentPartner(null); // Reseta o parceiro ao adicionar
        setIsModalOpen(true); // Abre o modal para adicionar
      }}>
        Adicionar Parceiro
      </button>
      <div style={{ width: '100%', padding: '20px' }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner) => (
              <tr key={partner.id}>
                <td>{partner.id}</td>
                <td>{partner.name}</td>
                <td>
                  <button onClick={() => editPartner(partner)} style={{ backgroundColor: '#535bf2'}}>Editar</button>
                  <button onClick={() => deletePartner(partner.id)} style={{ backgroundColor: 'red', marginLeft: '10px' }}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <AddPartnerModal 
        isOpen={isModalOpen && currentPartner === null} 
        onRequestClose={() => setIsModalOpen(false)} 
        onAddPartner={addPartner} 
      />

      <PartnerModal 
        isOpen={isModalOpen && currentPartner !== null} // Modal de editar
        onRequestClose={() => setIsModalOpen(false)} 
        onUpdatePartner={updatePartner} 
        partner={currentPartner} // Passa o parceiro atual para o modal
      />

    </div>
  );
};

export default PartnersList;