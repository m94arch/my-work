import { getValue } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';

import ExpensesForm from './componts/ExpensesForm';
import ExpensesTable from './componts/ExpensesTable';
import './resoures/css/style.css'
import MainImage from './resoures/images/m1.png'


let App =() =>{
  let [expenses , setexpenses]=useState([]);
  let OnNewExpensesHandler=(expenses) => {
    
   
    SaveExpenses(expenses);
  };

  let SaveExpenses =(expenses)=>{
    fetch("https://we-expenses-default-rtdb.firebaseio.com/expenses.json",
    {
      method:"post" , 
      body:JSON.stringify (expenses),
      headers:{
        "content-type" : "application/json",
        accept: "application/json",
      }
    }

    ).then(function (result) {
      return result.json();

    }).then(function (responses) {
      responses.firebase_id=responses["name"]

      setexpenses(prevsate=>{
        return[expenses , ...prevsate];
      });
      console.log(expenses);
    
  })

.catch(function(error){
  console.log("error")

})

}


let fetchexpenese =()=>{
  fetch("https://we-expenses-default-rtdb.firebaseio.com/expenses.json",
  {
    method:"Get" , 
    body:JSON.stringify (expenses),
    headers:{
      "content-type" : "application/json",
      accept: "application/json",
    },
  }
    ).then(function (result) {
      return result.json();

    }).then(function (responses) {
      console.log(responses);
      let expensesArrary = [];
      for(let key in responses){
        let expensee = responses[key];
        expensee.firebase_id = key;
        console.log(expensee);
        expensesArrary.push(expensee);
      }
      setexpenses(expensesArrary);
  })
  .catch(function(error){
    console.log("error")
  
  })
}


  let OnDeleteHandler=(firebaseId)=>{
   fetch(`https://we-expenses-default-rtdb.firebaseio.com/expense/${firebaseId}.json` , {
    method : "Delete",
    headers : {
      accept : "appliction/json",

    },




   }).then(function (result){
    
   return result.json()
  
  })
   
  .then(function (responses){
    console.log(responses);
    let fillterArray = expenses.filter((Element) =>
    Element.firebase_id!= firebaseId)
    setexpenses(fillterArray);

   })
   .catch(function(error){});
}
useEffect(fetchexpenese,[]);


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