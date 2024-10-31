import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCompanyModal from '../addModal/AddCompanyModal';
import CompanyModal from '../editModal/CompanyModal';

const CompaniesList = ({ currentPage = 1, onPageChange = () => {} }) => {

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCompany, setCurrentCompany] = useState(null);
  const [itemsPerPage] = useState(5); // Número de itens por página

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies');
        setCompanies(response.data);
      } catch (error) {
        setError('Erro ao buscar empresas');
        console.error('Error fetching companies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  const deleteCompany = async (id) => {
    try {
      await axios.delete(`https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`);
      setCompanies((prev) => prev.filter((company) => company.id !== id));
    } catch (error) {
      console.error('Erro ao deletar empresa:', error);
      setError('Erro ao deletar empresa');
    }
  };

  const editCompany = (company) => {
    setCurrentCompany(company);
    setIsModalOpen(true);
  };

  const addCompany = (newCompany) => {
    setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
  };

  const updateCompany = async (updatedCompany) => {
    try {
      const response = await axios.put(
        `https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${updatedCompany.id}`,
        updatedCompany
      );
      setCompanies((prevCompanies) =>
        prevCompanies.map((company) =>
          company.id === updatedCompany.id ? response.data : company
        )
      );
      setIsModalOpen(false);
      setCurrentCompany(null);
    } catch (error) {
      console.error('Erro ao atualizar empresa:', error);
      setError('Erro ao atualizar empresa');
    }
  };

  const indexOfLastCompany = currentPage * itemsPerPage;
  const indexOfFirstCompany = indexOfLastCompany - itemsPerPage;
  const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);

  const totalPages = Math.ceil(companies.length / itemsPerPage);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Lista de Empresas Externas</h1>
      <button
        onClick={() => {
          setCurrentCompany(null);
          setIsModalOpen(true);
        }}
      >
        Adicionar Empresa
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
            {currentCompanies.map((company) => (
              <tr key={company.id}>
                <td>{company.id}</td>
                <td>{company.companyName}</td>
                <td>
                  <button
                    onClick={() => editCompany(company)}
                    style={{ backgroundColor: '#535bf2', marginRight: '10px' }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteCompany(company.id)}
                    style={{ backgroundColor: 'red' }}
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
            onClick={() => onPageChange(index + 1)}
            style={{
              margin: '0 5px',
              backgroundColor: currentPage === index + 1 ? 'blue' : 'black',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <AddCompanyModal
        isOpen={isModalOpen && currentCompany === null}
        onRequestClose={() => setIsModalOpen(false)}
        onAddCompany={addCompany}
      />

      <CompanyModal
        isOpen={isModalOpen && currentCompany !== null}
        onRequestClose={() => setIsModalOpen(false)}
        onUpdateCompany={updateCompany}
        company={currentCompany}
      />
    </div>
  );
};

export default CompaniesList;