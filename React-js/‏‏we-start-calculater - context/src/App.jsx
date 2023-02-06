import ExpenseForm from './componts/Expense-Form';
import Expensecard from './componts/Expense-card';
import './resources/css/style.css';
import { useContext } from 'react';
import { AppContext } from './context/app-context';
let App =()=>{
  let appcontext=useContext(AppContext)

return <div className="content-wrapper">
    <section className="form-section">
      <header className="form-header">
        <article className="form-header_content">
          <span className="form-title">Average Calculator</span>
          <p className="form-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum
            consectetur explicabo, molestias, hic aut perferendis, deleniti
            dolores repellendus natus numquam. Qui laborum alias eligendi, ab
            voluptas itaque? Exercitationem, minima? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Suscipit veniam sit quisquam
            vero quod. Eum velit excepturi id ratione, facere aut sequi
            architecto tempora a numquam odit quidem totam exercitationem.
          </p>
        </article>
        <figure className="form-header_img">
          <img src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-2686.jpg?w=2000"
            alt=""
          />
        </figure>
      </header>
<ExpenseForm />

    </section>
    <section>
    {appcontext.expenses.map((element) =>(  <Expensecard    key ={element.id} expense={element}/>))}
    </section>
  </div>

}
export default App;