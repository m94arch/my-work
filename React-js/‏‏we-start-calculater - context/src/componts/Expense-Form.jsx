import { useContext, useRef } from "react";
import { AppContext } from "../context/app-context";


let ExpenseForm =()=>{
  let appcontext = useContext(AppContext);

  let studentnameRef = useRef();
  let studentnumberRef = useRef();
  let midtermRef = useRef();
  let finalRef = useRef();
  let activitiesRef = useRef();
  




  let onSubmitHandler =(event)=>{
    event.preventDefault();
    if (checkData()){
        SaveExpense();
    }
};




let checkData=()=>{
    if(studentnameRef.current.value!="" && 
    studentnumberRef.current.value!="" && 
    midtermRef.current.value!="" && 
    finalRef.current.value!="" && 
    activitiesRef.current.value != "" 
    ){
    return true;

}
alert("please Enter informaition");
return false;
}

let SaveExpense=()=>{
  let expense ={
    id :Date.now(),
    studentname: studentnameRef.current.value,
    studentnumber:studentnumberRef.current.value,
    midterm: midtermRef.current.value,
    final: finalRef.current.value,
    activities: activitiesRef.current.value,
  }
  appcontext.setexpenses(prevsate=>{
    return[expense , ...prevsate]
  });
  clear();
}
let clear =()=>{
  studentnameRef.current.value ="";
  studentnumberRef.current.value ="";
  midtermRef.current.value ="";
  finalRef.current.value ="";
  activitiesRef.current.value ="";
}


let OnDeleteExpenses=(id)=>{
  alert(id);

}
return <form className="marks-form" onSubmit={ onSubmitHandler}>
  <div className="form-group">
    <label htmlFor="student-name" className="form-label">Student number</label>
  <input
    type="number"
    id="student-name"
    name=""
    className="form-input"
    placeholder="Enter Student number"
    ref={studentnumberRef}
  />
</div>
<div className="form-group">
  <label htmlFor="student-name" className="form-label">Student Name</label>
  <input
    type="text"
    id="student-name"
    name=""
    className="form-input"
    placeholder="Enter Student Name"
    ref={studentnameRef}
  />
</div>
<div className="form-group">
  <label htmlFor="mid-term" className="form-label">Mid Term</label>
  <input
    type="number"
    id="mid-term"
    name=""
    className="form-input"
    placeholder="Enter Mark"
    ref={midtermRef}
  />
</div>
<div className="form-group">
  <label htmlFor="mid-term" className="form-label">Final</label>
  <input
    type="number"
    id="mid-term"
    name=""
    className="form-input"
    placeholder="Enter Mark"
    ref={finalRef}
  />
</div>
<div className="form-group">
  <label htmlFor="mid-term" className="form-label">Activities</label>
  <input
    type="number"
    id="mid-term"
    name=""
    className="form-input"
    placeholder="Enter Mark"
    ref={activitiesRef}
  />
</div>
<button type="submit" className="form-btn">SAVE</button>
</form>
}
export default ExpenseForm;