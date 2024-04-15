import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Blob from './Blob';

const Donate = () => {
  const [load, setLoad] = useState(false);
  const BACKEND_URL = "https://webify-backend-hnli.onrender.com";
  const navigate = useNavigate();
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
      navigate('/result/0');
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
      navigate('/result/0');
    })
    setLoad(true);
  }
  return (
    <div>
      {!load && <Navbar title = "Donate and help us grow faster!"/>}
      {!load && <form className='form' onSubmit={checkoutHandler}>
        <div>
        <span>Name: </span>
        <input type="text" name="name" id="name" />
        </div>
        <div>
        <span>Amount: </span>
        <input type="number" name="amount" id="amount" />
        </div>
        <button type="submit">Donate</button>
      </form>}
      {load && <div className='loader'>
        <img src="/otherImages/loading.gif" alt="Loading..." />
      </div>}
      {!load && <Blob/>}
    </div>
  )
}

export default Donate
