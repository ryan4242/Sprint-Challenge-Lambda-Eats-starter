import React, {useState, useEffect} from 'react';
import './pizza.css';
import * as yup from 'yup';
import {Link} from 'react-router-dom';

const formSchema = yup.object().shape({
    name: yup.string().required('Must add name for order'),
    size: yup.mixed().oneOf(['small', 'medium', 'large'], 'Choose a size').required('Must specify size'),
    pep: yup.boolean(),
    olives: yup.boolean(),
    onion: yup.boolean(),
    jap: yup.boolean(),
    special: yup.string(),
})

const Pizza = ({order, setOrder}) => {
  

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [errors, setErrors] = useState({
    name: '',
    size: '',
    pep: '',
    olives: '',
    onion: '',
    jap: '',
    special: ''
  })

  useEffect(() => {
    formSchema.isValid(order).then(valid => {
      setButtonDisabled(!valid)
    })
  }, [order])

  const handleSubmit = e => {
    e.preventDefault();
  }

  const validateChange = e => {
    yup.reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    })
    .catch(err => {
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
      })
    })
  }

  const handleChange = e => {
    e.persist();
    validateChange(e);
    setOrder({...order, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value})
  }

  return (
    <div className='form-container'>
      <h3>Build your pizza</h3>
      <div className='img2-container'></div>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name' >Name:</label>
        <input id='name' data-cy='name' type='text' name='name' value={order.name} onChange={handleChange} />
        {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
        <label htmlFor='size'>Taco size</label>
        <select id='size' name='size' data-cy='size'  value={order.size} onChange={handleChange} >
            <option>-- selsect size--</option>
            <option value='small'>small</option>
            <option value='medium'>medium</option>
            <option value='large'>large</option>
          </select>
        {errors.size.length > 0 ? <p className='error'>{errors.size}</p> : null}
        <label htmlFor='pep'>
          <input id='pep' data-cy='pep' type='checkbox' name='pep' checked={order.pep} onChange={handleChange} />
          Pepperoni
        </label>
        <label htmlFor='olives'>
          <input id='olives' data-cy='olives' type='checkbox' name='olives' checked={order.olives} onChange={handleChange} />
          Olives
        </label>
        <label htmlFor='onion'>
          <input id='onion' data-cy='onion' type='checkbox' name='onion' checked={order.onion} onChange={handleChange} />
          Onion 
        </label>
        <label htmlFor='jap'>
          <input id='jap' data-cy='jap' type='checkbox' name='jap' checked={order.jap} onChange={handleChange} />
          Jalepeno
        </label>
        <label htmlFor='special'>Special instructions:</label>
        <textarea id='special' data-cy='special' name='special' value={order.special} onChange={handleChange} />
        <Link to='/success'><button data-cy='submit' type='submit' disabled={buttonDisabled}>Place Order!</button></Link>
      </form>
    </div>
    
  )
}

export default Pizza;