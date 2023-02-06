import ExpensesRow from "./ExpensesRow";

let ExpensesTable =(props) =>{
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
{props.expenses.map((element) =>(

<ExpensesRow  key ={element.id } expense={element}    OnDeleteExpense={props.OnDeleteExpense}/>
))}


 </tbody>
</table>
</section>
);
}
export default ExpensesTable;