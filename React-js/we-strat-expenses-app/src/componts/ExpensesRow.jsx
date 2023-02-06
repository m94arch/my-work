let ExpensesRow =(props) =>{
    let  OnDeleteHandler=()=>{
props.OnDeleteExpense(props.expense.id);
    }
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