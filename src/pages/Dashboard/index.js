import React, { useEffect, useState } from 'react'
import './index.css'
import stocks from './../../data.js'

const Dashboard = () => {

  // make an empty array where we'll put our stock data with useState
  const [stocksList, setStockList] = useState([]);

  // set the stockLists array with useEffect
  useEffect(() =>
  {
    setStockList(stocks);
  }, [])

  // return the stockList data as JSX
  // const stockListJSX = stocksList.map((stock, index) =>
  // {
  //   return(
  //     <div className='stock' key={index}>
  //       <section className='sectionLine'>
  //         <p>Company Name:{stock.name} {stock.symbol} Price:{stock.price} Change:{stock.change}</p>
  //       </section>
  //     </div>
  //   )
  // })

  const stockNameJSX = stocksList.map((stock, index) =>
  {
    return(
      <div className='stock-name-container' key={index}>
        <p>{stock.name} {stock.symbol}</p>
      </div>
    )
  })
  const stockPriceJSX = stocksList.map((stock, index) =>
  {
    return(
      <div className='stock-price' key={index}>
        <p>{stock.lastPrice}</p>
      </div>
    )
  })
  const stockChangeJSX = stocksList.map((stock, index) =>
  {
    return(
      <div className='stock-change' key={index}>
        <p>{stock.change}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>Dashboard</h1>
      <div className='stock-container'>
        <div className='stock-name'><h3>Company Name</h3>{stockNameJSX}</div>
        <div className='stock-price'><h3>Last price</h3>{stockPriceJSX}</div>
        <div className='stock-change'><h3>Change</h3>{stockChangeJSX}</div>
      </div>
    </div>

  )
}

export default Dashboard