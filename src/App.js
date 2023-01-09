import { Component } from "react";
import './App.css';
import Product from "./components/Product"
import Checkout from "./components/Checkout"

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
                />
            </div>
        );
    }
}

export default App;
