import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Second extends Component {
  constructor (props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render () {
    return (
      <h1>Second</h1>
    );
  }
}

export default Second;
