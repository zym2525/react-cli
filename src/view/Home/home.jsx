import React, { Component } from 'react';
import { Input } from 'antd';
import { login, getSceneInfo } from '../../services/userService';
import * as Immutable from 'immutable'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user'

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      password: ''
    };
  }
  componentDidMount(){
    var alpha = Immutable.Map({a:1, b:2, c:3, d:4});
    let set = Immutable.Set([1,2,3,3]);
    let Repeat = Immutable.Repeat(1,5).toJS();
    let Range = Immutable.Range(1,100,3).toJS();
    let a=Immutable.fromJS({a:1, b:2, c:3, d:4},function (key, value, path) {
      return value.toList()
    })
  
    const map1 = Immutable.List([1,2,3,4])
    const map2 = Immutable.Map({a:1, b:2, c:3, d:4})
    
    console.log(map2.set('a',10).toObject(),map1.get(1))
  }
  render() {
    let { username, password } = this.state;
    return (
      <div>
        <div>Hello World</div>
        <Input placeholder="请输入账号" value={username} onChange={e => { this.setState({ username: e.target.value }); }} />
        <Input placeholder="请输入密码" value={password} onChange={e => { this.setState({ password: e.target.value }); }} />
        <div onClick={this.handleClick.bind(this)}>提交</div>
      </div>
    );
  }
  async handleClick() {
    let { username, password } = this.state;
    let { userActions } = this.props;
    userActions.getSceneInfo();
  }
}

export default connect((state, props) => ({
}), (dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch),
}))(Home);
