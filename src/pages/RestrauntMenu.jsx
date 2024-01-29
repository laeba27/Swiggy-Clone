import {useEffect} from 'react'
import {useParams} from "react-router-dom"
import { useState } from 'react';

const RestrauntMenu = () => {

  const { id } = useParams();
  const [restrauntmenu, setrestrauntmenu] = useState({})
  const [isloading, setisloading] = useState(true)

  const fetchmenu =async()=>{
    setisloading(true)
const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4829599&lng=76.9067451&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
const data = await res.json()
console.log(data);
setrestrauntmenu(data)
setisloading(false)
  }

  useEffect(() => {
    fetchmenu()
  }, [])
  
  if (isloading) {
    return(
      <p>loading.......</p>
    )
  }
  return (
    <div>
      {restrauntmenu?.data?.cards[0]?.card?.card?.info?.name}
    </div>
  )
}

export default RestrauntMenu
