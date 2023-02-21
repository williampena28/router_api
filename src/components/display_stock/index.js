import React, { useState, useEffect } from 'react'
import stocks from './../../data.js'
// useParams hook to get the param data from the url
import { useParams } from 'react-router-dom';

const DisplayStock = () => {

  // put symbol data into symbolId from the url
  let symbolId = useParams();

  const [stocksList, setStockList] = useState([])

  useEffect(() =>
  {
    setStockList(stocks);
  }, [])

  const stockDataJSX = stocksList.map((stock, index) =>
  {
    if(stock.symbol == symbolId.symbol)
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
    <div>{stockDataJSX}</div>
  )
}

export default DisplayStock