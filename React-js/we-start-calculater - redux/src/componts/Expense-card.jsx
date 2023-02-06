import { useDispatch, useSelector } from "react-redux";
import { cardAction } from "../redux/CardSlice";

let Expensecard = (props) => {
  let dispatch = useDispatch();
  let card = useSelector((state) => state.card);

  let OnDeleteHandler = () => {
    dispatch(cardAction.delete(props.card.id));
  };

  return (
    <section className="card">
      <article className="card-top-content">
        <div className="card-top-content-leading">
          <span className="name-first-char">S</span>
          <div className="student-info">
            <span>{props.card.studentname}</span>
            <span> {props.card.studentnumber}</span>
          </div>
        </div>
        <a onClick={OnDeleteHandler}>
          <i className="fa-solid fa-xmark delete-row"></i>
        </a>
      </article>
      <article className="card-marks">
    <section className="mark-info">
      <span>Mid-Term</span>
      <span> {props.card.midterm}</span>
    </section>
    <section className="mark-info">
      <span>Final-Term</span>
      <span> {props.card.final}</span>

    </section>
    <section className="mark-info">
      <span>Activities</span>
      <span> {props.card.activities}</span>
    </section>
  </article>
{}
    </section>
  );
};
export default Expensecard;
