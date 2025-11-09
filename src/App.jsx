import { useState } from "react";
import "./App.css";

function App() {
    const [productsArray, setProductsArray] = useState([
        { id: 1, name: "Product-1", price: 100, quantity: 0 },
        { id: 2, name: "Product-2", price: 200, quantity: 0 },
        { id: 3, name: "Product-3", price: 300, quantity: 0 },
        { id: 4, name: "Product-4", price: 400, quantity: 0 },
        { id: 5, name: "Product-5", price: 500, quantity: 0 },
    ]);

    const [cartArray, setCartArray] = useState([
        { id: 1, name: "Product-1", price: 100, quantity: 0 },
        { id: 2, name: "Product-2", price: 200, quantity: 0 },
        { id: 3, name: "Product-3", price: 300, quantity: 0 },
        { id: 4, name: "Product-4", price: 400, quantity: 0 },
        { id: 5, name: "Product-5", price: 500, quantity: 0 },
    ]);

    function increment(id) {
        setProductsArray((productsArray) =>
            productsArray.map((product) =>
                (product.id === id)
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );

        setCartArray([]);
    }

    function decrement(id) {
        setProductsArray((productsArray) =>
            productsArray.map((product) =>
                (product.id === id && product.quantity >0)
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    }

    return (
        <div className="container">
            <div className="leftContainer">
                <h2>Products</h2>
                <div className="productsContainer">
                    {productsArray.map((product) => (
                        <div className="product" key={product.id}>
                            <p className="productName">{product.name}</p>
                            <p className="price">{product.price}</p>
                            <div className="buttonContainer">
                                <button
                                    className="plus"
                                    onClick={() => {
                                        increment(product.id);
                                    }}
                                >
                                    +
                                </button>
                                <p className="quantity">{product.quantity}</p>
                                <button
                                    className="minus"
                                    onClick={() => {
                                        decrement(product.id);
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="rightContainer">
                <h2>Cart</h2>
                <div className="cartContainer">
                    <div className="cartItems">
                        {cartArray.map((item) => (
                            <div className="item">
                                <p>{item.name}</p>
                                <p>
                                    {item.quantity} x {item.price}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="total">
                        <p>Total:</p>
                        <p>800</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
