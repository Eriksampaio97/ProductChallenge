import React, { useState } from 'react';
import './whishlist.scss';
const Wishlist = () => {
  const [wishlistActive, setWishlistActive] = useState(false);
  const addWishlist = () => {
    if (!wishlistActive) {
      setWishlistActive(true);
    } else setWishlistActive(false);
  };
  return (
    <button
      className={wishlistActive ? 'wishlistActive' : 'wishlist'}
      onClick={addWishlist}
    ></button>
  );
};

export default Wishlist;
