import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UploadPage from './pages/UploadPage'
import SummaryPage from './pages/SummaryPage'

const App = () => (
  <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route path="/summary">
            <SummaryPage />
          </Route>
          <Route path="/">
            <UploadPage />
          </Route>
        </Switch>
      </div>
    </Router>
);

export default App;