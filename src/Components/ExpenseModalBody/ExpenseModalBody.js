import React, { useEffect, useState } from 'react';
import './ExpenseModalBody.css';
import Inputs from '../../Components/Inputs/Inputs';
import userList from '../../MockData/friend.json';

const ExpenseModalBody = ({ }) => {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState(new Date());
  const [peopleInvolved, setPeopleInvolved] = useState([])
  const [paidBy, setPaidBy] = useState('');
  const [receipt, setReceipt] = useState('');
  const [amount, setAmount] = useState();
  const [splitEvenly, setSplitEvenly] = useState('Split Evenly');
  const [eachSplitAmount, setEachSplitAmount] = useState([]);

  useEffect(() => {
    const eachAmount = (parseInt(amount) / (peopleInvolved.length + 1)).toFixed(2);
    setEachSplitAmount([{ name: "you", amount: eachAmount }, ...peopleInvolved.map(person => { return { name: person.name, amount: eachAmount } })])

  }, [splitEvenly])

  const _setSplitAmount = (index, e) => {
    var eachSplitAmountCopy = [...eachSplitAmount]
    const name = index === 0 ? 'You' : peopleInvolved[index - 1].name
    eachSplitAmountCopy[index] = { name: name, amount: e }
    setEachSplitAmount(eachSplitAmountCopy)
  }
  return (
    <div className='row'>
      <div className="col-6">
        <div className="row">
          <div className="col-12">
            <Inputs.TextBox
              value={title}
              setValue={setTitle}
              type="text"
              label="Title:"
            // disabled= {type==='VIEW'?true:false}
            />
          </div>
          <div className="col-12">
            <Inputs.CustomDatePicker
              value={date}
              setValue={setDate}
              label="Date:"
              iconLabel="calendar" />
          </div>
          <div className="col-12">
            <Inputs.MultiSelect
              value={peopleInvolved}
              setValue={setPeopleInvolved}
              type="text"
              label="Name:"
              options={userList}
            />
          </div>
          <div className="col-12">
            <Inputs.DropDown
              value={paidBy}
              setValue={setPaidBy}
              type="text"
              label="Paid By:"
              options={[{ name: 'You', value: 0 }, ...peopleInvolved.map((people) => { return { name: people.name, value: people._id } })]}
            />
          </div>
          <div className="col-12">
            <Inputs.ImageUpload
              value={receipt}
              setValue={setReceipt}
              type="text"
              label="Receipt"
            />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className='row'>
          <div className="col-6">
            <Inputs.TextBox
              value={amount}
              setValue={setAmount}
              type="number"
              label="Amount"
            />
          </div>
          <div className="col-6">
            <Inputs.Radio
              value={splitEvenly}
              setValue={setSplitEvenly}
              label="Split Evenly?"
              options={[{ name: 'Dont Split Evenly' }, { name: 'Split Evenly' }]}
            />
          </div>
          {splitEvenly === 'Dont Split Evenly' &&
            <>
              <div className="col-12 split-bill">
                <span>Split Bill</span>
              </div>
              <div className="col-6">
                <Inputs.TextBox
                  value={eachSplitAmount[0] ? eachSplitAmount[0].amount : 0}
                  setValue={e => _setSplitAmount(0, e)}
                  type="number"
                  label="You"
                />
              </div>
              {peopleInvolved.map((people, index) => {
                return (
                  <div className="col-6" key={index}>
                    <Inputs.TextBox
                      value={eachSplitAmount[index + 1] ? eachSplitAmount[index + 1].amount : 0}
                      setValue={e => _setSplitAmount(index + 1, e)}
                      type="number"
                      label={people.name}
                    />
                  </div>
                )
              })}
              {(parseInt(amount) !== eachSplitAmount.reduce((a, b) => a + parseInt(b.amount), 0)) && <div className='col-12 error-message'>Total Amount does not match the split bill amount.</div>}
            </>
          }
        </div>
      </div>
    </div>
  )
}
export default ExpenseModalBody;