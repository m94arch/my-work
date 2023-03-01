let ExpensesRow =(props) =>{
    let  OnDeleteHandler=()=>{
props.OnDeleteExpense(props.expensse.id);
    }
return(
    <tr> 
    <td>{props.expensse.title}</td>
    <td>{props.expensse.date}</td>
    <td>{props.expensse.value}</td>
    <td>{props.expensse.Description}</td> 
    <td> <a href="#"  onClick={OnDeleteHandler}>delete</a>
    </td> 
    </tr>
);
}
export default ExpensesRow;