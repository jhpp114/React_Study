import React, {Component} from 'react';
import './App.css';
import Homepage from './pages/home/homepage.component';
import ShoppingPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInLogin from './pages/sign-in_log-in/sign_in_log_in.component';

import {Route, Switch, Link} from 'react-router-dom';
// firebase auth
import { auth } from './firebase/firebase.util';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
      this.unSubscribeFromAuth = auth.onAuthStateChanged( (user) => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    })
  }

  componentWillUnmount() {
      this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShoppingPage}/>
          <Route exact path='/signin' component={SignInLogin}/>
        </Switch>
      </div>
    );
  }
}

export default App;
