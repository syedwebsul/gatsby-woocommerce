import React from 'react';
import Link from "gatsby-link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.png";

const RelatedProducts = () => {
	return (
		<div className="related-products">
            <h2>Related Products</h2>
			<div className="product-container row">
                <div className="col-lg-3 col-md-6 mb-5">
                    <Link to={"/"} className="product-image">
                        <figure>
                            <LazyLoadImage
                                alt="default"
                                height="450"
                                src={product1}
                                width="450"
                                effect="blur"
                            />
                        </figure>
                  
                    </Link>
                    <div className="card-body text-center">
                    <h3 className="card-header">Frozen Strawberry Daiquiry</h3>
                    <h6 className="card-subtitle">$79.00</h6>
                    <div>
                        <button className="btn-cart">
                            Add to cart
                        </button>
                        <p className="mt-2" style={{ color: "transparent" }}>
                            Adding to Cart...
                        </p>
                    </div>
                        <div className="wishlist-container">
                            <button className="wishlist-btn btn -mt-2">
                                <i className="heart-icon"><span className="heart"/></i>
                            </button>  
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-5">
                    <Link to={"/"} className="product-image">
                        <figure>
                            <LazyLoadImage
                                alt="default"
                                height="450"
                                src={product2}
                                width="450"
                                effect="blur"
                            />
                        </figure>
                  
                    </Link>
                    <div className="card-body text-center">
                    <h3 className="card-header">La Postal</h3>
                    <h6 className="card-subtitle">$79.00</h6>
                    <div>
                        <button className="btn-cart">
                            Add to cart
                        </button>
                        <p className="mt-2" style={{ color: "transparent" }}>
                            Adding to Cart...
                        </p>
                    </div>
                        <div className="wishlist-container">
                            <button className="wishlist-btn btn -mt-2">
                                <i className="heart-icon"><span className="heart"/></i>
                            </button>  
                        </div>
                    </div>
                </div>


                <div className="col-lg-3 col-md-6 mb-5">
                    <Link to={"/"} className="product-image">
                        <figure>
                            <LazyLoadImage
                                alt="default"
                                height="450"
                                src={product3}
                                width="450"
                                effect="blur"
                            />
                        </figure>
                  
                    </Link>
                    <div className="card-body text-center">
                    <h3 className="card-header">La Flaca Margarita</h3>
                    <h6 className="card-subtitle">$79.00</h6>
                    <div>
                        <button className="btn-cart">
                            Add to cart
                        </button>
                        <p className="mt-2" style={{ color: "transparent" }}>
                            Adding to Cart...
                        </p>
                    </div>
                        <div className="wishlist-container">
                            <button className="wishlist-btn btn -mt-2">
                                <i className="heart-icon"><span className="heart"/></i>
                            </button>  
                        </div>
                    </div>
                </div>


                <div className="col-lg-3 col-md-6 mb-5">
                    <Link to={"/"} className="product-image">
                        <figure>
                            <LazyLoadImage
                                alt="default"
                                height="450"
                                src={product4}
                                width="450"
                                effect="blur"
                            />
                        </figure>
                  
                    </Link>
                    <div className="card-body text-center">
                    <h3 className="card-header">Guava Pastry - 15 Pack</h3>
                    <h6 className="card-subtitle">$79.00</h6>
                    <div>
                        <button className="btn-cart">
                            Add to cart
                        </button>
                        <p className="mt-2" style={{ color: "transparent" }}>
                            Adding to Cart...
                        </p>
                    </div>
                        <div className="wishlist-container">
                            <button className="wishlist-btn btn -mt-2">
                                <i className="heart-icon"><span className="heart"/></i>
                            </button>  
                        </div>
                    </div>
                </div>

            </div>
      </div>
	);
};

export default RelatedProducts;
