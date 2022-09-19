import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  /*
    Using Single State Approach

    const [userInput,setUserInput] = useState({
      enteredTitle:'',
      enteredAmount:'',
      enteredDate:'',
    });

    const titleChangeHandler = (event) =>{
      setUserInput({
        ...userInput,
        enteredTitle : event.target.value
      });
    }

    // This is functionally correct but could fail sometimes because React takes time to update a state
    // When there are multiple states, it might not take the previous state
    // So technically it's better using React prev state function

    const titleChangeHandler = (event) => {
      setUserInput((prevState)=>{
        return {..prevState,enteredTitle : event.target.value}
      });
    }
  */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: parseInt(enteredAmount),
      // amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    // Two way Binding to Clear User Input after submitting the form
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    // console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
