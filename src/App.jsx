import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import RestaurantsCard from "./Component/RestaurantsCard";
import Categorycard from "./Component/Categorycard";
import RestaurantShimmer from "./Component/RestaurantShimmer";
import CategoryShimmer from "./Component/CategoryShimmer";
import Filtermodal from "./Component/Filtermodal";

function App() {
  const [category, setcategory] = useState([]);
  const [title, settitle] = useState(" ");
  const [restaurants, setrestaurants] = useState([]);
  const [filterArray, setfilterArray] = useState([]);
  const [isfilter, setisfilter] = useState(false);
  const [filtercategorydata, setfiltercategorydata] = useState({ })


  const datafetch = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4623019&lng=77.0409548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await response.json();

    setcategory(
      jsondata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    settitle(jsondata?.data?.cards[2]?.card?.card?.title);

    setrestaurants(
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterArray(
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfiltercategorydata(jsondata?.data?.cards[3]?.card?.card)
   console.log(jsondata?.data)
  };

  useEffect(() => {
    datafetch();
  }, []);

  const handlerating = () => {
    const filteredarray = restaurants.filter(
      (item) => item?.info?.avgRating >= 4
    );
    setfilterArray(filteredarray);
  };

  const handlePureveg = () => {
    const filterpureveg = restaurants.filter(
      (pureveg) => pureveg?.info?.veg === true
    );
    setfilterArray(filterpureveg);
  };
  const handleFastDelivery = () => {
    const filterFastDelivery = restaurants.filter((item) => {
      const deliveryTime = item?.info?.sla?.deliveryTime;
      return deliveryTime && deliveryTime < 40;
    });
    setfilterArray(filterFastDelivery);
  };

  const handlefiltermodal = () => {
    setisfilter(true);
  };

  const handle300600 = () => {
    const filter300600 = restaurants.filter((pricerange) => {
      const costForTwo = parseInt(pricerange?.info?.costForTwo.slice(1, 4), 10);
      return costForTwo >= 300 && costForTwo <= 600;
    });
    setfilterArray(filter300600);
  };

  return (
    <div className="relative h-full w-full">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <main
          onBlur={() => {
            setisfilter(false);
          }}
          className="max-w-[68rem] mx-auto "
        >
          <div className="max-w-[68rem] mx-auto flex flex-col items-start gap-4 ">
            <h1 className="text-2xl font-bold ">
              Laeba, {"what's"} on your mind?
            </h1>
            <div className="flex gap-3 overflow-x-auto max-w-[68rem] mx-auto ">
              {category && category.length > 0
                ? category.map((item, index) => (
                    <Categorycard
                      key={item?.id}
                      carditem={item}
                      url={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
                      }
                    />
                  ))
                : Array.from({ length: 19 }).map((index) => <CategoryShimmer key={index} />)}
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#94919127] mt-16 "></div>

          <div></div>

          <div className="mt-8 max-w-[68rem] mx-auto">
            <h1 className="text-2xl font-bold ">{title}</h1>
            <div className="flex w-full justify-between  gap-2 items-center overflow-x-auto overflow-y-hidden  mt-3 pt-5 ">
              <div
                onClick={handlefiltermodal}
                className="relative cursor-pointer flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0"
              >
                <h4>Filter</h4>
                <SlidersHorizontal className="h-4" />
              </div>

              <div className="flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0">
                <h4>Sort By</h4>
                <ChevronDown className="w-4" />{" "}
              </div>
              <div
                onClick={handleFastDelivery}
                className="flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0 cursor-pointer "
              >
                <h4>Fast Delivery</h4>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0">
                <h4>New on Siggy</h4>
              </div>

              <div
                onClick={handlerating}
                className="flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0 cursor-pointer"
              >
                <h4>Ratings 4.0+</h4>
              </div>

              <div
                onClick={handlePureveg}
                className="flex items-center cursor-pointer gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0"
              >
                <h4>Pure Veg</h4>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0">
                <h4>Offers</h4>
              </div>
              <div
                className="flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0 cursor-pointer"
                onClick={handle300600}
              >
                <h4>Rs. 300-Rs. 600</h4>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 border rounded-3xl border-slate-300 flex-shrink-0">
                <h4>Rs. 300-Rs. 600</h4>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4  pt-6 lg:grid-cols-4 lg:gap-8 my-6">
            {filterArray.length > 0
              ? filterArray.map((item, index) => (
                  <RestaurantsCard
                    key={item?.info?.id}
                    item={item}
                    url={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
                    }
                  />
                ))
              : Array.from({ length: 9 }).map((index) => <RestaurantShimmer />)}
          </div>
        </main>
      </div>


      {/* THIS IS FILTER MODAL */}
      {isfilter && (
        <div className="h-screen fixed top-0 left-0 w-screen  z-40 bg-[#292d37b5]">
          <div className="fixed z-50 top-[48%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            {isfilter ? <Filtermodal setisfilter={setisfilter} filtercategory={filtercategorydata} /> : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
