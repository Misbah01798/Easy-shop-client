import React from 'react'

const Cart = ({ acart }) => {
    const { _id, image, name, bname, type, price, rating } = acart;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                </div>
                <figure><img src={image} alt="" className='h-56' /></figure>
            </div>
        </div>
    )
}

export default Cart
