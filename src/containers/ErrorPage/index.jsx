
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'    //react优化
class ErrorPage extends React.Component{
  constructor(props,context){
    super(props,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div className="">
        找不到了
      </div>
    )
  }
}

export default ErrorPage