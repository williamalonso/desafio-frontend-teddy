// src/components/addModal/AddCompanyModal.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './AddPartnerModal.css';

Modal.setAppElement('#root');

const AddCompanyModal = ({ isOpen, onRequestClose, onAddCompany }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name) {
      setError('O nome é obrigatório.');
      return;
    }

    try {
      const response = await axios.post(
        'https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies',
        { companyName: name }
      );
      onAddCompany(response.data);
      onRequestClose();
      setName('');
    } catch (error) {
      setError('Erro ao adicionar empresa');
      console.error('Error adding company:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Adicionar Empresa"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2>Adicionar Empresa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="companyName">Nome:</label>
          <input
            id="companyName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <div className="button-container">
          <div className="add-button" onClick={handleSubmit}>Adicionar</div>
          <div className="close-button" onClick={onRequestClose}>Fechar</div>
        </div>
      </form>
    </Modal>
  );
};

export default AddCompanyModal;