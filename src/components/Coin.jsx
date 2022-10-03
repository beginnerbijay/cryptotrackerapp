import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import Error from './Error';
import Coindata from './Coindata';

function Coin() {
  const {id} = useParams();
  const [coin,setCoin] = useState([]);
  const [days,setDays] = useState(1);
  const [datas, setDatas] = useState(false);
  const singlecoindata=async()=>{
    try{const {data} =await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=INR&days=${days}`);
    setCoin(data.prices);
    setDatas(true)
    }catch(e){
    setDatas(false)
    }
   }
  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  useEffect(()=>{
    singlecoindata()
  },[days,id])
  return (
    <>
     
      {datas?(
        <div className='w-full'>
        <Coindata id={id}/>
        <div className='w-[70vw] mx-auto sml:w-[95vw] s:w-[95vw]'>
      <Line
        data={{
          labels:coin.map((value)=>{
            let date = new Date(value[0]);
            let time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                    return days === 1 ? time : date.toLocaleDateString();
          }),
          datasets: [
                    {
                      data:coin.map((value) =>value[1]),
                      label: `Price ( Past ${days} Days ) in INR`,
                      borderColor: "#6366f1",
                    }
                  ]
                  
        }}
        options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
      />
      <div className='main-4 s:justify-around'>
      <button className="flex w-56 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sml:w-24 s:w-16 s:px:1 s:py-1"
      onClick={()=>setDays(1)}>
            <span className='s:text-[12px]'>24 Hours</span>
          </button>
      <button className="flex w-56 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sml:w-24 s:w-16 s:px:1 s:py-1"
      onClick={()=>setDays(30)}>
            <span className='s:text-[12px]'>30 Days</span>
          </button>
      <button className="flex w-56 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sml:w-24 s:w-16 s:px:1 s:py-1"
      onClick={()=>setDays(180)}>
            <span className='s:text-[12px]'>6 Months</span>
          </button>
      <button className="flex w-56 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sml:w-24 s:w-16 s:px:1 s:py-1"
      onClick={()=>setDays(365)}>
            <span className='s:text-[12px]'>1 Year</span>
          </button>
          </div>
      </div>
       
        </div>
      ):(<Error/>)}
    </>
  )
}

export default Coin