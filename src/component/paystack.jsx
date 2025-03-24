import React, { useState} from 'react';
import { PaystackButton } from 'react-paystack';
import { Firestore } from 'firebase/firestore';
import { firestore } from './firebaseConfig';

const PaystackPayment = ({ email }) => {
  const publicKey = 'pk_live_98a6433e5f2d9938354585ccf85318bb6f6b089b'; // Use your Paystack Live Public Key
  const currency = 'NGN';
  const [amount, setAmount] = useState('');
 



  const componentProps = {
    email,
    amount: amount ? parseInt(amount) * 100 : 0, // Convert to kobo
    currency,
    reference: 'ref' + Math.floor(Math.random() * 1000000000),
    publicKey,
    text: "Pay Now",
    onSuccess: (response) => {
      alert(`Payment Successful! Reference: ${response.reference}`);
    },
    onClose: () => {
      alert("Transaction Cancelled!");
    },
  };

  return (
    <div>
      <h2>Make Payment</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <PaystackButton {...componentProps} />

    </div>
  );
};

export default PaystackPayment;

