

const DeliveryComp = () => {
  
  return (
    <div className="mx-10">
    <h5 className="text-base font-light py-3 text-gray-500">FILTER BY</h5>
      <div  className='flex items-center gap-2 '>
      
              <label
                className='custom-checkbox border-2 border-gray-500'
              >
                <input
                
                  type='checkbox'
                  name=''
                />
                <div className='check-mark'></div>
              </label>
              <h5 className='text-base font-light py-3 text-gray-500'>Fast Delivery</h5>
            </div>
    </div>
  )
}

export default DeliveryComp
