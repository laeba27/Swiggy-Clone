
import { Search , ChevronDown , BadgePercent , LifeBuoy , User , ShoppingBag } from 'lucide-react';
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <div className="py-4 px-8 flex items-center justify-between ">
    <div className='flex gap-6 items-center'>
    <div>
      <img className='h-14 w-14' src={logo} alt="" />
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
        <div className='flex items-center gap-2  hover:text-orange-400  cursor-pointer '>
        <LifeBuoy className='h-4 w-4' />
        <h3>Cart</h3>
        </div>
        <div className='flex items-center gap-2  hover:text-orange-400 cursor-pointer  '>
        <User className='h-4 w-4' />
        <h3>Laeba</h3>
        </div>
        <div className='flex items-center gap-2  hover:text-orange-400 cursor-pointer '>
        <ShoppingBag className='h-4 w-4' />
        <h3>Cart</h3>
        </div>
    </div>
      
    </div>
  )
}

export default Navbar
