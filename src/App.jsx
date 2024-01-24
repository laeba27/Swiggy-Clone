import { SlidersHorizontal, ChevronDown, Star } from 'lucide-react';
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
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4623019&lng=77.0409548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const jsondata = await response.json()

    setcategory(jsondata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    settitle(jsondata?.data?.cards[1]?.card?.card?.title)

    setrestaurants(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilterArray(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }

  useEffect(() => {
    datafetch()
  }, [])

  const handlerating = () => {
    const filteredarray = restaurants.filter((item) => item?.info?.avgRating >= 4)
    setfilterArray(filteredarray)
  }

  const handlePureveg = () => {
    const filterpureveg = restaurants.filter((pureveg) => pureveg?.info?.veg === true)
    setfilterArray(filterpureveg)
  }
  const handleFastDelivery = () => {
    const filterFastDelivery = restaurants.filter((item) => {
      const deliveryTime = item?.info?.sla?.deliveryTime;
      return deliveryTime && deliveryTime < 20;
    });
    setfilterArray(filterFastDelivery);
  };
  const handle300600 = () => {
    const filter300600 = restaurants.filter((pricerange) => {
      const costForTwo = parseInt(pricerange?.info?.costForTwo.slice(1, 4), 10);
      return costForTwo >= 300 && costForTwo <= 600;
    });
    setfilterArray(filter300600);
  };
  

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <main className='max-w-[68rem] mx-auto '>
        <div className='max-w-[68rem] mx-auto flex flex-col items-start gap-4 '>
          <h1 className='text-2xl font-bold '>Laeba, {"what's"} on your mind?</h1>
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

<div className='h-[1px] w-full bg-[#94919127] mt-16 '></div>

         <div>

         </div>


        <div className='mt-8 max-w-[68rem] mx-auto'>
          <h1 className='text-2xl font-bold '>{title}</h1>
          <div className='flex w-full justify-between  gap-3 items-center overflow-x-auto overflow-y-hidden  mt-3 pt-5 '>

            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Filter</h4> <SlidersHorizontal className='h-4' /> </div>
            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Sort By</h4><ChevronDown className='w-4' /> </div>
            <div onClick={handleFastDelivery} className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0 cursor-pointer '><h4>Fast Delivery</h4></div>
            <div  className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>New on Siggy</h4></div>

            <div onClick={handlerating} className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0 cursor-pointer' >
              <h4>Ratings 4.0+</h4>
            </div>

            <div onClick={handlePureveg} className='flex items-center cursor-pointer gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Pure Veg</h4></div>
            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Offers</h4></div>
            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0 cursor-pointer'
            onClick={handle300600}
            ><h4>Rs. 300-Rs. 600</h4></div>
            <div className='flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0'><h4>Rs. 300-Rs. 600</h4></div>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4  pt-6 lg:grid-cols-4 lg:gap-20 my-6'>
          {filterArray.map((item, index) => {
            return (
              <div className='w-[248px] ' key={item?.info?.id}>
                
                
                <div className='relative'>
                  <img className='h-[161px] w-[248px]  rounded-2xl object-cover' src={cloudaniryurl + item?.info?.cloudinaryImageId} alt="" />
                  <h3 className='absolute z-20 bottom-0 w-full text-lg mb-2 text-center font-extrabold text-white'>{item?.info?.aggregatedDiscountInfoV3 &&  (item?.info?.aggregatedDiscountInfoV3?.header + " " + item?.info?.aggregatedDiscountInfoV3?.subHeader)}</h3>
                  <div className='absolute bottom-0 rounded-2xl bg-gradient-to-t from-[#000000] to-[#ffffff00] h-[90px] w-[248px] '></div>
               </div>
                
                
                <div className='px-3'>
                  <h3 className='font-bold text-lg'>{item?.info?.name}</h3>
                  <div className='flex' >
                    <div className='flex gap-1 items-center'><div className='bg-green-700 flex items-center rounded-full h-5 w-5'><Star className='h-3 text-white text-center ' /></div><h3 className='font-semibold text-base' >{item?.info?.avgRating} </h3></div>
                    <div><h3 className='font-semibold text-base'> . {item?.info?.sla?.deliveryTime} mins</h3></div>
                  </div>
                  <h3 className='text-gray-600 font-light'> {item?.info?.cuisines.length > 2
                    ? item.info.cuisines.slice(0, 2).join(", ") + " ..."
                    : item.info.cuisines.join(", ")}</h3>
                  <h3 className='text-gray-600 font-light'>{item?.info?.areaName}</h3>
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
