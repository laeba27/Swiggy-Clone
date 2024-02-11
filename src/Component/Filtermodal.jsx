import { X } from "lucide-react";
import { useState } from "react";
import SortComp from "./Sort";
import DeliveryComp from "./DeliveryComp";
import CusiniesComp from "./Cusinies";
import ExploreComp from "./Explore";
import RatingComp from "./RatingComp";
import Veg from "./Veg";
import Offers from "./Offers";
import CostForTwo from "./CostForTwo";
import "../App.css"
const Filtermodal = (props) => {

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filtersort, setfiltersort] = useState("sort")
  
  if (!props.filtercategory) {
    return null; // or render a loading state or handle accordingly
  }
console.log(props.filtercategory);
 
 
 const clearFilters = () => {
  setSelectedFilters([]);
};

 const activelink =(link)=>{
  setfiltersort(link)
  
 }

  
  return (
    <div className="h-[455px]  w-[720px] bg-white z-40  rounded-2xl overflow-hidden relative">
      <div className=" h-[455px]  w-[720px] bg-white z-40  rounded-2xl overflow-hidden ">
      <div className="flex justify-between h-[55px] items-center px-4">
        <h1 className="text-2xl font-bold">Filter</h1>
        <div
          onClick={() => {
            props.setisfilter(false);
          }}
          className="p-1 rounded-full bg-gray-50 shadow-lg"
        >
          <X className=" text-gray-500" />
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#94919127]  "></div>
      <div className="flex overflow-hidden h-full w-full ">
        <div className="flex flex-col  h-[400px]  overflow-y-auto overflow-x-hidden w-[250px]">
        <div className="flex items-center">
        <h1 onClick={()=>activelink("sort")} className={ filtersort === "sort" ? "text-lg px-8 py-3 font-medium text-orange-600 cursor-pointer border-l-4 border-orange-600" : "text-lg px-8 py-3 font-medium hover:text-orange-600 cursor-pointer"}>Sort</h1>
        </div>
        
        {props.filtercategory?.facetList && props.filtercategory?.facetList.map((item, index) => {
            return (
              <div  onClick={()=>activelink(item?.id)} key={index} className="cursor-pointer">
                <h1 className={ filtersort === item.id ? "text-lg border-l-4  border-orange-600 px-8 py-3 font-medium text-orange-600" : "text-lg px-8 py-3 font-medium hover:text-orange-600"}>
                {item?.label}</h1>
              </div>
            );
          })}
        </div>
        <div className="w-[1px] h-full bg-[#94919127]  "></div>
        <div>
        {(() => {
    switch (filtersort) {
      case "sort":
        return <SortComp item={props.filtercategory} />;
      case "deliveryTime":
        return <DeliveryComp  />;
      case "catalog_cuisines":
        return <CusiniesComp item={props.filtercategory} />;
        case "explore":
        return <ExploreComp/>;
        case "rating":
        return <RatingComp/>;
        case "isVeg":
        return <Veg/>;
        case "restaurantOfferMultiTd":
        return <Offers/>;
        case "costForTwo":
        return <CostForTwo/>;
      default:
        return null;
    }})()}
        </div>
      </div>
      
    </div>
    <div className="  h-[60px] w-full z-20 absolute bottom-0 shadow-custom flex items-center gap-20 justify-end px-3"> 
    <div onClick={clearFilters} className="text-xl text-orange-600 cursor-pointer font-medium">Clear Filter</div>
    <div className=" py-2">
    <button className="bg-orange-600 text-white font-light text-xl px-16 py-2 rounded-xl cursor-pointer  ">Apply </button>
    </div>
    </div>
    </div>
    
  );
};

export default Filtermodal;
