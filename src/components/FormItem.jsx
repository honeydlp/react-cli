import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'    //react优化

class FormItem extends React.Component{
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  getVal(e){
    var value = e.target.value;
    this.props.getSonVal(value);
  }
  render(){
    return (
      <div className="form-item">
        <div>
           <label>
              <span>{this.props.formItemName}</span>
           </label>
           <input type={this.props.formType} placeholder={this.props.formTipText} onChange={this.getVal.bind(this)} />
        </div>
      </div>
    )
  }
}

export default FormItem