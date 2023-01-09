import React, { Component } from "react";

class Product extends Component {

    render() {
        const { product } = this.props;
        return (
            <div className="Product">
                <h1 className="Product-name">
                    {product.name}
                </h1>
                <img src={product.image} className="Product-image" alt={product.name} />
                <div class="Product-cart-controls">
                    <div class="Product-cart-add">+</div>
                    <div class="Product-cart-count">{product.count}</div>
                    <div class="Product-cart-remove">-</div>
                </div>
            </div>
        );
    }
}

export default Product;
