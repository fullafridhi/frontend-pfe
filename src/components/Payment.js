import React from 'react';
import './payment.css'; // Import the CSS file

const Payment = () => {
  return (
    <div className="payment">
      <h2>Payment Informations</h2>
      <div className="payment-card">
      
        <img src="https://tse2.mm.bing.net/th?id=OIP.e2vNsBWLLOma_JbGiMgn0gHaEK&pid=Api&P=0&h=220" alt="Visa Card" />
        <p>Please enter your payment details to complete the enrollment.</p>
        <form>
          <label>
            Card Number:
            <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
          </label>
          <label>
            Expiration Date:
            <input type="text" placeholder="MM/YY" />
          </label>
          <label>
            CVV:
            <input type="text" placeholder="XXX" />
          </label>
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
