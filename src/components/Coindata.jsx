import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Coindata({id}) {
    const [coin,setcoin] = useState([]);
   
    const renderinfo =async()=>{
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=gecko_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`);
        setcoin(data)
    }
    useEffect(()=>{
        renderinfo()
    },[])

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const search=()=>{
      return coin.filter((coins)=>coins.name.toLowerCase().includes(id)||coins.symbol.toLowerCase().includes(id)||coins.id.toLowerCase().includes(id))
    }
    
  return (
    <div className='flex justify-center my-3'>
    {search().slice('0','1').map((value,index)=>{
      return(
            <div className='main-3 sml:flex-col' key={index}>
            <div className='flex flex-col'>
            <img className="h-auto w-12 mx-auto sml:w-28"
                src={value.image}
                alt="Your Company"/>
            <h2 className='text-2xl font-bold sml:mx-auto sml:text-3xl'>{value.name}</h2>
            </div>
            <div>
            <h2 className='text-xl sml:text-2xl'><span className='font-bold'>Ranking : </span>{value.market_cap_rank}</h2>
            <h2 className='text-xl sml:text-2xl'><span className='font-bold'>Current Price : </span>&#8377; {numberWithCommas(value.current_price)}</h2>
            </div>
            <div>
            <h2 className='text-xl sml:text-2xl'><span className='font-bold'>Market Cap : </span>&#8377; {numberWithCommas((value.market_cap/1000000).toFixed(0))}M</h2>
            <h2 className='text-xl sml:text-2xl'><span className='font-bold'>24 Change : </span><span className={value.price_change_percentage_24h>0?'text-[#11952e]':'text-[#f00f18]'}>{value.price_change_percentage_24h.toFixed(2)}%</span></h2>
            </div>
            <div>
            <h2 className='text-xl sml:text-2xl'><span className='font-bold'>24H High : </span>&#8377; {numberWithCommas(value.high_24h)}</h2>
            <h2 className='text-xl sml:text-2xl'><span className='font-bold'>24H Low : </span>&#8377; {numberWithCommas(value.low_24h)}</h2>
            </div>
            <h2 className='text-xl sml:text-2xl'><span className='font-bold'>Updated On : </span>{value.last_updated.slice(0,10)}</h2>
            </div>
            )
    })}
    </div>
  )
}
export default Coindata