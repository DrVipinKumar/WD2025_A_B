import React from "react";

const CardProduct = (props) => {
  const { id, title, price, discount, rating, image } = props;
  return (
    <div className="card" style={{ width: "300px" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Product Info {id}</h5>
        <p className="card-text">{title}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: {price}</li>
        <li className="list-group-item">Discount:{discount}</li>
        <li className="list-group-item">Rating: {rating}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-warning">Add to Cart</button>
        <button className="btn btn-danger">Cancel</button>
      </div>
    </div>
  );
};

export default CardProduct;
