const express = require('express');
const cors = require('cors');
const axios = require('axios');
const admin = require('firebase-admin');
const app = express();

app.use(cors());
app.use(express.json());


const serviceAccount = require('./firebaseServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const paystackSecret = 'sk_live_xxxxxxxxxxxxxxxxxxxxx';


app.post('/api/initiate-payment', async (req, res) => {
  const { email, amount } = req.body;

  const paystackData = {
    email,
    amount: amount * 100, 
    currency: 'NGN',
  };

  try {
    const response = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      paystackData,
      {
        headers: {
          Authorization: `Bearer ${paystackSecret}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const { reference, authorization_url } = response.data.data;

 
    await db.collection('transactions').doc(reference).set({
      email,
      amount,
      reference,
      status: 'pending',
      date: new Date().toISOString()
    });

    res.json({ reference, authorization_url });

  } catch (error) {
    console.error('Payment Init Error:', error.message);
    res.status(500).json({ error: 'Failed to initialize payment' });
  }
});

fetch("http://localhost:5000/api/pay");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});


