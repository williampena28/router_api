import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import stocks from './../../data.js'

const DisplayStock = (props) => {

  // declare navigate
  const navigate = useNavigate();

  const [stocksList, setStockList] = useState([])

  useEffect(() =>
  {
    setStockList(stocks);
  }, [])

  const stockDataJSX = stocksList.map((stock, index) =>
  {
    if(stock.name === props.name)
    {
      return(
        <div className='stock-container' key={index}>
          <p>{JSON.stringify(stock)}</p>
        </div>
      )
    }
  })

  // console.log(stocksList);

  return (
    <div>DisplayStock</div>
  )
}

export default DisplayStock