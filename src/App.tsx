// Dependencies
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { createMuiTheme, ThemeProvider} from '@material-ui/core'
import { Auth0Provider } from './contexts/auth0-context'
// Components
import NavBar from './components/NavBar'
import Rivers from './pages/Rivers'
import Home from './pages/Home'
import Settings from './pages/Settings'
import { blueGrey, teal } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey, 
    secondary: teal
  }
})

const App: React.FunctionComponent<{}> = (props) => {
  return (
    <Auth0Provider>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default App;
