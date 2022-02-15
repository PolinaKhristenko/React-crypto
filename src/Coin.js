import React from 'react'
import './Coin.css';

const Coin = ({ name, image, symbol, price, priceChange, marketcap, volume }) => {
  return (
    <div className='coin__container'>
        <div className='coin__item'>
            <div className='coin'>
                <img src={image} alt="crypto" />
                <h2 className='coin__name'>{name}</h2>
                <p className='coin__symbol'>{symbol}</p>
            </div>
            <div className='coin__data'>
                <p className='coin__price'>${price}</p>
                <p className='coin__volume'>${volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                <p className='coin__percent green'>{priceChange.toFixed(2)}%</p>
                ) : (<p className='coin__percent red'>{priceChange.toFixed(2)}%</p>)
                }
                <p className='coin__marketcap'>Mkt Cap: ${marketcap.toLocaleString()}</p>
            </div>
        </div>
    </div>
  )
}

export default Coin;