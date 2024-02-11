import { DotSquare, Plus } from 'lucide-react';
import { IndianRupee } from 'lucide-react';
import { useEffect } from 'react';
import { useAppContext } from '../../utils/GlobalContext';

const VarietyMenu = ({item,url}) => {

  const {addItem} = useAppContext()

    useEffect(() => {
        console.log(item,"item");
    }, [])
    

   
    return (
      <div>
        {item?.map((i, index) => {
          return (
            <div  key={index} className='py-4'>
            <div className='py-4 flex items-center justify-between gap-6'>
            <div>
            {i.card.info.itemAttribute.vegClassifier === 'NONVEG'? <DotSquare className='text-red-700'/> : <DotSquare className='text-green-700'/> }
            
            
            <div>{i.card.info.name}</div>
            <div className='flex items-center'><IndianRupee className='h-3' />
             <h4>{(i.card.info.defaultPrice)/100 || (i.card.info.price)/100}</h4></div>
             <p>
  {i.card.info.description.length > 100 ? 
    `${i.card.info.description.slice(0, 100)}...` :
    i.card.info.description
  }
</p>
            </div>
            <div className='h-[120px] w-[150px] rounded-2xl relative'>
                <img className='h-full w-full object-cover rounded-2xl'
                 src={url + i?.card?.info?.imageId} alt="" />
                 <button onClick={()=>addItem(i)} className='absolute bottom-[-10px] w-[80px] left-1/2
                  translate-x-[-50%] p-2 flex items-center justify-center gap-4 hover:bg-gray-40 bg-gray-100 text-green-500 text-sm rounded-md capitalize'> add  
                  <Plus  className="h-[15px] w-[15px]"/></button>
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
  