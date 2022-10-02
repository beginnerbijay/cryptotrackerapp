import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

function Home() {
  const [coin,setCoin] = useState([])
  const [page,setPage] = useState(1)
  const [load, setload] = useState(false)
  const renderfun = async() =>{
    setload(false)
    const {data} = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=gecko_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h');
    setCoin(data.slice(((page-1)*10),(page)*10))
    setload(true)
  }
  const nav = useNavigate();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(()=>{
    renderfun()
  },[page])
  return (
    <>
    {load?
      (<div className='flex mt-12 justify-center'>
      <div className=''>
      <table className="table-fixed t-style sml:w-[100vw]">
    <thead className="bg-slate-800 text-white rounded-t-lg">
      <tr className='rounded-t-lg' >
        <th className='py-4 text-start pl-6 rounded-tl-lg'>Coin</th>
        <th className='sml:pl-9'>Price</th>
        <th>24h Change</th>
        <th className='rounded-tr-lg'>Market Cap</th>
      </tr>
    </thead>
    <tbody className="divide-y-2 divide-gray">
    {coin.map((value)=>{
      return (
        <tr key={value.id} className=' hover:bg-[#EBEDEF]' onClick={()=>nav(`/coin/${value.id}`)}>
        <td className='flex py-4 pl-4 sml:pl-2 sml:w-[5rem]'>
        <img
          className="block h-16 w-auto pr-6 sml:h-14 sml:pr-1"
          src={value.image}
          alt="Your Company"
        /><div className='flex flex-col'><p  className='mt-1 text-2xl font-semibold uppercase sml:text-lg'>{value.symbol}</p><p>{value.name}</p></div></td>
        <td className='text-center font-semibold sml:text-end'>&#8377; {numberWithCommas(value.current_price)}</td>
        <td className={value.price_change_percentage_24h>0?'text-center text-[#11952e]':'text-center text-[#f00f18]'}>{value.price_change_percentage_24h.toFixed(2)}%</td>
        <td className='text-center font-semibold'>&#8377; {value.market_cap > 1000000? (numberWithCommas((value.market_cap/1000000).toFixed(0))) + 'M':''}</td>
      </tr>
    )})}
    </tbody>
  </table>
  <Pagination page={page} setPage={setPage}/>                                                                                                                  
  </div>
  </div>):
  (<div className='flex justify-center items-center h-[84.2vh] sml:h-[88vh]'>
  <button type="button" className="flex w-48 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" disabled>
  <svg class="animate-spin h-5 w-5 mr-3 fill-white stroke-white" viewBox="0 0 24 24">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z" clipRule="evenodd" />
</svg></svg>
  Processing...
</button>
</div>)}
   </> 
  )
}

export default Home