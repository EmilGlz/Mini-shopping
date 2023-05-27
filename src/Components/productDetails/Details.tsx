import React from "react";
import { useParams } from "react-router-dom";
import CartDatas from "../../mock/CartDatas";
import NotFound from "../notFound/NotFound";
import "./Details.css";
import "../../Components/Filterbox/Filterbox.css";
import "../../Components/CardBox/Cartbox.css";

interface IDetailsProps {
  addToList(index: number, size: string): void;
}
const Details: React.FC<IDetailsProps> = (props) => {
  const obj = useParams();
  const item = CartDatas.find((i) => i.id.toString() === obj.id);
  if (item === undefined) {
    return <NotFound />;
  }

  function sizeDiv(size: string) {
    return (
      <div key={size} className="Filterbox">
        <p>{size}</p>
      </div>
    );
  }

  return (
    <div className="details-container">
      <img className="details-img" src={item.image1}></img>
      <div className="details-container-content">
        <h2 className="details-h2">{item.price}</h2>
        <p className="details-p">{item.name}</p>
        <div className="Filterbox-container">
          {item.sizes.map((size, index) => sizeDiv(size))}
        </div>
        <button className="btn">Add to list</button>
      </div>
    </div>
  );
};
export default Details;
