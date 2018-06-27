import React, { Component } from 'react';
import { Input } from 'antd';
import {login,getSceneInfo} from '../../services/userService';

class Home extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      username: '',
      password: ''
    };
  }
  render () {
    let {username, password} = this.state;
    return (
      <div>
        <div>Hello World</div>
        <Input placeholder="请输入账号" value={username} onChange={e => { this.setState({username: e.target.value}); }}/>
        <Input placeholder="请输入密码" value={password} onChange={e => { this.setState({password: e.target.value}); }}/>
        <div onClick={this.handleClick.bind(this)}>提交</div>
      </div>
    );
  }
  handleClick () {
    let {username, password} = this.state;
    getSceneInfo();
  }
}

export default Home;
