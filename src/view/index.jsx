import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Store } from '../store/store';
import RouteMap from '../routers/routeMap';

export default class App extends Component {
  render () {
    return (
      <Provider store={Store}>
        <RouteMap/>
      </Provider>
    );
  }
}
