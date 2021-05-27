import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import HomePage from './pages/HomePage/HomePage.jsx';
import HowToBuy from './pages/HowToBuy/HowToBuy.jsx';
import theme from './components/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/how-to-buy' component={HowToBuy}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
