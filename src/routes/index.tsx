import {
   BrowserRouter as Router, 
   Switch, 
   Route, 
} from 'react-router-dom';

import Index from "../pages/Login";
import Request from "../pages/Request";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/request" component={Request} />
      </Switch>
    </Router>
  );
}

export default App;
