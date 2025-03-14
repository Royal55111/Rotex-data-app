import React, { useState, useEffect } from 'react';
import { PaystackButton } from 'react-paystack';
import { Firestore } from 'firebase/firestore';
import { firestore } from './firebaseConfig';

const PaystackPayment = ({ email }) => {
  const publicKey = 'pk_live_98a6433e5f2d9938354585ccf85318bb6f6b089b'; // Use your Paystack Live Public Key
  const currency = 'NGN';
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from Firestore
  useEffect(() => {
    const fetchTransactions = async () => {
      const snapshot = await firestore.collection('transactions').orderBy('date', 'desc').get();
      const transactionData = snapshot.docs.map(doc => doc.data());
      setTransactions(transactionData);
    };

    fetchTransactions();
  }, []);

  // Save transaction to Firestore
  const saveTransaction = async (reference, amount) => {
    try {
      await firestore.collection('transactions').add({
        reference,
        amount,
        email,
        date: new Date().toISOString(),
      });
      alert("Transaction saved successfully!");
    } catch (error) {
      console.error("Error saving transaction: ", error);
    }
  };

  const componentProps = {
    email,
    amount: amount ? parseInt(amount) * 100 : 0, // Convert to kobo
    currency,
    reference: 'ref' + Math.floor(Math.random() * 1000000000),
    publicKey,
    text: "Pay Now",
    onSuccess: (response) => {
      alert(`Payment Successful! Reference: ${response.reference}`);
      saveTransaction(response.reference, amount);
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

      <h2>Transaction History</h2>
      <ul>
        {transactions.map((txn, index) => (
          <li key={index}>
            <strong>Amount:</strong> ₦{txn.amount} | <strong>Ref:</strong> {txn.reference} | <strong>Date:</strong> {new Date(txn.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaystackPayment;

