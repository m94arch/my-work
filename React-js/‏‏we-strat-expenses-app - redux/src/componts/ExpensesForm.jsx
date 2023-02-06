import { useRef } from "react";
import { useDispatch } from "react-redux";
import { expenseActions } from "../redux/expensesSlice";

let ExpensesForm =() => {

    let titleRef = useRef();
    let dateRef = useRef();
    let ValueRef = useRef();
    let DescriptionRef = useRef();
    let dispatch = useDispatch();


    
let onSubmitHandler =(event)=>{
    event.preventDefault();
    if (checkData()){
        SaveExpense();
    }
};




let checkData=()=>{
    if(titleRef.current.value!="" && 
    dateRef.current.value!="" && 
    ValueRef.current.value!="" && 
    DescriptionRef.current.value != "" 
    ){
    return true;

}
alert("please Enter informaition");
return false;
}




let SaveExpense=()=>{
    let expense ={
        date  :  dateRef.current.value,
        id :Date.now(),
        title : titleRef.current.value,
        value : ValueRef.current.value,
        Description : DescriptionRef.current.value,
    }
    console.log(expense);
    dispatch(expenseActions.save(expense))
    clear();
}


let clear =()=>{
    titleRef.current.value ="";
    dateRef.current.value ="";
    ValueRef.current.value ="";
    DescriptionRef.current.value ="";
}


let OnDeleteExpenses=(id)=>{
    alert(id);

}

    return(
        <form onSubmit={ onSubmitHandler}>
        <div  className="form-form">
            <div className="form-top" >
                <label  htmlFor="Title">Title</label>
                <input
                 type="text"
                  name="Title"
                   id="Title" 
                   placeholder="Title"
                   ref={titleRef}
                   
                   />

            </div>
            <div className="form-top" >
                <label  htmlFor="Date">Date</label>
                <input 
                type="Date" 
                name="Date" 
                id="Date"
                ref={dateRef}
                />

            </div>
        </div>


            <div  className="form-form">
                <div className="form-top">
                    <label  htmlFor="Value">Value</label>
                    <input 
                    type="number" 
                    name="Value" 
                    id="Value" 
                    placeholder="Value"
                    ref={ValueRef}

                    />

                </div>
                <div className="form-top">
                    <label  htmlFor="Description">Description</label>
                    <input 
                     type="text"
                     name="Description" 
                     id="Description" 
                     placeholder="Description"
                     ref={DescriptionRef}
                     />

            </div>

            
        </div>
        <div className="save"><button  type="submit">save</button></div>
    </form>
    );
};
export default ExpensesForm;