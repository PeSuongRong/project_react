import React, {Component} from 'react';
import Projectcolora from './Project_color_a';
import Projectcolorb from './Project_color_b';

class Projectcolor extends Component{
  constructor(props){
    super(props);
    this.state={
       color: "red",
       fontSize: 16
     };
//   cách 1: this.onSetColor = this.onSetColor.bind(this);
  }
// cách 1  onSetColor(params){
//    this.setState({
//      color:params
//    });
//  }
  onSetColor = (params) =>{
    this.setState({
      color:params
    });
  };
  onSetfontSize = (value) =>{
    if(this.state.fontSize + value >=8 && this.state.fontSize + value <=32){
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
  };
  onReset = (value) =>{
    if(value){
     this.setState={
       color: "red",
       fontSize: 16
     }; 
    };
  }
  render(){
    return(
      <div className="row" id="color-project">
        <div className="col-sm-12 col-xs-12">
          <hr />
        </div>
        <div className="col-sm-12 col-xs-12 text-center">
          <h1>Project text change color</h1>
        </div>
        <div className="col-sm-6 col-xs-12">
          <Projectcolora 
            color_prop={this.state.color}
            onReceiveColor={ this.onSetColor} 
          >
          </Projectcolora>
        </div>
        <div className="col-sm-6 col-xs-12">
          <Projectcolorb 
            fontsize_prop={this.state.fontSize}
            onReceiveFont={this.onSetfontSize}
            onReset={this.onReset}
          >
          </Projectcolorb>
        </div>
        <div className="col-sm-12 col-xs-12">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <h4><b>Màu: {this.state.color}</b></h4>
              <h4><b>Font-size: {this.state.fontSize}</b></h4>
            </div>
            <div className="col-sm-6 col-xs-12">
                <input 
                  className="form-control" 
                  placeholder="Trần Hải Yến" 
                  style={{borderColor:this.state.color , fontSize:this.state.fontSize}}                
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Projectcolor;