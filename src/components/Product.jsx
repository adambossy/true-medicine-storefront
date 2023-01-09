import React, { Component } from "react";
import './Product.css';

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
                    <button class="Product-cart-add">+</button>
                    <div class="Product-cart-count">{product.count}</div>
                    <button class="Product-cart-remove">-</button>
                </div>
            </div>
        );
    }
}

export default Product;
