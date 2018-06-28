import React, { Component } from 'react';
import { Input } from 'antd';
import { login, getSceneInfo } from '../../services/userService';

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
