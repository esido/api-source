import React from "react";
import "./page.css";
import { notFound } from "next/navigation";
import Link from "next/link";

const fetchProduct = async (id) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  if (!response.ok) return;
  return response.json();
};

const page = async ({ params }) => {
  const data = await fetchProduct(params.id);
  if (!data) {
    notFound();
  }
  return (
    <div className="single-product-container">
      <div className="single-product-card">
        {!data.images[0].startsWith("[") ? (
          <img src={data.images[0]} alt="#" className="single-product-img" />
        ) : (
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq"
            alt=""
            className="single-product-img"
          />
        )}
        <div className="single-product-content">
          <h3 className="single-product-title">{data.title}</h3>
          <span className="single-product-price">Price: {data.price}$</span>
        </div>
      </div>
    </div>
  );
};

export default page;
