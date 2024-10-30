// src/components/addModal/AddPartnerModal.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './AddPartnerModal.css';

Modal.setAppElement('#root');

const AddPartnerModal = ({ isOpen, onRequestClose, onAddPartner }) => {

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
      const response = await axios.post('https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners', { name });
      onAddPartner(response.data);
      onRequestClose();
      setName('');
    } catch (error) {
      setError('Erro ao adicionar parceiro');
      console.error('Error adding partner:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Adicionar Parceiro" className="modal-content" overlayClassName="modal-overlay">
      <h2>Adicionar Parceiro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="partnerName">Nome:</label>
          <input
            id="partnerName"
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

export default AddPartnerModal;