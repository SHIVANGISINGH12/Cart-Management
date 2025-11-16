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

    const [cartArray, setCartArray] = useState([]);

    function increment(id) {
        setProductsArray((prevProductsArray) =>
            prevProductsArray.map((product) =>
                id === product.id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );

        setCartArray((prevCartArray) => {
            //check if the clicked product exists in the current cart
            const itemExists = prevCartArray.find((item) => item.id === id);

            //If Item does exist, then we will increase the quantity
            if (itemExists) {
                return prevCartArray.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                //If Item does not exist, then we will freshly add a new item by finding that item from product array and then adding quantity of 1
                const product = productsArray.find(
                    (product) => product.id === id
                );
                return [...prevCartArray, { ...product, quantity: 1 }];
            }
        });
    }

    function decrement(id) {
        setProductsArray((prevProductsArray) =>
            prevProductsArray.map((product) =>
                product.id === id && product.quantity > 0
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );

        //Firstly check in the current cart whether the clicked product quantity is 1 or not, store that in a variable
        //If it is 1: just map the cart by adding a quantity-1
        //If its quanity is 1 then make a new cart by not having that particular product, use filter function of array for that.

        setCartArray((prevCartArray) => {
            const itemClicked = prevCartArray.find((item) => item.id === id);

            if (itemClicked && itemClicked.quantity > 1) {
                return prevCartArray.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                return prevCartArray.filter(
                    (item) => item.id !== itemClicked.id
                );
            }
        });
    }

    const products = productsArray.map((product) => (
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
    ));

    const cart = cartArray.map((item) => (
        <div className="item">
            <p>{item.name}</p>
            <p>
                {item.quantity} x {item.price}
            </p>
        </div>
    ));

    return (
        <div className="container">
            <div className="leftContainer">
                <h2>Products</h2>
                <div className="productsContainer">{products}</div>
            </div>
            <div className="rightContainer">
                <h2>Cart</h2>
                <div className="cartContainer">
                    <div className="cartItems">{cart}</div>
                    <div className="total">
                        <p>Total:</p>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

/*
Steps:
1) Make the plus and minus button interactive by adding onClicks. ------------------------------------- DONE----------------
2) Make increment and decrement function and modify the quantity of products in "Products array". ----------------DONE-------------
3) Make changes to cart array:
   3.1) Increment: (i) Check whether the product exists or not, if it doesn't then add the product. --------------DONE------------
                   (ii) If the product already exists then increase just the quantity. ----------------DONE---------------------
   3.2) Decrement: (i) If the product's quantity is 1 then remove it from the cart.
                   (ii) If the product's quantity is more than 1 then just reduce it on each click.
4) Calculate the total value and render it.
*/
