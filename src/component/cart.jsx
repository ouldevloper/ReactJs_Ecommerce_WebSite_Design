import React from 'react'
import { useSelector } from 'react-redux'
import Product from './product'
import handlerCart from '../redux/reducer/handlerCart';
export default function Cart() {
  const product =  useSelector((state)=> state.handlerCart);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="{product.image}" alt="{product.title}" />
          </div>
          <div className="col-md-4">
            <h3>{Product.title}</h3>
            <p>
              {product.qty} X {product.price} = $ 
              {product.qty*product.price}
            </p>
            <button className="btn-outline-dark me-3"
            >
              <i className="fa fa-minus"></i>
            </button>
            <button className="btn btn-outline-dark"
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
