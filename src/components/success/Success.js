import React from 'react';
import './success.css'

const Success = ({order}) => {
  return (
  <div className='success-container'>
    <h3>Huzzah!</h3>
  <p>{order[0].name}, your pizza is on the way!</p>
  {order.map(pie => <p>One {pie.size} Pizza</p>)}
  {order[0].special.length > 0 ? (<p>Dont worry we wont forget your special instructions: {order[0].special}</p>) : null}
  </div>
  )
}

export default Success;