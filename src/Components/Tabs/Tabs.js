import React from 'react';
import './Tabs.css';

const Tabs = ({options, selectedTab, onTabChange}) => {
  return (
    <>
      <div className="tabs">
        {options.map((option, index) => {
          return (
            <button
              className={`tab-item ${selectedTab === index ? 'btn btn-primary selected' : 'btn btn-circular btn-info'}`}
              key={index}
              onClick={() => onTabChange(index)}>
              <div className="tab-item-icon">
                <i className={`fa fa-${option.icon}`}></i>
              </div>
              {selectedTab === index &&
                <div className="tab-item-name">
                  {option.name}
                </div>}
            </button>
          )
        })}
      </div>
    </>
  );
};
export default Tabs;