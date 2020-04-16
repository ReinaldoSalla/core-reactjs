//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
//Internals
import { data as PRODUCTS } from '../../data';
import './index.css';

class ShowProduct extends Component {
  constructor(props) {
    super(props);    
  }

  render () {
    console.log("*************************");
    console.log(this.props);
    return (
      <h1>todo single product</h1>
    );
  }
}

export default ShowProduct;
