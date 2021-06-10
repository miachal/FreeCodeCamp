import React from 'react';

const SearchBox = props => (
    <form className='search-form' onSubmit={props.handleSearch}>
        <input
            type='text'
            className='search'
            placeholder='What are you looking for?'
            ref={props.searchRef}
        />
    </form>
);

export default SearchBox;