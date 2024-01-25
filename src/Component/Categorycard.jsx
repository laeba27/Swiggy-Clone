

const Categorycard = ({url, carditem}) => {
  return (
  
    <div className='flex-shrink-0 ' >
                    <div>
                      <img className='h-40 w-40 object-cover' src={url + carditem.imageId} alt="" />
                    </div>

                  </div>
  
       
  
  )
}

export default Categorycard
