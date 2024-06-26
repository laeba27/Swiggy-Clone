
import { Search , ChevronDown , BadgePercent , LifeBuoy , User , ShoppingBag } from 'lucide-react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { useAppContext } from '../../utils/GlobalContext';

const Navbar = () => {

  const {user,cartitem} = useAppContext()
  
  return (
    <div className="py-5 px-8 flex items-center justify-between ">
    <div className='flex gap-6 items-center'>
    <div>
    <Link to='/' >
    <img className='h-14 w-14' src={logo} alt="" />
    </Link>
      
      </div>
      <div className='flex gap-3 items-center' >
        <h3 className='font-semibold underline underline-offset-8 text-sm'>Other </h3>
        <h3 className='font-light text-[#858691] text-sm'>Patel Nagar, Gurgaon, Haryana 122001</h3>
        <ChevronDown className='text-orange-500' />
      </div>
    </div>

    <div className='flex items-center gap-16 '>
        <div className='flex items-center gap-2 hover:text-orange-400  cursor-pointer '>
        <Search className='h-4 w-4' />
        <h3>Search</h3>
        </div>
        <div className='flex items-center gap-2  hover:text-orange-400 cursor-pointer '>
        <BadgePercent className='h-4 w-4' />
        <h3>Offers</h3>
        </div>
        {/* <div className='flex items-center gap-2  hover:text-orange-400  cursor-pointer '>
        <LifeBuoy className='h-4 w-4' />
        <h3>Cart</h3>
        </div> */}
        <div className='flex items-center gap-2  hover:text-orange-400 cursor-pointer  '>
        <User className='h-4 w-4' />
        <h3>{user}</h3>
        </div>
        <Link to="/cart" className='flex items-center gap-2  hover:text-orange-400 cursor-pointer '>
        <ShoppingBag className='h-4 w-4' />
        <div className='flex gap-2 items-center'>
        <h3 className=''>Carts</h3>
        <div className='   text items-center justify-center flex'>
        <div className='text-white bg-green-600  px-2 rounded-full  text-sm'>{cartitem.length>0? cartitem.length : ""}</div>
        </div>
        
        </div>
        
        </Link>
    </div>
      
    </div>
  )
}

export default Navbar
