import { getValue } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import ExpensesForm from './componts/ExpensesForm';
import ExpensesTable from './componts/ExpensesTable';
import './resoures/css/style.css'
import MainImage from './resoures/images/m1.png'


let App =() =>{
  let [expenses , setexpenses]=useState([]);
  let OnNewExpensesHandler=(expenses) => {
    SaveExpense(expenses);
    
  //  setexpenses(prevsate=>{
   //   return[expenses , ...prevsate]
  //  });
  //  console.log(expenses);
 };

  let SaveExpense =(expenses)=>{
    fetch("https://we-expenses-default-rtdb.firebaseio.com/expenses.json",{
      method:"POST",
      body:JSON.stringify(expenses),
      headers:{
        "content-type":"appliction/json",
        accpet:"appliction/json",

      },
    }
    

    ).then(function(response){
      return response.json();
    })
    .then(function(jsonData){
      expenses.firebase_id=jsonData["name"]

      setexpenses(prevsate=>{
          return[expenses , ...prevsate]
       });
       console.log(expenses);
   
    }).catch(function(error){
      console.log(error);
    });


  };


//دالة حذف fire based 
  let OnDeleteHandler=(firebasedId)=>{
    fetch(
      `https://we-expenses-default-rtdb.firebaseio.com/expenses/${firebasedId}.json`,
     {
      method:"DELETE",
      headers:{
        "accpet":"appliction/json",


      }
    } ).then(function (response) {
      return response.json();
    }).then(function(jsonData){
      console.log(jsonData)
     let fillterArray = expenses.filter((element) =>element.firebase_id !=firebasedId);
   setexpenses(fillterArray);

    }).catch(function(error){
    });
}



let  FetchExpesen =()=>{
  fetch("https://we-expenses-default-rtdb.firebaseio.com/expenses.json",{
    method:"GET",
    headers:{
      "accpet":"appliction/json",
    }
  }
  
  ).then(function (response) {
    return response.json();
  }).then(function(jsonData){
    console.log(jsonData)
    let expensesArray =[];
for(let key in jsonData){
  let expenses=jsonData[key];
  expenses.firebase_id=key;
  expensesArray.push(expenses);
}
setexpenses(expensesArray);
 // console.log(key);
  //console.log(jsonData[key]);


  
  }).catch(function(error){
      console.log(error);
    });
}
   //FetchExpesen();
   useEffect(FetchExpesen,[]);

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