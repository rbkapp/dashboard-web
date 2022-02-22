import {
   BrowserRouter as Router, 
   Switch, 
   Route, 
} from 'react-router-dom';

import Index from "../pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
