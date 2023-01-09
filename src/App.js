import { Component } from "react";
import React from 'react';
import './App.css';
import Product from "./components/Product"
import Checkout from "./components/Checkout"
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51MOQ24BBGh6EEAHEYr8YwcqpdO3S2hbGwDPkY62kWiRBEhlN41SU2ICL52KQBdsOVHYW09Ekus56yrkC4SeaebxT00rdZGVRF8');

class App extends Component {
    state = {
        products: [
            {
                id: 0,
                name: "Avocado",
                image: "avocado.webp",
                stripePriceId: "price_1MOQQpBBGh6EEAHETLilW3L6",
                count: 0
            },
            {
                id: 1,
                name: "Broccoli",
                image: "broccoli.jpeg",
                stripePriceId: "price_1MOQRQBBGh6EEAHEZB1YGoA8",
                count: 0
            },
            {
                id: 2,
                name: "Cauliflower",
                image: "cauliflower.jpeg",
                stripePriceId: "price_1MOQRYBBGh6EEAHEMrTtRQiM",
                count: 0
            },
            {
                id: 3,
                name: "Pasture-raised beef",
                image: "beef.jpeg",
                stripePriceId: "price_1MOQReBBGh6EEAHEzvMynIUN",
                count: 0
            },
        ]
    };

    onAdd = (product) => {
        const products = [ ...this.state.products ] // shallow copy
        const index = products.indexOf(product);
        products[index] = { ...products[index] }    // deep copy
        products[index].count++;
        this.setState({ products })
    };

    onRemove = (product) => {
        const products = [ ...this.state.products ] // shallow copy
        const index = products.indexOf(product);
        products[index] = { ...products[index] }    // deep copy
        if (products[index].count > 0) {
            products[index].count--;
        }
        this.setState({ products })
    };

    onCheckout = async (event) => {
        const stripe = await stripePromise;
        const lineItems = this.state.products
            .filter(product => product.count > 0)
            .map((product) => {
                return {
                    price: product.stripePriceId,
                    quantity: product.count,
                }
            });
        stripe.redirectToCheckout({
            lineItems: lineItems,
            mode: 'payment',
            successUrl: 'http://localhost:3000/',
            cancelUrl: 'http://localhost:3000/',
        });
    };

    render() {
        return (
            <div className="App">
                {this.state.products.map((product) => (
                    <Product
                        product={product}
                        onAdd={this.onAdd}
                        onRemove={this.onRemove}
                    />
                ))}
                <Checkout
                    products={this.state.products}
                    onCheckout={this.onCheckout}
                />
            </div>
        );
    }
}

export default App;
