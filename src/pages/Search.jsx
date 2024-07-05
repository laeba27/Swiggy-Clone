import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        try {
          const response = await fetch(
            `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=21.99740&lng=79.00110&str=${searchTerm}&trackingId=null`
          );
          const data = await response.json();
          console.log(data);
          setResults(data.data.suggestions); // Adjust based on the actual structure of your API response
        } catch (error) {
          console.error('Error fetching the data', error);
        }
      }
    };

    const debounceFetchData = debounce(fetchData, 300);
    debounceFetchData();

    return () => {
      debounceFetchData.cancel();
    };
  }, [searchTerm]);

  function debounce(func, wait) {
    let timeout;
    const debounced = (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
    debounced.cancel = () => clearTimeout(timeout);
    return debounced;
  }

  return (
    <div>
    <Navbar/>
         <div className="max-w-7xl mx-auto">
    
    <div className=''>
    <div className='relative my-10 mx-10 border border-black  rounded-md '>
        <label htmlFor="Search" className="sr-only">Search</label>
        <input
          type="text"
          id="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for restaurants and food"
          autoComplete='off'
          className="w-full p-4  rounded-md border-gray-200 py-3 pe-10 shadow-sm sm:text-sm"
        />
        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
     
      <ul className='px-10'>
        {results.map((result, index) => (
          <li className='py-2' 
          key={index}
          >
          <div className='flex gap-5'>
            <div>
            <img className='rounded-md' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_70,h_60/${result.cloudinaryId
}`} alt={result.text} />
            </div>
            <div>
            <h2>{result.text}</h2>
          <h5 className='text-gray-500 lowercase text-sm '>{result.type}
          </h5>
            </div>
          </div>
         
          
          </li> // Adjust based on the actual structure of your API response
        ))}
      </ul>
    </div>
    </div>
   
  );
};

export default Search;
