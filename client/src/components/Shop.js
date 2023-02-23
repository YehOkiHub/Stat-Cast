import React, { useEffect } from "react";
import Nav from "./Nav";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "./../utils/Queries";
import { GET_STRIPE } from "./../utils/Mutation";

function Shop() {
  let productData = [];
  const products = useQuery(GET_PRODUCTS);
  if (products.loading == false) {
    productData = products.data.products;
    console.log(productData);
  }
  const [checkout, { error, data }] = useMutation(GET_STRIPE);

  async function buyNow(event) {
    let target = event.target;
    let productId = target.id;

    let product = productData.filter((p) => {
      if (p._id == productId) return p;
    });
    
    let response = await checkout({
      variables: { price: product[0].price },
    });
    window.location.href= response.data.checkout
  }
  useEffect(() => {}, [productData]);

  return (
    <div>
      <Nav />

      <div className="Store">
        <p className="storeWelcome">
          Welcome to the Stat-Cast shop where you can find sports attire.
        </p>
        <div className="products">
          {productData.map((product) => {
            return (
              <div className="product">
                <h2>{product.name}</h2>

                <p>{product.price}</p>
                <p>{product.autograph}</p>
                <p>{product.description}</p>
                <img src={require("./../../public/imgs/" + product.img)} />

                <button className="button" onClick={buyNow} id={product._id}>
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Donation">
        <div>
          <h1>Donation </h1>
          <br />

          <p>
            Help us grow bigger by donating! Our community is growing everyday
            by clicking the link
          </p>
        </div>
      </div>
    </div>
  );
}

export default Shop;
