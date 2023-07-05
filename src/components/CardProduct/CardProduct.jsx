import React from 'react';
import AddBtn from '../AddBtn/AddBtn';
import Wishlist from '../Wishlist/Wishlist';

import './CardProduct.scss';
const CardProduct = ({ itens }) => {
  return (
    <div className="cardProducts">
      {itens.map((item, index) => (
        <div className="product" key={index}>
          <Wishlist />
          <img
            src={item.image}
            alt="Imagem do produto"
            title="Imagem do produto"
            className="product__image"
          />
          <p className="product__name">{item.name}</p>
          <p className="product__oldPrice">
            {item.oldPrice.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <p className="product__price">
            {item.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <p className="product__installments">
            em até{' '}
            <span>
              10x de
              {(item.price / 10).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>{' '}
            sem juros
          </p>
          <AddBtn />
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
