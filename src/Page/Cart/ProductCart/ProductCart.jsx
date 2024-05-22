import React, { useState } from "react";

const ProductCart = () => {
  const [Amount, setAmount] = useState(1);

  const addAmount = () => {
    setAmount(Amount + 1);
  };

  const subAmount = () => {
    if (Amount === 1) return;
    setAmount(Amount - 1);
  };

  return (
    <div className="ProductCart" id="ProductCart">
      <div className="Product-Details">
        <div className="Details">
          <div className="Product-Image"></div>
          <div className="Product-Information">
            <div className="Product-Name">
              <h3>2 Seater Sofa</h3>
            </div>
            <div className="Product-ID">
              <p>
                ID: <span>P0000001</span>
              </p>
            </div>
            <div className="Product-Price">
              <p>
                RM<span>500.00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="Cancel">
          <button>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="Quantity">
        <button onClick={subAmount}>-</button>
        <input type="number" value={Amount} />
        <button onClick={addAmount}>+</button>
      </div>
      <div className="Product-SubTotal">RM45.00</div>
      <div className="Cancel Part">
        <button>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
