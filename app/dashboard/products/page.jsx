import React from "react";
import Link from "next/link";
import "./page.css";
import { resolve } from "styled-jsx/css";

const fetchProducts = () => {
  return fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => data);
};

const page = async () => {
  const data = await fetchProducts();
  return (
    <div className="products-container">
      {data.map((product) => (
        <div key={product.id} className="product-card">
          <Link href={`/dashboard/products/${product.id}`}>
            {!product.images[0].startsWith("[") ? (
              <img src={product.images[0]} alt="" className="product-img" />
            ) : (
              <img
                src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq"
                alt=""
                className="product-img"
              />
            )}
          </Link>
          <div className="product-info">
            <h3 className="product-name">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <span className="product-price">Price: {product.price}$</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
