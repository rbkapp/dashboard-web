import {
   BrowserRouter as Router, 
   Switch, 
   Route, 
} from 'react-router-dom';

import Index from "../pages/Login";
import Request from "../pages/Request";
import Budgets from "../pages/Budgets";
import BudgetsDetails from "../pages/Budgets/Details";
import Users from "../pages/Users";
import Settings from "../pages/Settings";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/request" component={Request} />
        <Route exact path="/budgets" component={Budgets} />
        <Route exact path="/budgets/details/:id" component={BudgetsDetails} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
