import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Third extends Component {
  constructor (props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render () {
    return (
      <h1>Third</h1>
    );
  }
}

export default Third;
