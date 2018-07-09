import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';

import NotFound from '../view/404';
// import Home from '../view/Home/home';
// import Second from '../view/Second/second';
// import Third from '../view/Third/third';

const Home =asyncComponent(()=>import("../view/Home/home"))
const Second =asyncComponent(()=>import("../view/Second/second"))
const Third = asyncComponent(()=>import("../view/Third/third"))

class RouteMap extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/Second'>Second</Link>
          <Link to='/Third'>Third</Link>
          <Link to='/Four'>Four</Link>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Second' component={Second}/>
            <Route exact path='/Third' component={Third}/>
            <Route path="/*" component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default RouteMap;
