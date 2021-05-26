import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import HomePage from './pages/HomePage/HomePage.jsx';
import theme from './components/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact='/' component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
