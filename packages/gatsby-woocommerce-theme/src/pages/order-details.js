import React, { useEffect } from "react";
import Layout from "../components/layout";
import { userInstance } from "../config/axios.js";
const OrderDetails = () => {
  const getOrder = async (id) => {
    const res = await userInstance.get(
      `/wp-json/wc/v3/orders/${id}?oauth_consumer_key=ck_786bd366dc16bec63d023573a2817678ead12c5e&oauth_signature_method=HMAC-SHA1&oauth_timestamp=${new Date().getTime()}&oauth_nonce=4VkexQ&oauth_version=1.0&oauth_signature=xz1+UjeccfpsqsQTtkEgKqlXcvc=`
    );
    console.log(res, "res");
  };
  useEffect(() => {
    const orderId = "undefined" !== typeof window ? window.location.search : "";
    if (orderId.split("=")[1].length) {
      const id = orderId.split("=")[1];
      getOrder(id);
    }
  }, []);
  return (
    <Layout>
      <div className="container">
        <div className="col-md-6">
          <div className="latest-order">
            <h3>Order details ()</h3>

            {/* <div className="latet-order-list">
                              <div className="latest-order-detail">
                                <img src={order1} alt="" />
                                <div className="latest-order-info">
                                  <h4>{el.products[0].item_name}</h4>
                                  <span>
                                    {el.products[0].quantity} X{" "}
                                    {el.products[0].item_name}{" "}
                                  </span>
                                  <Link to={`/order-details?orderId=${el.id}`}>
                                    ..order details
                                  </Link>
                                </div>
                              </div>

                              <div className="latest-order-price">
                                <h5>
                                  {el.currency === "USD" ? "$" : el.currency}{" "}
                                  {el.total}
                                </h5>
                              </div>
                            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default OrderDetails;
