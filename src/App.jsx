
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Component/Navbar'

function App() {
  const [category, setcategory] = useState([])
  const [title, settitle] = useState(" ")
  const [restaurants, setrestaurants] = useState([])
const [filterArray, setfilterArray] = useState([])
  const cloudaniryurl = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

  const datafetch = async () => {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4829599&lng=76.9067451&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const jsondata = await response.json()

    setcategory(jsondata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    settitle(jsondata?.data?.cards[1]?.card?.card?.title)
    
    setrestaurants(jsondata?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilterArray(jsondata?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(jsondata?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }

  useEffect(() => {
    datafetch()
  }, [])

  const handlerating =()=>{
    const filteredarray = restaurants.filter((item)=> item?.info?.avgRating >= 4 )
    setfilterArray(filteredarray)
  }

  const handlePureveg =()=>{
   const filterpureveg = restaurants.filter((pureveg)=> pureveg?.info?.veg===true)
   setfilterArray(filterpureveg)
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <main className='max-w-5xl mx-auto'>
        <div className='max-w-5xl mx-auto flex flex-col items-start gap-4 '>
          <h1 className='text-2xl font-bold px-6'>Laeba, {"what's"} on your mind?</h1>
          <div className='flex gap-3 overflow-x-auto'>
            {
              category.map((item) => {
                return (
                  <div key={item.id} className='flex-shrink-0' >
                    <div>
                      <img className='h-40 w-40 object-cover' src={cloudaniryurl + item.imageId} alt="" />
                    </div>

                  </div>
                )
              })
            }
          </div>

        </div>

        <div className='mt-16'>
          <h1 className='text-2xl font-bold px-6 '>{title}</h1>
          <div className='flex w-full justify-between  gap-3 items-center overflow-x-auto overflow-y-hidden pl-5 mt-3 '>

            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Filter</h4></div>

            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Sort By</h4></div>

            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Fast Delivery</h4></div>

            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>New on Siggy</h4></div>

            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0 cursor-pointer' onClick={handlerating}>
              <h4>Ratings 4.0+</h4>
            </div>

            <div onClick={handlePureveg} className='flex items-center cursor-pointer gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Pure Veg</h4></div>
            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Offers</h4></div>
            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Rs. 300-Rs. 600</h4></div>
            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Rs. 300-Rs. 600</h4></div>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4  lg:grid-cols-4 lg:gap-20 my-6'>
          {filterArray.map((item, index) => {
            return (
              <div className='w-[198px]' key={item?.info?.id}>
                <div className='relative'>
                  <img className='h-[131px] w-[198px] rounded-2xl object-cover' src={cloudaniryurl + item?.info?.cloudinaryImageId} alt="" />
                  <h3 className='absolute z-20 bottom-0 w-full text-center font-semibold text-white'>{item?.info?.aggregatedDiscountInfoV3?.header + " " + item?.info?.aggregatedDiscountInfoV3?.subHeader}</h3>
                  <div className='absolute bottom-0 rounded-2xl bg-gradient-to-t from-[#000000] to-[#ffffff00] h-[90px] w-[198px] '></div>
                </div>
                <div>
                  <h3>{item?.info?.name}</h3>
                  <div className='flex' >
                    <div><h3>{item?.info?.avgRating} </h3></div>
                    <div><h3> . {item?.info?.sla?.deliveryTime} mins</h3></div>
                  </div>
                  <h3>{item?.info?.cuisines.join(" , ")}</h3>
                  <h3>{item?.info?.areaName}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default App
