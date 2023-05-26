import React from "react";
import "./Cartbox.css";

interface ICartboxProps {
  cartData: ICartData;
}

const Cartbox: React.FC<ICartboxProps> = (props) => {
  function addToWishlist(): void {}
  return (
    <div className="card-container">
      <img className="image-base image" src={props.cartData.image1} alt="" />
      <img
        className="image-base image-hover"
        src={props.cartData.image2}
        alt=""
      />
      <h2 className="title">{props.cartData.name}</h2>
      <p className="price">{props.cartData.price}</p>
      <button className="btn" onClick={addToWishlist}>
        Add to list
      </button>
    </div>
  );
};

export default Cartbox;
