import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import ExpensesForm from './componts/ExpensesForm';
import ExpensesTable from './componts/ExpensesTable';
import './resoures/css/style.css'
import MainImage from './resoures/images/m1.png'


let App =() =>{
  let [expenses , setexpenses]=useState([]);
  let OnNewExpensesHandler=(expenses) => {
    
    setexpenses(prevsate=>{
      return[expenses , ...prevsate]
    });
    console.log(expenses);
  };

  let OnDeleteHandler=(id)=>{
    let fillterArray=expenses.filter((Element) =>Element.id!=id)
    setexpenses(fillterArray);

}



return(
<div className="wrapp-contant">
<section id="section-top"> 
    <img src={MainImage} alt="this is photo"/>
  <article>
    <span>Welcome to Expenses Manager</span>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
   <ExpensesForm   OnNewExpenses={OnNewExpensesHandler}/>
  </article>
</section>
<ExpensesTable expenses={expenses} OnDeleteExpense={OnDeleteHandler}/>

</div>
);
};
export default  App;