import { useContext } from "react";
import { AppContext } from "../context/app-context";

let Expensecard = (props) => {
  let appContext = useContext(AppContext);

    let  OnDeleteHandler=()=>{
      let fillterArray=appContext.expenses.filter((element) =>element.id!=props.expense.id)
      appContext.setexpenses(fillterArray);  };

  return (
    <section className="card">
      <article className="card-top-content">
        <div className="card-top-content-leading">
          <span className="name-first-char">S</span>
          <div className="student-info">
            <span>{props.expense.studentname}</span>
            <span> {props.expense.studentnumber}</span>
          </div>
        </div>
        <a onClick={OnDeleteHandler}>
          <i className="fa-solid fa-xmark delete-row"></i>
        </a>
      </article>
      <article className="card-marks">
    <section className="mark-info">
      <span>Mid-Term</span>
      <span> {props.expense.midterm}</span>
    </section>
    <section className="mark-info">
      <span>Final-Term</span>
      <span> {props.expense.final}</span>

    </section>
    <section className="mark-info">
      <span>Activities</span>
      <span> {props.expense.activities}</span>
    </section>
  </article>
{}
    </section>
  );
};
export default Expensecard;
