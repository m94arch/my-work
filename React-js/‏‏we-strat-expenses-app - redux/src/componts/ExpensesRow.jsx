import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../redux/expensesSlice";

let ExpensesRow =(props) =>{
    let dispatch = useDispatch();
    let  OnDeleteHandler=()=>{} 
    dispatch(expenseActions.delete(props.expense.id))
return(
    <tr> 
    <td>{props.expense.title}</td>
    <td>{props.expense.date}</td>
    <td>{props.expense.value}</td>
    <td>{props.expense.Description}</td> 
    <td> <a href="#"  onClick={OnDeleteHandler}>delete</a>
    </td> 
    </tr>
);
}
export default ExpensesRow;