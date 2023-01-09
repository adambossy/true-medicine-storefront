import { Component } from "react";

class Checkout extends Component {

    totalItems = (products) => {
       return products.reduce((total, product) => total + product.count, 0);
    }

    render() {
        const { products, onCheckout } = this.props;
        const totalItems = this.totalItems(products);

        return (
            <button role="link" onClick={onCheckout} disabled={totalItems == 0}>
                Checkout ({totalItems} items)
            </button>
        );
    }
}

export default Checkout;
