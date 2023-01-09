import React, { Component } from "react";
import './Product.css';

class Product extends Component {

    render() {
        const { product, onAdd, onRemove } = this.props;
        return (
            <div className="Product">
                <h1 className="Product-name">
                    {product.name}
                </h1>
                <img src={product.image} className="Product-image" alt={product.name} />
                <div class="Product-cart-controls">
                    <button class="Product-cart-remove" onClick={() => onRemove(product)}>-</button>
                    <div class="Product-cart-count">{product.count}</div>
                    <button class="Product-cart-add" onClick={() => onAdd(product)}>+</button>
                </div>
            </div>
        );
    }
}

export default Product;
