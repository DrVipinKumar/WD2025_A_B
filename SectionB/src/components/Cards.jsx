import React from 'react'

const Cards = (props) => {
    const { id, title, category, price, rating, images } = props;
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={images} className="card-img-top" width={200} height={150}  alt="Not found"/>
  <div className="card-body">
              <h5 className="card-title">{id}</h5>
              <p className="card-text">{title}</p>
  </div>
  <ul className="list-group list-group-flush">
              <li className="list-group-item">Category:{category}</li>
              <li className="list-group-item">Price:{price}</li>
              <li className="list-group-item">Rating:{rating}</li>
  </ul> 
</div>
  )
}

export default Cards