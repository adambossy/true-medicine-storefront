import { Component } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Product from "./components/Product"
import Checkout from "./components/Checkout"
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_live_51MOQ24BBGh6EEAHEjeTETQgYdHqYdbHZPh6ASUUEOtAwL9kqSyfKQJHjqWvYRPngzZb8fFPmwrhCZoXjqdXwnfoZ00MBZs67Pz');

class App extends Component {
    state = {
        products: [
            {
                id: 0,
                name: "Avocado",
                image: "avocado.webp",
                count: 0
            },
            {
                id: 1,
                name: "Broccoli",
                image: "broccoli.jpeg",
                count: 0
            },
            {
                id: 2,
                name: "Cauliflower",
                image: "cauliflower.jpeg",
                count: 0
            },
            {
                id: 3,
                name: "Pasture-raised beef",
                image: "beef.jpeg",
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
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1MOQQpBBGh6EEAHETLilW3L6', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'payment',
            successUrl: 'https://localhost:3000/success',
            cancelUrl: 'https://localhost:3000/cancel',
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
