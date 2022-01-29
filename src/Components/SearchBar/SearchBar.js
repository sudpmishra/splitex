import React, { useEffect } from 'react';
import './SearchBar.css';
import validator from '../../Utils/validation.js';

const SearchBar = ({ options, onSelect, defaultOption = null }) => {
  const [searchText, setSearchText] = React.useState('');
  const [filteredOptions, setFilteredOptions] = React.useState(options)
  useEffect(() => {
    let optionsCopy = [...options]
    setFilteredOptions(optionsCopy.filter(data => data.name.toLowerCase().includes(searchText.toLowerCase()) || data.email.toLowerCase().includes(searchText.toLowerCase())))
  }, [searchText])
  return (
    <>
      <div className='searchbar'>
        <div className={`searchbar-container ${searchText !== '' ? 'show' : ''}`} >
          <div className='searchbar-container-input'>
            <input type='text' placeholder='Search' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <i className='fas fa-search' />
          </div>
          <div className={`searchbar-options-container ${searchText !== '' ? 'show' : ''}`}>
            {filteredOptions.map((option, index) => (
              <div key={index} className='card' onClick={() => onSelect(option)}>
                <div className='card-body'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='img-container'>
                      <img src='https://via.placeholder.com/150' alt='img' />
                    </div>
                    <div className='name-and-email flex-grow-1'>
                      <h6 className='card-title'>{option.name}</h6>
                      <span className='card-text'>{option.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredOptions.length === 0 && <div className='no-result text-center'>No result found</div>}
            {defaultOption && validator.validateEmail(searchText) &&
              <div className='card' onClick={onSelect}>
                <div className='card-body'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='img-container'>
                      <img src='https://via.placeholder.com/150' alt='img' />
                    </div>
                    <div className='name-and-email flex-grow-1'>
                      <h6 className='card-title'>Click to send an inivitation email to</h6>
                      <span className='card-text'>{searchText}</span>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;