import Link from "gatsby-link";
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { getFormattedCart, getUpdatedItems } from "../../../utils/functions";
import CartItem from "../cart-item";
import { v4 } from "uuid";
import { useMutation, useQuery } from "@apollo/client";
import UPDATE_CART from "../../../mutations/update-cart";
import GET_CART from "../../../queries/get-cart";
import CLEAR_CART_MUTATION from "../../../mutations/clear-cart";
import cartclose from "../../../images/close.png";
import cartproduct1 from "../../../images/cartproduct1.png";
import cartproduct2 from "../../../images/cartproduct2.png";

const CartItemsContainer = () => {
  const [cart, setCart] = useContext(AppContext);
  const [requestError, setRequestError] = useState(null);
  const [count, setCount] = useState(1);

  // Get Cart Data.
  const { data, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // console.warn( 'completed GET_CART', data );

      // Update cart in the localStorage.
      const updatedCart = getFormattedCart(data);
      localStorage.setItem("woo-next-cart", JSON.stringify(updatedCart));

      // Update cart data in React Context.
      setCart(updatedCart);
    },
  });

  // Update Cart Mutation.
  const [updateCart, { loading: updateCartProcessing }] = useMutation(
    UPDATE_CART,
    {
      onCompleted: () => {
        refetch();
      },
      onError: (error) => {
        if (error) {
          setRequestError(error.graphQLErrors[0].message);
        }
      },
    }
  );

  // Update Cart Mutation.
  const [clearCart, { loading: clearCartProcessing }] = useMutation(
    CLEAR_CART_MUTATION,
    {
      onCompleted: () => {
        refetch();
      },
      onError: (error) => {
        if (error) {
          setRequestError(error.graphQLErrors[0].message);
        }
      },
    }
  );

  /*
   * Handle remove product click.
   *
   * @param {Object} event event
   * @param {Integer} Product Id.
   *
   * @return {void}
   */
  const handleRemoveProductClick = (event, cartKey, products) => {
    event.stopPropagation();
    if (products.length) {
      // By passing the newQty to 0 in updateCart Mutation, it will remove the item.
      const newQty = 0;
      const updatedItems = getUpdatedItems(products, newQty, cartKey);

      updateCart({
        variables: {
          input: {
            clientMutationId: v4(),
            items: updatedItems,
          },
        },
      });
    }
  };

  // Clear the entire cart.
  const handleClearCart = (event) => {
    event.stopPropagation();

    if (clearCartProcessing) {
      return;
    }

    clearCart({
      variables: {
        input: {
          clientMutationId: v4(),
          all: true,
        },
      },
    });
  };


  return (
    // <div className="content-wrap-cart">
    //   {cart ? (
    //     <div className="container woo-next-cart-wrapper">
    //       <h1 className="mt-5 woo-next-cart-heading">Cart</h1>
    //       <div className="woo-next-cart-table-row row">
    //         <div className="woo-next-cart-table col-md-8 mb-md-0 mb-5">
	  //           {cart.products.length &&
	  //           cart.products.map((item) => (
		//             <CartItem
		// 	            key={item.productId}
		// 	            item={item}
		// 	            updateCartProcessing={updateCartProcessing}
		// 	            products={cart.products}
		// 	            handleRemoveProductClick={handleRemoveProductClick}
		// 	            updateCart={updateCart}
		//             />
	  //           ))}

    //           {/*Clear entire cart*/}
    //           <div className="clear-cart">
    //             <button
    //               className="btn btn-light "
    //               onClick={(event) => handleClearCart(event)}
    //               disabled={clearCartProcessing}
    //             >
    //               <span className="woo-next-cart">Clear Cart</span>
    //               <i className="fa fa-arrow-alt-right" />
    //             </button>
    //             {clearCartProcessing ? <p>Clearing...</p> : ""}
    //           </div>
    //         </div>

    //         {/* Display Errors if any */}
    //         {requestError ? (
    //           <div className="mt-5 row woo-next-cart-total-container">
    //             {" "}
    //             {requestError}{" "}
    //           </div>
    //         ) : (
    //           ""
    //         )}

    //         {/*Cart Total*/}
    //         <div className="woo-next-cart-total-container col-md-4">
    //           <h2>Cart Total</h2>
    //           <table className="table table-hover">
    //             <tbody>
    //               <tr className="table-light">
    //                 <td className="woo-next-cart-element-total">Subtotal</td>
    //                 <td className="woo-next-cart-element-amt">
    //                   {"string" !== typeof cart.totalProductsPrice
    //                     ? cart.totalProductsPrice.toFixed(2)
    //                     : cart.totalProductsPrice}
    //                 </td>
    //               </tr>
    //               <tr className="table-light">
    //                 <td className="woo-next-cart-element-total">Total</td>
    //                 <td className="woo-next-cart-element-amt">
    //                   {"string" !== typeof cart.totalProductsPrice
    //                     ? cart.totalProductsPrice.toFixed(2)
    //                     : cart.totalProductsPrice}
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //           <Link to="/checkout">
    //             <button className="btn btn-dark woo-next-large-black-btn">
    //               <span className="woo-next-cart-checkout-txt">
    //                 Proceed to Checkout
    //               </span>
    //               <i className="fas fa-long-arrow-alt-right" />
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="container mt-5">
    //       <h2>No items in the cart</h2>
    //       <Link to="/">
    //         <button className="btn btn-secondary woo-next-large-black-btn">
    //           <span className="woo-next-cart-checkout-txt">
    //             Add New Products
    //           </span>
    //           <i className="fas fa-long-arrow-alt-right" />
    //         </button>
    //       </Link>
    //     </div>
    //   )}
    // </div>


    <div className="cart-page">

        <div className="container">

          <div className="row">

            <div className="col-md-12">
              <h2>Shopping Cart</h2>
            </div>

              <div className="col-md-9">
                  <div className="cart-item-content">
                      
                      <div className="cart-table">
                          <table>
                            <thead>
                              <tr>
                                <th>Product Details</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Sub Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="cart-product">
                                   <button className="close-btn"><img src={cartclose} alt="" /></button>
                                    <div className="cart-product-img">
                                      <img src={cartproduct1} alt="" />
                                    </div>
                                    <div className="cart-product-detail">
                                      <h4>Guava Pastry - 15 Pack</h4>
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                <div className="increament-input">
                                  <button className="decriment-btn" onClick={() => setCount(count - 1)}><i className="fa fa-minus"></i></button>
                                  <input type="number" value={count} />
                                  <button className="increament-btn" onClick={() => setCount(count + 1)}><i className="fa fa-plus"></i></button>
                                </div>
                                </td>
                                <td>$20.00</td>
                                <td>$40.00</td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="cart-product">
                                    <button className="close-btn"><img src={cartclose} alt="" /></button>
                                    <div className="cart-product-img">
                                      <img src={cartproduct2} alt="" />
                                    </div>
                                    <div className="cart-product-detail">
                                      <h4>Guava Pastry - 15 Pack</h4>
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                <div className="increament-input">
                                  <button className="decriment-btn" onClick={() => setCount(count - 1)}><i className="fa fa-minus"></i></button>
                                  <input type="number" value={count} />
                                  <button className="increament-btn" onClick={() => setCount(count + 1)}><i className="fa fa-plus"></i></button>
                                </div>
                                </td>
                                <td>$20.00</td>
                                <td>$40.00</td>
                              </tr>
                            </tbody>
                          </table>
                      </div>


                      <div className="apply-coupon">
                          <div className="subscribe-form">
                              <input type="email" className="form-control"  placeholder="Enter coupon code" />
                              <button>Apply Coupon</button>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-md-3">

                <div className="cart-sidebar">

                  <h3>Cart Total</h3>
                  <div className="cart-total">
                      <ul>
                        <li><span>Subtotal</span> $80.00</li>
                        <li><span>Shippings</span> FREE SHIPPING</li>
                        <li><span>Total</span> <strong>$80.00</strong></li>
                      </ul>
                  </div>

                  <button className="checkout-btn">Checkout</button>

                </div>

              </div>

          </div>
        </div>

    </div>
  );
};

export default CartItemsContainer;
