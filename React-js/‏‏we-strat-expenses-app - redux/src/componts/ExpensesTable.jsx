import { useSelector } from "react-redux";
import ExpensesRow from "./ExpensesRow";

let ExpensesTable =() =>{
    let expenes = useSelector((state) => state.expenes);
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
{expenes.map((element) =>(

<ExpensesRow  key ={element.id} expense={element}   />
))}


 </tbody>
</table>
</section>
);
}
export default ExpensesTable;