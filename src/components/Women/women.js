import React from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import { data } from "../data.js";
import "./women.css";

function Title() {
  return (
    <div className="title-women">
      <p>All items - for women</p>
    </div>
  );
}

function Items() {
  const productItems = data.map(product => 
    <div key={product.id} className="item-women">
      <Link to={`/product/${product.id}`}>
        <img alt={product.name} src={product.img} />
        <h1 id="product-name-women">{product.name}</h1>
        <h4 id="product-description-women">{product.description}</h4>
      </Link>
      <div className="price-add-women">
        <h5 id="product-price">${product.price}</h5>
        <Icon small id="add-icon">add_shopping_cart</Icon>
      </div>
    </div>
  );
  return (
    <div className="items-women">
      {productItems}
    </div>
  );
}

export default function Women() {
  return (
    <div>
      <Title />
      <Items />
    </div>
  );
}