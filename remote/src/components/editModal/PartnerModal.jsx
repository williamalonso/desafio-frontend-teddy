// src/components/editModal/PartnerModal.jsx
import React, { useState, useEffect } from 'react';
import './PartnerModal.css';

const PartnerModal = ({ isOpen, onRequestClose, onAddPartner, onUpdatePartner, partner }) => {

  const [name, setName] = useState('');

  useEffect(() => {
    if (partner) {
      setName(partner.name); // Preenche o campo com o nome do parceiro ao abrir o modal
    } else {
      setName(''); // Reseta o campo se não houver parceiro
    }
  }, [partner]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatePartner({ ...partner, name });
  };

  if (!isOpen) return null; // Se não estiver aberto, não renderiza nada

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Editar Parceiro</h2>
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

export default PartnerModal;