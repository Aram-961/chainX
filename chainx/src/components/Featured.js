import React, { useState, useEffect } from 'react'
import './Featured.css'
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import axios from 'axios';

const Featured = () => {
    const [data, setData] = useState(null)
    // API Link
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    console.log(data);
    if (!data) return null;

    return (
        <div className='Featured'>
            <div className="container">
                <div className="left">
                    <h2>Explore top Crypto's like bitcoin, ethereum, and Solana</h2>
                    <p>See All available assets: cyrptocurrency</p>
                    <button className="btn">See More Coins</button>
                </div>
                <div className="right">
                    <div className="top">
                        {/* <img src={BTC} alt="bitcoin.png" /> */}
                        <img src={data[0].image} alt="" />
                    </div>
                    <div>
                        <h5>{data[0].name}</h5>
                        <p>${data[0].current_price}</p>
                    </div>
                    {data[0].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownRight />
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight />
                            {data[0].price_change_percentage_24h}%
                        </span>
                    )}
                </div>1
            </div>

        </div>
    )
}

export default Featured