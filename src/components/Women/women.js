import React from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import { data } from "../data.js";
import "./women.css";

export default function Women() {
  const productItems = data.map(product => 
    <div key={product.id} className="item-women">
      <Link to={`/products/${product.id}`}>
        <img alt={product.name} src={product.img} />
      </Link>
    </div>
  );
  return (
    <div>
      <div className="title-women">
        <p>All items - women's</p>
      </div>
      <div className="items-women">
        {productItems}
      </div>
    </div>
  );
}