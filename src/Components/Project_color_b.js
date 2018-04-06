import React, {Component} from 'react';
class Projectcolorb extends Component{
  render(){
    return(
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h5>Font chữ: 13px</h5>
              </div>
              <div className="panel-body">
                <button className="btn btn-danger">Giảm</button> &nbsp;
                <button className="btn btn-primary">Tăng</button>  &nbsp;
                <button className="btn btn-default">Reset</button>
              </div>
            </div>
            );
  }
};
export default Projectcolorb;