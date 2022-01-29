import React, { useState } from 'react';
import Inputs from '../../Components/Inputs/Inputs';
import Modal from '../../Components/Modal/Modal';
import Pagination from '../../Components/Pagination/Pagination';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Tabs from '../../Components/Tabs/Tabs';
import './ComponentsExamples.css';

const options = [{ name: 'Home', icon: 'home' }, { name: 'About', icon: 'info' }, { name: 'Contact', icon: 'phone' }];
const userList = [{ "name": "Lana Booker", "email": "lanabooker@zuvy.com" }, { "name": "Bobbie Finley", "email": "bobbiefinley@zuvy.com" }, { "name": "Evelyn Payne", "email": "evelynpayne@zuvy.com" }, { "name": "Paul Brock", "email": "paulbrock@zuvy.com" }, { "name": "Wood Hays", "email": "woodhays@zuvy.com" }, { "name": "Roslyn Vazquez", "email": "roslynvazquez@zuvy.com" }, { "name": "Stacie Beard", "email": "staciebeard@zuvy.com" }, { "name": "Rollins Willis", "email": "rollinswillis@zuvy.com" }, { "name": "Wilkins Ellison", "email": "wilkinsellison@zuvy.com" }, { "name": "Leola Poole", "email": "leolapoole@zuvy.com" }, { "name": "Eloise Hays", "email": "eloisehays@zuvy.com" }, { "name": "Hess Stark", "email": "hessstark@zuvy.com" }, { "name": "Burns George", "email": "burnsgeorge@zuvy.com" }, { "name": "Wilma Edwards", "email": "wilmaedwards@zuvy.com" }, { "name": "Norma Curry", "email": "normacurry@zuvy.com" }, { "name": "Sexton Howell", "email": "sextonhowell@zuvy.com" }, { "name": "Lea Harvey", "email": "leaharvey@zuvy.com" }, { "name": "Kelly Yang", "email": "kellyyang@zuvy.com" }, { "name": "Wallace Fernandez", "email": "wallacefernandez@zuvy.com" }]
const ComponentsExamples = () => {
  const [slider, setSlider] = useState(false);
  const [sliderlg, setSliderlg] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [ipValue, setIpValue] = useState("asd");
  const [date, setDate] = useState(new Date());
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [multiSelectValue, setMultiSelectValue] = useState([{ "name": "Lana Booker", "email": "lanabooker@zuvy.com" }, { "name": "Bobbie Finley", "email": "bobbiefinley@zuvy.com" }, { "name": "Evelyn Payne", "email": "evelynpayne@zuvy.com" }, { "name": "Paul Brock", "email": "paulbrock@zuvy.com" }, { "name": "Wood Hays", "email": "woodhays@zuvy.com" }, { "name": "Roslyn Vazquez", "email": "roslynvazquez@zuvy.com" }, { "name": "Stacie Beard", "email": "staciebeard@zuvy.com" }, { "name": "Rollins Willis", "email": "rollinswillis@zuvy.com" }, { "name": "Wilkins Ellison", "email": "wilkinsellison@zuvy.com" }]);
  return (
    <div className='comp'>
      <div className="row">
        <div className="col-6">
          <button className='btn btn-primary' onClick={() => setSlider(true)}>Open Small Modal</button>
          <button className='btn btn-primary' onClick={() => setSliderlg(true)}>Create new Expense</button>
        </div>
        <div className="col-3">
          <Pagination pageNum={pageNum} length={30} contentPerPage={5} onPageChange={setPageNum} />
        </div>

        <div className="col-3">
          <SearchBar
            options={userList} onSelect={() => alert('selected')} defaultOption={true}
            component={<button className="btn btn-circular btn-success ml-10"><i className="fas fa-search"></i></button>} />
        </div>
        <div className="col-6">
          <Inputs.TextBox
            value={ipValue}
            setValue={setIpValue}
            type="text"
            label="Name:"
            iconLabel="times" />
        </div>
        <div className="col-6">
          <Inputs.TextArea
            value={ipValue}
            setValue={setIpValue}
            type="text"
            label="Name:"
            disabled={true}
            iconLabel="times" />

        </div>
        <div className="col-6">
          <Inputs.CustomDatePicker
            value={date}
            setValue={setDate}
            label="Date:"
            iconLabel="calendar" />
        </div>
        <div className="col-6">
          <Inputs.DropDown
            value={ipValue}
            setValue={setIpValue}
            type="text"
            label="Name:"
            options={[{ name: 'Sudeep', value: 1 }, { name: 'John', value: 2 }, { name: 'Jane', value: 3 }]}
          />
        </div>
        <div className="col-6">
          <Inputs.Radio
            value={ipValue}
            setValue={setIpValue}
            type="text"
            label="Name:"
            options={[{ name: 'Sudeep', value: 1 }, { name: 'John', value: 2 }, { name: 'Jane', value: 3 }]}
          />
        </div>
        <div className="col-6">
          <Inputs.ImageUpload
            value={ipValue}
            setValue={setIpValue}
            type="text"
            label="Name:"
          />
        </div>
        <div className="col-6">
          <Inputs.MultiSelect
            value={multiSelectValue}
            setValue={setMultiSelectValue}
            type="text"
            label="Name:"
            options={userList}
          />
        </div>
        <div className="col-6">
          <Tabs options={options} selectedTab={selectedTab} onTabChange={setSelectedTab} />
        </div>
        <Modal
          showSlider={sliderlg}
          setShowSlider={setSliderlg}
          title='Modal Title'
          subTitle='Modal Subtitle'
          loading={false}
          body={<ModalBody text="asd" />}
          size='large'
          footer={<Footer />} />
        <Modal
          showSlider={slider}
          setShowSlider={setSlider}
          title='Modal Title'
          subTitle='Modal Subtitle'
          loading={false} body='Modal Body'
          size='small'
          footer='Modal Footer' />
      </div>
    </div>
  );
};
const ModalBody = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <input className='form-control' placeholder='Search' />
      <button className='btn btn-primary'>Button</button>
    </div>
  )
}
const Footer = () => {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <button className='btn btn-danger'>Cancel</button>
      <button className='btn btn-success'>Save</button>
    </div>
  )
}
export default ComponentsExamples;