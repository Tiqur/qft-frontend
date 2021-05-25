import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact='/' component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
