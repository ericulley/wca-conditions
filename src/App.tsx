import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/nav'
import Home from './pages/home'

const App: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Switch>
          <Route path='/' exact render={props => <Home/>}></Route>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
