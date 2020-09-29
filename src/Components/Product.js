import React from 'react'

function Product(props) {
    return(
        <div>
            <h3>{props.product.name}</h3>
            <p>{props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            - {props.product.description}
            <br></br>
        </div>
    )
}

export default Product

