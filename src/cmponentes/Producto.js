import React from 'react';

const Producto = (props) =>{
    const {
        thumbnail,
        title,
        price,
        seller  
    } = props.producto;
    return (
    <div className="col-5 col-sm-5 col-md-12     col-lg-3 mb-5" >
        <div className="card" >
            <img src={thumbnail}  className="card-img-top" width="100" height="150" />
            <div className="card-body">
                <p className="card-text">{title}</p>
                <p className="card-text">Precio:  {price} </p>
                <p className="card-text">Vendedor: {seller.id} </p>
            </div>

        </div>

    </div>
    )
}

export default Producto;