import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'    //react优化

class FormButton extends React.Component{
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div className="form-button {this.props.butStyle?this.props.butStyle:'default'}" style="cursor:pointer">
        {this.props.children}
      </div>
    )
  }
}

export default FormButton