import React from 'react';
import axios from 'axios';

const Donate = () => {
  const BACKEND_URL = "https://webify-backend-hnli.onrender.com";
  const checkoutHandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const amount = parseInt(e.target.amount.value);
    let key = "";
    await axios.get(`${BACKEND_URL}/getkey`)
    .then(response => {
      key = response.data.key;
    })
    .catch(error => {
      // Error handling
      console.error('Error occurred: ', error);
    });
    await axios.post(`${BACKEND_URL}/checkout`, { amount })
    .then(response => {
      const order = response.data.order;
      const options = {
        key, 
        amount : amount,
        currency: "INR", 
        name: "Siddhant Baranwal", 
        description: "Razorpay class Sid",
        image: "https://media.licdn.com/dms/image/D5603AQEb6-C_SoOGEA/profile-displayphoto-shrink_400_400/0/1702959793761?e=1718236800&v=beta&t=3vgmBIpPOpmLUUTDaW1kRSn-_x-lnENDcAIxCW1I-TU",
        order_id : order.id,
        callback_url: `${BACKEND_URL}/paymentverification`,
        prefill: {
          name: name, 
          email: "gaurav.kumar@example.com",
          contact: "3996356334"
        },
        notes: {
          "address": "RazorPay Corporate Office"
        },
        theme:{
          "color": "#121212"
        }
      };
      const razor = new window.Razorpay(options);
      razor.open();
    })
    .catch(error => {
      // Error handling 
      console.error('Error occurred: ', error);
    })
  }
  return (
    <div>
      <form onSubmit={checkoutHandler}>
        <input type="text" name="name" id="name" />
        <input type="number" name="amount" id="amount" />
        <button type="submit">Donate</button>
      </form>
    </div>
  )
}

export default Donate
