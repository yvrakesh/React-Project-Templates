import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";
function ExpenseList(props){
    if (props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
      }
    
    return(
        <ul className='expenses-list'>
        {props.expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
              />
            );
          })}
        </ul>
    )
}
export default ExpenseList;