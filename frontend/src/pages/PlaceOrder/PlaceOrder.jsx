import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const { getTotalCartAmount, token, foodList, cartItems, url } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const handleOnchange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrder  = async (e) =>{
    e.preventDefault()
    let orderItems =[];
    foodList.map((item)=>{
      if (cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo['quantity'] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount: getTotalCartAmount()+2,
    }
    let response = await axios.post(url+'/api/order/place',orderData,{headers:{token}})
    if(response.data.success){
      const session_url = response.data.session;
      
      window.location.replace(session_url)
    }
    else{
      alert('error')
    }
  }

  const navigate = useNavigate()
  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }else if(getTotalCartAmount() === 0){
      navigate('/cart')
    }
  },[token])
  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input required type="text" name='firstName' value={data.firstName} onChange={handleOnchange} placeholder='First Name' />
          <input required type="text" name='lastName' value={data.lastName} onChange={handleOnchange} placeholder='Last Name' />
        </div>
        <input required type="text" name='email' value={data.email} onChange={handleOnchange} placeholder='Email Address' />
        <input required type="text" name='street' value={data.street} onChange={handleOnchange} placeholder='Street' />
        <div className="multi-fields">
          <input required type="text" name='city' value={data.city} onChange={handleOnchange} placeholder='City' />
          <input required type="text" name='state' value={data.state} onChange={handleOnchange} placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required type="text" name='zipcode' value={data.zipcode} onChange={handleOnchange} placeholder='Zip Code' />
          <input required type="text" name='country' value={data.country} onChange={handleOnchange} placeholder='Country' />
        </div>
        <input required type="text" name='phone' value={data.phone} onChange={handleOnchange} placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() == 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
