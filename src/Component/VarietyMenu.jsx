import { DotSquare, Plus } from 'lucide-react';
import { IndianRupee } from 'lucide-react';
import { useEffect } from 'react';
import { useAppContext } from '../../utils/GlobalContext';


const VarietyMenu = ({ item, url,}) => {
  

  

  const { showVegOnly } = useAppContext(); // Accessing state from global context
  const { addItem } = useAppContext(); // Accessing function from global context
    useEffect(() => {
        console.log(item);
    }, [])
    

   
    return (
      <div>
        {item?.map((i, index) => {
          if (showVegOnly && !i.card.info.isVeg) {
          return null;
        }
          return (
            <div  key={index} className='py-4'>
            <div className='py-4 flex items-center justify-between gap-6'>
            <div >

       
            {i.card.info.isVeg ? <DotSquare className='text-red-700'/> : <DotSquare className='text-green-700'/> }
            
            
            <h3 className='font-medium'>{i.card.info.name}</h3>
            <div>
            <div className='flex items-center'><IndianRupee className='h-3 w-4' />
             <h4 className='text-sm'>{(i.card.info.defaultPrice)/100 || (i.card.info.price)/100}</h4>
             </div>
             <div>
              <h3>{i.card.info.defaultPrice}</h3>
             </div>
            </div>
            
             <p className='text-sm font-thin text-gray-600 pt-4'>
  {i.card.info.description.length > 100 ? 
    `${i.card.info.description.slice(0, 100)}...` :
    i.card.info.description
  }
</p>
            </div>
            <div className='h-[120px] w-[150px] rounded-2xl relative'>
                <img className='h-full w-full object-cover rounded-2xl'
                 src={url + i?.card?.info?.imageId} alt="" />
                 <div></div>
                 <div onClick={()=>addItem(i)} className='absolute bottom-[-10px] w-[100px] left-1/2
                  translate-x-[-50%] p-2 flex items-center justify-center gap-4 hover:bg-gray-40 text-gray-100 bg-green-500 text-sm rounded-md capitalize'> 
                  <h3>Add</h3>
                  <div onClick={()=>handleAdd(item)}>
                  <Plus  className="h-[20px] w-[20px]"/>
                  </div>
                 
                  </div>
            </div>
            </div>
            <div className="h-[1px] w-full bg-[#94919127] "></div>
            </div>
            
          );
        })}
      </div>
    );
  };
  
  export default VarietyMenu;
  