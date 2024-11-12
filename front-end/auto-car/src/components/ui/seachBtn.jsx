import React from 'react';

const SearchBar = () => {
   return (
      <div className="bg-white flex items-center border-2 rounded-full px-4 py-2 w-full max-w-sm">
         <img
            src='/images/search-icon.png'
            alt="Search Icon"
            className="w-5 text-gray-400"
         />
         <input
            type="text"
            placeholder="Search product"
            className="ml-2 outline-none w-full"
         />
      </div>
   );
};

export default SearchBar;
