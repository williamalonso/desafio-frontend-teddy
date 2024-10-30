// src/components/PartnersList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PartnersList = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Parceiros</h1>
      <table>
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
                <button onClick={() => editPartner(partner.id)}>Editar</button>
                <button onClick={() => deletePartner(partner.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const editPartner = (id) => {
  // Lógica para editar o parceiro
  console.log('Editar parceiro com ID:', id);
};

const deletePartner = (id) => {
  // Lógica para deletar o parceiro
  console.log('Deletar parceiro com ID:', id);
};

export default PartnersList;
