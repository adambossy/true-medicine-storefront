import { Component } from "react";

class Checkout extends Component {

    totalItems = (products) => {
       return products.reduce((total, product) => total + product.count, 0);
    }

    render() {
        const { products } = this.props;

        return (
            <button>
                Checkout ({this.totalItems(products)} items)
            </button>
        );
    }
}

export default Checkout;
