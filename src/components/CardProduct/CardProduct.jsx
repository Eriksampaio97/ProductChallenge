import React from 'react';
import AddBtn from '../AddBtn/AddBtn';

const CardProduct = ({ itens }) => {
  return (
    <div className="cardProducts">
      {itens.map((item) => (
        <div className="products">
          <img
            src={item.image}
            width="100"
            alt="imagem do produto"
            title="Imagem do produto"
          />
          <p>{item.name}</p>
          <p>{item.oldPrice}</p>
          <p>{item.price}</p>
          <p>em até 10x de R${item.price / 10} sem juros</p>
          <AddBtn />
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
