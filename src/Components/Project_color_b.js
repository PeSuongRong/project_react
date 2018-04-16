import React, {Component} from 'react';
class Projectcolorb extends Component{
  onchangefontSize(value){
    this.props.onReceiveFont(value);
  };
  onchangereset = () =>{
    this.props.onReset();
  }
  render(){
    return(
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h5>Font chữ: {this.props.fontsize_prop}</h5>
              </div>
              <div className="panel-body">
                <button 
                  className="btn btn-danger"
                  onClick ={()=> this.onchangefontSize(-2)}
                >Giảm
                </button> &nbsp;
                <button 
                  className="btn btn-primary"
                  onClick ={()=> this.onchangefontSize(2)}
                >Tăng</button>  &nbsp;
                <button 
                  className="btn btn-default"
                  onClick ={ ()=> this.onchangereset()}
                >Reset</button>
              </div>
            </div>
            );
  }
};
export default Projectcolorb;