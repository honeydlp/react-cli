
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

const _mm    = new MMUtile();
const _user  = new User();

const Login = React.createClass({
    getInitialState() {
        return {
            username : '',
            password : '',
            redirect : ''
        };
    },
    // 点击登录
    onLogin(e){
        e.preventDefault();
        let loginInfo   = {
                username: this.state.username,
                password: this.state.password
            },
            checkLogin  = _user.checkLoginInfo(loginInfo);
        if(checkLogin.state){
            // 登录成功后进行跳转
            _user.login(loginInfo).then(res => {
                _mm.setStorage('userInfo', res);
                window.location.href = this.state.redirect || '#/home';
            }, errMsg => {
                _mm.errorTips(errMsg);
            });
        }else{
            _mm.errorTips(checkLogin.msg);
        }
    },
    // 输入框内容变化时，更新state中的字段
    onInputChange(e){
        let ele         = e.target,
            inputValue  = e.target.value,
            inputName   = e.target.name;
        this.setState({
            [inputName] : inputValue
        });
    },
    render() {
        return (
            <div className="row">
                登陆
            </div>
        );
    }
});

export default Login;