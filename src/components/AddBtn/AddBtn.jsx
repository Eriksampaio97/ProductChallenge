import React, { useState } from 'react';
import './AddBtn.scss';

const AddBtn = () => {
  const [add, setAdd] = useState(false);
  const btn = () => {
    document.querySelector('.addToCartBtn').classList.add('added');
    if (!add) {
      setAdd(true);
      document.querySelector('.addToCartBtn').classList.remove('added');
    } else setAdd(false);
  };
  return (
    <button className={add ? 'addedToCartBtn' : 'addToCartBtn'} onClick={btn}>
      {add ? 'Adicionado' : 'Adicionar'}
    </button>
  );
};

export default AddBtn;
