// Dependencies
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Components
import NavBar from './components/NavBar'
import Rivers from './pages/Rivers'
import Home from './pages/Home'
import Settings from './pages/Settings'

const App: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/rivers' exact render={() => <Rivers />} />
          <Route path='/settings' exact render={() => <Settings />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
