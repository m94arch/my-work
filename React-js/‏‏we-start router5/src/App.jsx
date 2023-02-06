import { Fragment } from "react";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import "./style.css";
let App = () => {
  let history = useHistory();

  return (
    <Fragment>
      <ul>
        <li>
         
          <NavLink to="/first" activeClassName="active">
            First
          </NavLink>
        </li>
        <li>
          
          <NavLink to="/second" activeClassName="active" exact>
            Second
          </NavLink>
        </li>
        <li>
         
         
          <NavLink to="/second/third" activeClassName="active" exact>
            Third
          </NavLink>
        </li>
        <li>
          
          <NavLink to="/second/third/fourth" activeClassName="active" exact>
            Fourth
          </NavLink>
        </li>
      </ul>
      <div>
        <button onClick={() => history.push("/first")}>First</button>
        <button onClick={() => history.replace("/second/third/fourth")}>
          Fourth
        </button>
      </div>

      <Switch>
        <Route path="/first">
          <h4>First Element</h4>
        </Route>
        <Route path="/second/third/fourth">
          <h4>Fourth Element</h4>
        </Route>
        <Route path="/second/third">
          <h4>Third Element</h4>
        </Route>
        <Route path="/second">
          <h4>Second Element</h4>
        </Route>
        <Route path="/*">
          <h4>404 - Not Found</h4>
          <Redirect to="/first" />
        </Route>
      </Switch>
    </Fragment>
  );
};
export default App;
