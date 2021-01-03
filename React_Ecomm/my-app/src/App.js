import './App.css';
import Homepage from './pages/home/homepage.component';
import ShoppingPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInLogin from './pages/sign-in_log-in/sign_in_log_in.component';

import {Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShoppingPage}/>
        <Route exact path='/signin' component={SignInLogin}/>
      </Switch>
    </div>
  );
}

export default App;
