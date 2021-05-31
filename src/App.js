import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import HomePage from './pages/HomePage/HomePage.jsx';
import HowToBuy from './pages/HowToBuy/HowToBuy.jsx';
import Poof from './pages/Poof/Poof.jsx';
import Charts from './pages/Charts/Charts.jsx';
import WhitePaper from './pages/WhitePaper/WhitePaper.jsx';
import F0F from './pages/404/404.jsx';
import theme from './components/Theme';
import { GlobalProvider } from './components/GlobalContext.jsx';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/how-to-buy' component={HowToBuy}/>
            <Route exact path='/whitepaper' component={WhitePaper}/>
            <Route exact path='/poof' component={Poof}/>
            <Route exact path='/charts' component={Charts}/>
            <Route component={F0F}/>
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
