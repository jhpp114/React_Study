import './App.css';
import Homepage from './pages/home/homepage.component';
import ShoppingPage from './pages/shop/shop.component';
import {Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShoppingPage}/>
      </Switch>
    </div>
  );
}

export default App;
