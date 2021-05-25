import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import Layout from './components/Layout/Layout.jsx';


function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact='/' component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
