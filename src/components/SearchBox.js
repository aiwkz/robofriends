import React from "react";

const SearchBox = ({ searchValueChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='w-50 br-pill pa3 ba b--green bg-lightest-blue pointer'
                type='search' 
                placeholder='Search Robots'
                onChange={searchValueChange}
            />
        </div>
    );
}

export default SearchBox;
