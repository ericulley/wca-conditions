import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'

const App: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="App">
      <NavBar/>
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
