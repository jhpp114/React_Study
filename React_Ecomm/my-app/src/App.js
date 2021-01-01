import './App.css';
import Homepage from './pages/home/homepage.component';

import {Route, Switch, Link} from 'react-router-dom';

const HatPage = (props) => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  )
}

const TestPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/hats' component={HatPage}/>
        <Route exact path='/test' component={TestPage}/>
      </Switch>
    </div>
  );
}

export default App;
