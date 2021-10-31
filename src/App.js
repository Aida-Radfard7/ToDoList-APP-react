import './App.css';
import { Layout } from './layout/Layout';
import './assets/font/css/all.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {AddToDoBox} from './views/AddToDoBox';
import { Login } from './layout/Login';
import { useSelector } from 'react-redux';

function App() {

  const dark = useSelector(store => store.themeState);

  if(dark[1] == true){
    document.documentElement.style.setProperty('opacity', .8);
  }else{
    document.documentElement.style.setProperty('opacity', 1);
  }

  return (
    <Router>
     <Switch>
        <Route path="/Login" exact component={() => <Login />} />    
        <Route path="/" component={Layout} />
     </Switch>
    </Router>
  );
}

export default App;
