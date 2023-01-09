import { Component } from "react";
import './App.css';
import Product from "./components/Product"

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

    render() {
        return (
            <div className="App">
                {this.state.products.map((product) => (
                    <Product product={product} />
                ))}
            </div>
        );
    }
}

export default App;
