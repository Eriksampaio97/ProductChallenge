import React from 'react';

import CardProduct from '../CardProduct/CardProduct';

import product1 from './assets/product-image.png';
import product2 from './assets/monitor-lg.jpg';

const Product = () => {
  const products = [
    {
      name: 'Monitor LED 27 Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
      image: product1,
      oldPrice: 2813,
      price: 2599,
    },
    {
      name: 'Monitor Gamer LG 21.5 LED Full HD, 75Hz, 5ms, HDMI, FreeSync - 22MP410-B',
      image: product2,
      oldPrice: 888,
      price: 500,
    },
  ];
  return <CardProduct itens={products} />;
};

export default Product;
