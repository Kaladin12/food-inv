import Items from './components/Items';
import NewItem from './components/NewItem';
import NavBar from './components/Navbar';
import ZeroExistencies from './components/ZeroExistencies';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="container p-8">
      <div className="content" id="content">
        <Router>
          <NavBar/>
            <Switch>
              <Route exact path="/home" component={Items}/>
              <Route path="/create" component={NewItem} />
              <Route path="/zero" component={ZeroExistencies} />
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
