import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Car from './pages/Car/car';
import News from './pages/News';
import Video from './pages/Video';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/car" component={Car} />
          <Route path="/video" component={Video} />
          <Route exact path="/news" component={News} />
          <Redirect to={"/news"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
