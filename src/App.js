import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component';
import Page404 from './pages/page404/page404.component';
import LoadTodos from './pages/load-todos/load-todos.component';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/todos/:todoId" component={LoadTodos} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
