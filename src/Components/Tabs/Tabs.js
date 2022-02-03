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
              <span className="tab-item-icon">
                <i className={`fa fa-${option.icon}`}></i>
              </span>
              {selectedTab === index &&
                <span className="tab-item-name">
                  {option.name}
                </span>}
            </button>
          )
        })}
      </div>
    </>
  );
};
export default Tabs;