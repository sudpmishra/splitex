import React from 'react';
import './Pagination.css';

const Pagination = ({ pageNum = 3, length = 20, contentPerPage = 8, onPageChange }) => {
  const pageNumbers = Array.from({ length: Math.ceil(length / contentPerPage) }, (_, i) => i + 1);
  const _changePage = (num) => {
    if (num > 0 && num <= pageNumbers.length) {
      onPageChange(num);
    }
  }
  return (
    <>
      <div className='pagination'>
        <button
          className={`btn page ${pageNum === 1 || pageNumbers.length === 0 ? "disabled" : ''}`}
          onClick={() => _changePage(pageNum - 1)}>
          <i className="fas fa-caret-left"></i>
        </button>
        {pageNumbers.map((number, index) => (
          <button key={index} className={`btn page ${pageNum === number ? 'active' : ''}`} onClick={() => _changePage(number)}>{number}</button>))
        }
        <button
          className={`btn page ${pageNum === pageNumbers.length || pageNumbers.length === 0 ? "disabled" : ''}`}
          onClick={() => _changePage(pageNum + 1)}>
          <i className="fas fa-caret-right"></i>
        </button>
      </div>
    </>
  );
};
export default Pagination;