import { useState } from 'react';

const SortComp = ({ item }) => {
  const [checkboxStates, setCheckboxStates] = useState(Array(item.sortConfigs.length).fill(false));

 

  const handleCheckboxChange = (index) => {
    setCheckboxStates((currentStates) => {
      const newStates = [...currentStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className='flex flex-col gap-3 p-5'>
      <div className='mx-4 '>
      <h5 className='text-base font-light py-3 text-gray-500'>SORT BY</h5>
        {item.sortConfigs.map((sortItem, index) => {
          return (
            <div key={index} className='flex items-center gap-2 '>
              <label
                className={checkboxStates[index]
                  ? 'custom-checkbox border-2 border-orange-500'
                  : 'custom-checkbox border-2 border-gray-500'}
              >
                <input
                  onChange={() => handleCheckboxChange(index)}
                  checked={checkboxStates[index]}
                  type='checkbox'
                  name=''
                  id={`checkbox-${index}`}
                />
                <div className='check-mark'></div>
              </label>
              <h5 className='text-base font-light py-3 text-gray-500'>{sortItem.title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortComp;
