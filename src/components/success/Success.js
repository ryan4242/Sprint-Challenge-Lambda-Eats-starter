import React from 'react';
import './success.css'

const Success = ({order}) => {
  return (
  <div className='success-container'>
    <h3>Huzzah!</h3>
  <p>{order.name}, your {order.size} pizza is on the way!</p>
  {order.special.length > 0 ? (<p>Dont worry we wont forget your special instructions: {order.special}</p>) : null}
  </div>
  )
}

export default Success;