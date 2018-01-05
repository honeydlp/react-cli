
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'    //react优化

import FormItem from '@/components/FormItem'
import FormButton from '@/components/Button'

class Login extends React.Component{
  constructor(props,context){
    super(props,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      text:'',
      passward:'',
    }
  }
  getTextVal(val){
    this.setState({
      text : val
    })
  }
  getPassVal(val){
    this.setState({
      passward : val
    })    
  }
  render(){
    return (
      <div className="login">
        <div className="warp">
          <h3>请登录</h3>
          <FormItem formItemName="用户名：" formType="text" formTipText="请输入用户名" getSonVal={this.getTextVal.bind(this)}/>
          <FormItem formItemName="密码" formType="password" formTipText="请输入密码" getSonVal={this.getPassVal.bind(this)}/>
          <FormButton>登录</FormButton>
        </div>
      </div>
    )
  }
}

export default Login