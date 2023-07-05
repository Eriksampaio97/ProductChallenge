import React, { useState } from 'react';
import './AddBtn.scss';

const AddBtn = () => {
  const [add, setAdd] = useState(false);
  const addToCart = () => {
    if (!add) {
      setAdd(true);
    } else setAdd(false);
  };
  return (
    <button
      className={add ? 'addedToCartBtn' : 'addToCartBtn'}
      onClick={addToCart}
    >
      {add ? 'Adicionado' : 'Adicionar'}
    </button>
  );
};

export default AddBtn;
