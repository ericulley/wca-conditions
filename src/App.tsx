// Dependencies
import { FunctionComponent, useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { createMuiTheme, ThemeProvider} from '@material-ui/core'
import { useAuth0 } from './contexts/auth0-context'
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

const App: FunctionComponent<{}> = (props) => {

  const { user, isAuthenticated, getTokenSilently } = useAuth0() 

  const [userData, setUserData] = useState()

  const fetchUserData = () => {
    getTokenSilently().then((token: any) => {
      axios.get(`http://localhost:3001/userdata/${user.sub}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      }).then((res: AxiosResponse) => {
        console.log(res.data)
        setUserData(res.data)
      }).catch((err: any) => {
        console.error(err.message)
      })
    }).catch((err: any) => {
      console.error(err.message)
    })
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserData()
    }
  }, [user])

  return (
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
  );
}

export default App;
