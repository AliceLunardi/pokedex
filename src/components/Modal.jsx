import React from 'react';

function Modal({ pokemon, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <p><strong>Altura:</strong> {pokemon.height} decímetros</p>
        <p><strong>Peso:</strong> {pokemon.weight} hectogramas</p>
        <h3>Habilidades:</h3>
        <ul>
          {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
        <button className="close-modal-button" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default Modal;
