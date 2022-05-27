import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import {   useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {addCart} from '../redux/actions';
const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const addProduct = (product) => {
        console.log(product);
        dispatch(addCart(product));   
    }
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const data = await fetch("https://fakestoreapi.com/products/"+id);
            setProduct(await data.json());
            setLoading(false);
        }
        getProducts();
    },[]);
    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                   Loading .....
                </div>
            </>
        );
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image}
                        alt={product.title}
                        height="400px"
                        width="400px"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="display-5">
                        {product.category}
                    </h4>
                    <h1 className="display-5">
                        {product.title}
                    </h1>
                    <p className="lead">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-start"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">
                        {product.description}
                    </p>
                    <button className="btn btn-outline-dark ms-2 px-3"
                        onClick={()=>addProduct(product)}>
                        Add to Cart
                    </button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3">
                        Go to Cart
                    </NavLink>
                </div>
            </>
        );
    };
    return (
        <>
            <div className="container">
                <div className="container py-5">
                    <div className="row py-4">
                    {loading? <Loading />:<ShowProduct/>}
                       
                    </div>
                </div>
            </div>
        </>
    );
};
export default Product;