import { useContext } from "react";
import { AppContext } from "../contexts/app-context";
import ExpensesRow from "./ExpensesRow";

let ExpensesTable =() =>{
    let appcontext=useContext(AppContext)
return(
    <section>
   <table> 
    <thead>
    <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Value</th>
        <th>Description</th>
        <th>action</th>
    </tr>
</thead>

<tbody> 
{appcontext.expenses.map((element) => (

<ExpensesRow  key={element.id} expense={element}    />
))}


 </tbody>
</table>
</section>
);
}
export default ExpensesTable;