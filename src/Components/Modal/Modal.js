import React from 'react';
import './Modal.css';

const Modal = ({ showSlider, setShowSlider, title, subTitle, loading, body, footer, size = 'large' }) => {
  return (
    <>
      <div className={`Modal ${showSlider ? "Show" : ""} ${size === 'small' ? 'Small-Modal' : ''}`}>
        <div className='Modal_Header text-start'>
          {title && <h4>{title}</h4>}
          {subTitle && <h5>{subTitle}</h5>}
          <span className='close-icon-container' onClick={e => setShowSlider(false)}>
            <i className='fa fa-times'></i>
          </span>
          <hr />
        </div>
        {
          loading ? "loading..." :
            <>
              <div className='Modal_Body'>
                {body}
              </div>
              <div className='Footer'>
                {footer}
              </div>
            </>
        }
      </div>
      <div
        className={`Overlay ${showSlider ? "Show" : ""}`}
        onClick={() => setShowSlider(!showSlider)}
      />
    </>
  );
};
export default Modal;