import { X } from "lucide-react";

const Filtermodal = (props) => {
  if (!props.filtercategory) {
    return null; // or render a loading state or handle accordingly
  }


  return (
    <div className="h-[455px]  w-[720px] bg-white z-40  rounded-2xl overflow-hidden ">
      <div className="flex justify-between p-5">
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
        <div className="h-14 w-[6px] rounded-e-xl bg-orange-600"></div>
        <h1 className="text-xl px-8 py-1 font-medium">Sort</h1>
        </div>
        
        {props.filtercategory?.facetList && props.filtercategory?.facetList.map((item, index) => {
            return (
              <div key={index}>
                <h1 className="text-lg px-8 py-4 font-medium">{item?.label}</h1>
              </div>
            );
          })}
        </div>

        <div className="w-[1px] h-full bg-[#94919127]  "></div>
      </div>
    </div>
  );
};

export default Filtermodal;
