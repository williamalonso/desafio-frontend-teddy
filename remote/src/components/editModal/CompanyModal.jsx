// src/components/editModal/CompanyModal.jsx
import React, { useState, useEffect } from 'react';
import './PartnerModal.css';

const CompanyModal = ({ isOpen, onRequestClose, onUpdateCompany, company }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (company) {
      setName(company.companyName); // Preenche o campo com o nome da empresa ao abrir o modal
    } else {
      setName(''); // Reseta o campo se não houver empresa
    }
  }, [company]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateCompany({ ...company, companyName: name });
  };

  if (!isOpen) return null; // Se não estiver aberto, não renderiza nada

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Editar Empresa</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </label>
            <div className="modal-footer">
              <button type="button" onClick={onRequestClose}>Cancelar</button>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default CompanyModal;
