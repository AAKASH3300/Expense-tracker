import React  from "react"; //,{useState}
import ExpenseDate from "../expense_date/ExpenseDate";
import './ExpenseItem.css';
//small letter(expenseitem--> regular function
//capital letter(ExpenseItem) --> component
const ExpenseItem = (props) =>{
    // const date = new Date().toISOString();
    // const amount = 10;
    // const title="Book Shop";
    let {
        title ='',
        amount = 0,
        date =new Date()} = props;
    
    // const [title,setTitle]=useState(props.title);
    // const buttonClick =() =>{
    //     //setTitle('Updated'); // changes the title and reloads that component alone to reflect it on screen
    //     console.log(title);
    // };
    //ExpenseDate is used to get date,month and year separately so it is given as a separate component
    return (
        <div className="expense-item">
           <ExpenseDate date={date}/> 
           <div className="expense-item__description">
           <h2>{title}</h2>
           <div className="expense-item__price">${amount}</div>
           </div>&nbsp;&nbsp;&nbsp;
           {/* <button onClick={buttonClick}>Change Title</button> */}
        </div>
    )
};
export default ExpenseItem;