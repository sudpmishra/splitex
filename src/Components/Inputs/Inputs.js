import React, { createRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import Modal from '../../Components/Modal/Modal';
import './Inputs.css';

const TextBox = ({ value, setValue, type, label, iconLabel, disabled = false }) => {
  const inputRef = createRef();
  return (
    <div className={`input-container ${disabled ? 'disable' : ''}`} onClick={() => inputRef.current.focus()}>
      {disabled && <div className='disable-overlay'></div>}
      <label className={`input-label label-alt`}>{label}</label>
      <input type={type} value={value} ref={inputRef} onChange={e => setValue(e.target.value)} />
      <i className={`fa fa-${iconLabel}`}></i>
    </div>
  );
};
const TextArea = ({ value, setValue, label, iconLabel, disabled = false }) => {
  return (
    <div className={`input-container ${disabled ? 'disable' : ''}`}>
      {disabled && <div className='disable-overlay'></div>}
      <label className={`input-label label-alt`}>{label}</label>
      <textarea value={value} onChange={e => setValue(e.target.value)} />
      <i className={`fa fa-${iconLabel}`}></i>
    </div>
  );
};
const CustomDatePicker = ({ value, setValue, label, iconLabel, disabled = false }) => {
  return (
    <div className={`input-container ${disabled ? 'disable' : ''}`}>
      {disabled && <div className='disable-overlay'></div>}
      <label className={`input-label label-alt`}>{label}</label>
      <ReactDatePicker
        selected={value}
        onChange={(date) => setValue(date)}
        closeOnScroll={true}
        disabled={disabled} />
      <i className={`fa fa-${iconLabel}`}></i>
    </div>
  );
}
const DropDown = ({ value, setValue, label, disabled = false, options }) => {
  return (
    <>
      <div className={`input-container ${disabled ? 'disable' : ''}`}>
        {disabled && <div className='disable-overlay'></div>}
        <label className={`input-label label-alt`}>{label}</label>
        <select value={value} onChange={e => setValue(e.target.value)}>
          {options.map((option, index) => {
            return <option key={index} value={option.value}>{option.name}</option>
          })}
        </select>
      </div>
    </>
  );
}
const Radio = ({ value, setValue, label, iconLabel, disabled = false, options }) => {
  const selectedIndex = options.findIndex(option => option.name === value);
  const [index, setIndex] = useState(selectedIndex === -1 ? 0 : selectedIndex);
  const _cycleOptions = () => {
    if (index === options.length - 1) {
      setIndex(0);
      setValue(options[0].name);
    } else {
      setIndex(index + 1);
      setValue(options[index + 1].name);
    }
  }
  return (
    <>
      <div className={`input-container ${disabled ? 'disable' : ''}`} onClick={_cycleOptions}>
        {disabled && <div className='disable-overlay'></div>}
        <label className={`input-label label-alt`}>{label}</label>
        <span className='radio-input'>{options[index].name}</span>
      </div>
    </>
  );
}
const MultiSelect = ({ value, setValue, label, disabled = false, options }) => {
  const [text, setText] = useState('');
  const [showOptions, setShowOptions] = useState([]);
  const diffValues = options.filter(i => {
    return !value.map(_ => _.email).includes(i.email)
  })
  const inputRef = createRef(null);
  const _handleChange = (e) => {
    const val = e.target.value.startsWith('@') ? e.target.value.substring(1) : e.target.value;
    setText(val);
    setShowOptions(diffValues.filter(i => {
      return i.email.toLowerCase().includes(val.toLowerCase())
    }))
  }
  const _addOption = (option) => {
    setValue([...value, option]);
    setText('');
    setShowOptions([]);
    inputRef.current.focus();
  }
  const _removeOption = (option) => {
    const newValue = value.filter(i => i.email !== option.email);
    setValue(newValue);
    inputRef.current.focus();
  }
  return (
    <>
      <div className={`input-container multiselect ${disabled ? 'disable' : ''}`} onClick={() => inputRef.current.focus()}>
        {disabled && <div className='disable-overlay'></div>}
        <label className={`input-label label-alt`}>{label}</label>
        <div className='multi-select-container'>
          {value && value.map((option, index) => {
            return (<span key={index} className='multi-select-option'>@{option.name}<i className='fa fa-times' onClick={() => _removeOption(option)}></i></span>)
          })}
          <span className='multi-select-container-input'>
            <input type='text' value={text} onChange={e => setText(e.target.value)} onChangeCapture={_handleChange} ref={inputRef} />
            <div className={`multi-select-options-container ${text !== '' ? 'show' : ''}`}>
              {showOptions.map((option, index) => {
                return <button key={index} className='multi-select-option-dropdown' onClick={() => _addOption(option)}>{option.name}</button>
              })}
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

const ImageUpload = ({ value, setValue, label, disabled = false }) => {
  const [showImage, setShowImage] = useState(false);
  const _onChange = (e) => {
    if (e.target.files[0]) {
      let fileWithPreview =
      {
        file: e.target.files[0],
        preview: URL.createObjectURL(e.target.files[0])
      }
      setValue(fileWithPreview);
    }
  }
  return (
    <>
      <div className={`input-container image-upload ${disabled ? 'disable' : ''}`}>
        {disabled && <div className='disable-overlay'></div>}
        <label className={`input-label label-alt`}>{label}</label>
        <label className='image-upload-label' htmlFor='img-upload'>
          {value.file ? value.file.name : "Upload Image"}
          <i className={`fa fa-upload`}></i>
        </label>
        <input type='file' onChange={_onChange} id="img-upload" style={{ display: 'none' }} />
        {value && <i className={`fa fa-image`} onClick={() => setShowImage(true)}></i>}
      </div>
      <Modal
        showSlider={showImage}
        setShowSlider={setShowImage}
        title='Modal Title'
        subTitle='Modal Subtitle'
        loading={false}
        body={<ModalBody src={value.preview} />}
        size='small'
        footer='Modal Footer' />
    </>
  );
}
const ModalBody = ({ src }) => {
  return (
    <div className='modal-body'>
      <img src={src} alt='modal-img' />
    </div>
  );
}

export default { TextBox, TextArea, CustomDatePicker, DropDown, Radio, ImageUpload, MultiSelect };