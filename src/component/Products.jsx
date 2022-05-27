import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import {NavLink}  from "react-router-dom";


const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);

            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    }
    const filteProduct = (category) => {
        const updated = data.filter((x)=>x.category === category);
        setFilter(updated);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>{setData(data)}}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>{filteProduct("men's clothing")}}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>{filteProduct("women's clothing")}}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>{filteProduct("jewelery")}}>Jewelary</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>{filteProduct("electronics")}}>Electronics</button>
                </div>
                {filter.map((Product) => {
                    return (
                        <>
                            <div className="col-md-3">
                                <div className="card h-100 text-center p-4"
                                    key={Product.id}>
                                    <img src={Product.image}
                                        className="card-img-top"
                                        alt={Product.title}
                                        height="250px;" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">
                                            {Product.title.substring(0, 12)}...
                                        </h5>
                                        <p className="card-text lead fw-bold">
                                            ${Product.price}
                                        </p>
                                        <NavLink to={'/product/'+Product.id}  className="btn btn-outline-dark">Go somewhere</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>

        );
    };
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center ">Latest Products</h1>
                    </div>
                </div>
                <div className="row jsutify-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}


export default Products;