
import { useState , useEffect } from 'react'
import './App.css'
import Navbar from './Component/Navbar'

function App() {
const [fooddata, setfooddata] = useState([ ])
const [category, setcategory] = useState([ ])

const datafetch = async()=>{
  const response = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=28.4549833&lng=77.0387868')
  const jsondata = await response.json()
  console.log(jsondata?.data?.success?.cards[0]?.gridWidget?.gridElements?.infoWithStyle?.info)
  setcategory(jsondata?.data?.success?.cards[0]?.gridWidget?.gridElements?.infoWithStyle?.info)
}

useEffect(() => {
datafetch()
}, [])




  return (
 <div className='max-w-7xl mx-auto'>
  <Navbar/>
  
  <div></div>
 </div>
  )
}

export default App
