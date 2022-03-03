import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Index from "../pages/Login";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import NewPartner from "../pages/NewPartner";
import Request from "../pages/Request";
import Budgets from "../pages/Budgets";
import BudgetsDetails from "../pages/Budgets/Details";
import Users from "../pages/Users";
import Settings from "../pages/Settings";

import { useAuth } from "contexts/AuthContext";

interface GuestRouteProps {
  children: JSX.Element;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/sejaparceiro" component={NewPartner} />
        <Route exact
          path="/partner/request"
          component={
            localStorage.getItem("token") ? Request : Login
          }
        />
        <Route exact
          path="/partner/budgets"
          component={
            localStorage.getItem("token") ? Budgets : Login
          }
        />
        <Route exact
          path="/partner/budgets/details/:id"
          component={
            localStorage.getItem("token") ? BudgetsDetails : Login
          }
        />
        <Route exact
          path="/partner/users"
          component={
            localStorage.getItem("token") ? Users : Login
          }
        />
        <Route exact
          path="/partner/settings"
          component={
            localStorage.getItem("token") ? Settings : Login
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
