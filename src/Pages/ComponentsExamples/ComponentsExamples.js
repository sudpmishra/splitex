import React, { useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import './ComponentsExamples.css';

const ComponentsExamples = () => {
  const [slider, setSlider] = useState(false);
  const [sliderlg, setSliderlg] = useState(false);
  return (
    <>
      <button className='btn btn-primary' onClick={() => setSlider(true)}>Open Small Modal</button>
      <button className='btn btn-primary' onClick={() => setSliderlg(true)}>Open Large Modal</button>
      <Modal
        showSlider={sliderlg}
        setShowSlider={setSliderlg}
        title='Modal Title'
        subTitle='Modal Subtitle'
        loading={false} body='Modal Body'
        size='large'
        footer='Modal Footer' />
      <Modal
        showSlider={slider}
        setShowSlider={setSlider}
        title='Modal Title'
        subTitle='Modal Subtitle'
        loading={false} body='Modal Body'
        size='small'
        footer='Modal Footer' />
    </>
  );
};
export default ComponentsExamples;