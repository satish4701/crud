import React, { useContext, useState } from 'react'
import Counter from '../Context/CounterContext'

const Shop = () => {
    const CounterVal = useContext(Counter);
  return (
    <div>
     <button className="btn btn-danger">{CounterVal}</button>
    </div>
  )
}

export default Shop
