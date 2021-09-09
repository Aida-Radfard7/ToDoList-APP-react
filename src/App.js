import './App.css';
import { Layout } from './layout/Layout';
import './assets/font/css/all.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {AddToDoBox} from './views/AddToDoBox';


function App() {
  return (
    <Router>
     
     <Switch>
        <Route path="/" component={Layout} />
        <Route path="/AddToDo" component={AddToDoBox} />
     </Switch>
    </Router>
  );
}

export default App;
