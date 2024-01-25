import { Star } from "lucide-react"

const RestaurantsCard = ({url, item}) => {
  return (
    <div>
      <div className='w-[248px] '>
                
                
                <div className='relative'>
                  <img className='h-[161px] w-[248px]  rounded-2xl object-cover' src={url + item?.info?.cloudinaryImageId} alt="" />
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
    </div>
  )
}

export default RestaurantsCard
