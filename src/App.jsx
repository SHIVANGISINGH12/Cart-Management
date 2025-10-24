import './App.css'

function App() {

  return (
    <div className="container">
      <div className="leftContainer">
        <h2>Products</h2>
        <div className="productsContainer">
          <div className="product">
            <p className='productName'>Product-1</p>
            <p className='price'>100</p>
            <div className="buttonContainer">
              <button className="plus">+</button>
              <p className='quantity'>2</p>
              <button className="minus">-</button>
            </div>
          </div>
          <div className="product">
            <p className='productName'>Product-1</p>
            <p className='price'>100</p>
            <div className="buttonContainer">
              <button className="plus">+</button>
              <p className='quantity'>2</p>
              <button className="minus">-</button>
            </div>
          </div>
          <div className="product">
            <p className='productName'>Product-1</p>
            <p className='price'>100</p>
            <div className="buttonContainer">
              <button className="plus">+</button>
              <p className='quantity'>2</p>
              <button className="minus">-</button>
            </div>
          </div>
          <div className="product">
            <p className='productName'>Product-1</p>
            <p className='price'>100</p>
            <div className="buttonContainer">
              <button className="plus">+</button>
              <p className='quantity'>2</p>
              <button className="minus">-</button>
            </div>
          </div>
          <div className="product">
            <p className='productName'>Product-1</p>
            <p className='price'>100</p>
            <div className="buttonContainer">
              <button className="plus">+</button>
              <p className='quantity'>2</p>
              <button className="minus">-</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <h2>Cart</h2>
        <div className="cartContainer">
          <div className="cartItems">
            <div className="item">
              <p>Product-1</p>
              <p>2*100</p>
            </div>
             <div className="item">
              <p>Product-1</p>
              <p>2*100</p>
            </div>
             <div className="item">
              <p>Product-1</p>
              <p>2*100</p>
            </div>
             <div className="item">
              <p>Product-1</p>
              <p>2*100</p>
            </div>
             <div className="item">
              <p>Product-1</p>
              <p>2*100</p>
            </div>
          </div>
          <div className="total">
            <p>Total:</p>
            <p>800</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
