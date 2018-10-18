import React, { Component } from 'react';
import { Input } from 'antd';
import { login, getSceneInfo } from '../../services/userService';
import * as Immutable from 'immutable'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user'
import { promiseAll } from '../../services/userService'

import './home.less'

class SonHome extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    console.log('ni hao a')
  }
}

class Home extends SonHome {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      password: ''
    };
  }
  componentDidMount() {
    super.componentDidMount && super.componentDidMount()
    var alpha = Immutable.Map({ a: 1, b: 2, c: 3, d: 4 });
    let set = Immutable.Set([1, 2, 3, 3]);
    let Repeat = Immutable.Repeat(1, 5).toJS();
    let Range = Immutable.Range(1, 100, 3).toJS();
    let a = Immutable.fromJS({ a: 1, b: 2, c: 3, d: 4 }, function (key, value, path) {
      return value.toList()
    })

    const map1 = Immutable.List([1, 2, 3, 4])
    const map2 = Immutable.Map({ a: 1, b: 2, c: 3, d: 4 })
    let s = Symbol();
    console.log(typeof s);
    console.log(map2.set('a', 10).toObject(), map1.get(1))
    // promiseAll();
    const props = {
      user: {
        posts: [
          { title: 'Foo', comments: ['Good one!', 'Interesting...'] },
          { title: 'Bar', comments: ['Ok'] },
          { title: 'Baz', comments: [] }
        ],
        comments: ['Good one!', 'Interesting...']
      }
    }
    const get = (p, o) => p.reduce((xs, x) => {
      // console.log(xs, x)
      return (xs && xs[x]) ? xs[x] : null
    }, o)
    console.log(get(['user', 'posts', 0, 'comments'], props))
    console.log(get(['user', 'post', 0, 'comments'], props))
  }
  render() {
    let { username, password } = this.state;
    return (
      <div>
        <div className='asd'>Hello World</div>
        <Input placeholder="请输入账号" value={username} onChange={e => { this.setState({ username: e.target.value }); }} />
        <Input placeholder="请输入密码" value={password} onChange={e => { this.setState({ password: e.target.value }); }} />
        <div onClick={this.props.handleClick.bind(this)}>提交</div>
      </div>
    );
  }
  async handleClick() {
    let { username, password } = this.state;
    let { userActions } = this.props;
    userActions.getSceneInfo();
    click
    oDiv = document.getElementsByClassName('asd')[0];
    // function click(fn) {
    //   oDiv.addEventListener('click', (e) => {
    //     let ev = e || event
    //     if (!fn.call(this, ev)) {apply

    //     }
    //   }, false)
    // }

  }
}

export default connect((state, props) => ({
}), (dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch),
  handleClick() {
    console.log('click')
    dispatch({ type: 'click' })
  }
}))(Home);
