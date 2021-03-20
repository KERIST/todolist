import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/*<Route path="/todos/:todoId" component={} />
    <Route path="*" component={} />*/}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
