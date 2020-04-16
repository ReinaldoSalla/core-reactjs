import React from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import { data } from "../../data";
import "./index.css";

function Title(props) {
  return (
    <div className="title">
      <p>{props.title}</p>
    </div>
  );
}

function Items(props) {
  let productItems = data;
  if (props.target !== "all") {
    productItems = productItems.filter(product => 
      product.gender === props.target
    );
  }
  productItems = productItems.map(product => 
    <div key={product.id} className="item">
      <Link to={`/products/${product.id}`}>
        <img alt={product.name} src={product.img} />
        <h1 id="product-name">{product.name}</h1>
        <h4 id="product-description">{product.description}</h4>
      </Link>
      <div className="price-add">
        <h5 id="product-price">${product.price}</h5>
        <Icon small id="add-icon">add_shopping_cart</Icon>
      </div>
    </div>
  );
  return (
    <div className="items">
      {productItems}
    </div>
  );
}

export default function Products(props) {
  return (
    <div>
      <Title title={props.title}/>
      <Items target={props.target}/>
    </div>
  );
}