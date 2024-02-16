import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Component/Navbar";
import { Star } from "lucide-react";
import { Clock8 } from "lucide-react";
import { BadgeIndianRupee } from "lucide-react";
import { BadgePercent } from "lucide-react";
import { ChevronDown } from "lucide-react";
import VarietyMenu from "../Component/VarietyMenu";
import { useAppContext } from '../../utils/GlobalContext'

const RestrauntMenu = () => {
  const { id } = useParams();
  const [restrauntmenu, setrestrauntmenu] = useState({});
  const [isloading, setisloading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(true); // Initialize with -1 to keep all sections open by default
 
  const { showVegOnly, toggleVeg } = useAppContext();

  const fetchmenu = async () => {
    setisloading(true);
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4829599&lng=76.9067451&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await res.json();
    setrestrauntmenu(data);
    
    setisloading(false);
    console.log(restrauntmenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  };

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index)); // Close if already open, otherwise open the clicked index
  };
  

  
  useEffect(() => {
    fetchmenu();
  }, []);

  if (isloading) {
    return <p>loading.......</p>;
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      {/* {restrauntmenu?.data?.cards[0]?.card?.card?.info?.name} */}
      <div className="px-64">
        <div className="">
          <div className="flex items-center gap-1">
            <h5 className="text-[0.65rem] text-gray-500  hover:text-black cursor-pointer">
              Home
            </h5>
            <h5 className="text-[0.65rem] text-gray-500">/</h5>
            <h5 className="text-[0.65rem] text-gray-500  hover:text-black cursor-pointer">
              {restrauntmenu?.data?.cards[0]?.card?.card?.info?.city}
            </h5>
            <h5 className="text-[0.65rem] text-gray-500">/</h5>
            <h5 className="text-[0.65rem]">KFC</h5>
          </div>
        </div>
        {/* first section */}
        <div className="">
          <div className="flex pt-8 border-b pb-5 border-dashed items-center justify-between">
            <div>
              <div>
                <h1 className="text-lg py-2 font-bold">
                  {restrauntmenu?.data?.cards[0]?.card?.card?.info?.name}
                </h1>
              </div>
              <div>
                <h1 className="text-xs font-light pb-2 text-[#5f5e5ed0]">
                  {
                    restrauntmenu?.data?.cards[0]?.card?.card?.info?.labels[2]
                      ?.message
                  }
                </h1>
                <h1 className="text-xs font-light text-[#5f5e5ed0]">
                  {restrauntmenu?.data?.cards[0]?.card?.card?.info?.areaName}
                </h1>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col border border-[#94919127] px-3 py-2 rounded-xl">
              <div className="pb-2 flex items-center ">
                <Star className="h-4  text-green-600" />
                <h1 className="  text-sm text-green-600 font-bold">
                  {
                    restrauntmenu?.data?.cards[0]?.card?.card?.info
                      ?.avgRatingString
                  }
                </h1>
              </div>
              <div className="h-[1px] w-full bg-[#94919127] "></div>
              <div className="pt-2">
                <h1 className="text-xs text-[#5f5e5ed0] py-2 tracking-[-0.07em]">
                  {
                    restrauntmenu?.data?.cards[0]?.card?.card?.info
                      ?.totalRatingsString
                  }
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div>
          <div className=" flex gap-6 py-5">
            <div className="flex gap-1 items-center">
              <Clock8 className="h-5" />
              <h3 className="font-extrabold">25 MINS</h3>
            </div>
            <div className="flex gap-1 items-center">
              <BadgeIndianRupee className="h-5" />
              <h3 className="font-extrabold">
                {
                  restrauntmenu?.data?.cards[0]?.card?.card?.info
                    ?.costForTwoMessage
                }
              </h3>
            </div>
          </div>

          {/* blocks in second section */}
          <div className="flex gap-5">
            {restrauntmenu?.data?.cards[0]?.card?.card?.info?.aggregatedDiscountInfo?.descriptionList.map(
              (item, index) => {
                return (
                  <div
                    key={index}
                    className="relative  flex items-center border  border-[#94919127] py-2 px-1 w-[300px] rounded-xl "
                  >
                    <div className="">
                      <h3 className=" text-[0.60rem] text-orange-600 transform rotate-90 md:-rotate-90">
                        FLAT DEAL
                      </h3>
                    </div>
                    <div className="w-[1px] h-14 bg-[#94919127] "></div>

                    <div className="pl-3 pr-10">
                      <div className="flex items-center gap-1 ">
                        <BadgePercent className="h-5" />
                        <h3 className="font-bold uppercase text-sm text-gray-600">
                          {item?.meta.split("|")[0]}
                        </h3>
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-xs tracking-tighter ">
                          {item?.meta.split("|")[1]}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>


{/* veg only toggle button */}

 
          <div  className="flex items-center gap-4 pt-10">
            <h3 className="font-semibold">Veg only</h3>
            <div id="app">
              <label className="checker">
              <input
              
            type="checkbox"
            className="checkbox"
            checked={showVegOnly}
                onChange={() => {}}
              />
             
                <div className="check-bg"></div>
                <div className="checkmark">
                  <svg viewBox="0 0 100 100">
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="15"
                      stroke="#FFF"
                      fill="none"
                      d="M20,55 L40,75 L77,27"
                    ></path>
                  </svg>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="h-[1px] my-8  w-full bg-[#94919127] "></div>

        <div className="w-full">
      

      {/* for accordion menu of the specifc category */}
      <div>
  {restrauntmenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((section, index) => (
    section?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && (
      <div key={index} className="mb-4">
        <div
          className={`w-full text-left p-4 flex justify-between outline-none transition duration-300`}
          onClick={() => toggleAccordion(index)}
        >
          <h1 className="text-lg font-bold">{section?.card?.card?.title}</h1>
          <button onClick={(e) => {
            toggleAccordion(index); // Toggle accordion state
          }}>
            <ChevronDown />
          </button>
        </div>
        { activeIndex === true && (
                  
          <div className="bg-white">
            <VarietyMenu
              item={section?.card?.card?.itemCards}
              url={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"}
            />
            
          </div>
            )}
      </div>
    )
  ))}
</div>

    </div>
 

      </div>
    </div>
  );
};

export default RestrauntMenu;
