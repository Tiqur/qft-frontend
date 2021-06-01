import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import HomePage from './pages/HomePage/HomePage.jsx';
import HowToBuy from './pages/HowToBuy/HowToBuy.jsx';
import About from './pages/About/About.jsx';
import OurTeam from './pages/OurTeam/OurTeam.jsx';
import Poof from './pages/Poof/Poof.jsx';
import Charts from './pages/Charts/Charts.jsx';
import WhitePaper from './pages/WhitePaper/WhitePaper.jsx';
import F0F from './pages/404/404.jsx';
import Tos from './pages/Tos/Tos.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';
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
            <Route exact path='/terms-of-service' component={Tos}/>
            <Route exact path='/privacy-policy' component={Tos}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/our-team' component={OurTeam}/>
            <Route component={F0F}/>
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
