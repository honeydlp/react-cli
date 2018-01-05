import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'    //react优化
class Usersbill extends React.Component{
  constructor(props,context){
    super(props,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div className="">
        
      </div>
    )
  }
}

export default Usersbill