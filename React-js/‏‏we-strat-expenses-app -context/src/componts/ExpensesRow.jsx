import { useContext } from "react";
import { AppContext } from "../contexts/app-context";

let ExpensesRow =(props) =>{
    let appContext = useContext(AppContext);
    let  OnDeleteHandler=()=>{
let fillterArray=appContext.expenses.filter((element) =>element.id!=props.expense.id)
appContext.setexpenses(fillterArray);
    }
return(
    <tr> 
    <td>{props.expense.title}</td>
    <td>{props.expense.date}</td>
    <td>${props.expense.value}</td>
    <td>{props.expense.Description}</td> 
    <td> <a href="#"  onClick={OnDeleteHandler}>delete</a>
    </td> 
    </tr>
);
}
export default ExpensesRow;