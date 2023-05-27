import React from "react";
import "./Cartbox.css";
import { Link } from "react-router-dom";

interface ICartboxProps {
  cartData: ICartData;
  addToList(index: number): void;
}

const Cartbox: React.FC<ICartboxProps> = (props) => {
  function addToWishlist(): void {
    props.addToList(props.cartData.id);
  }
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
      {/* <button className="btn" onClick={addToWishlist}>
        Add to list
      </button> */}
      <Link className="btn" to={`/products/${props.cartData.id}`}>
        View details
      </Link>
    </div>
  );
};

export default Cartbox;
