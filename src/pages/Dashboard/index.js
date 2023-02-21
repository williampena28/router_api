import React, { useEffect, useState} from 'react'
import './index.css'
import stocks from './../../data.js'

const Dashboard = () => {

  // make an empty array where we'll put our stock data with useState
  const [stocksList, setStockList] = useState([])

  // set the stockLists array with useEffect
  useEffect(() =>
  {
    setStockList(stocks);
  }, [])

  // return the stockList data as JSX
  const stockListJSX = stocksList.map((stock, index) =>
  {
    return(
      <div className='stock' key={index}>
        <section className='sectionLine'>
          <p>{JSON.stringify(stock)}</p>
        </section>
      </div>
    )
  })

  return (
    <div>
      <h1>Dashboard</h1>
      {stockListJSX}
    </div>

  )
}

export default Dashboard