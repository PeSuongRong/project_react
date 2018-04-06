import React, {Component} from 'react';
import Projectcolora from './Project_color_a';
import Projectcolorb from './Project_color_b';

class Projectcolor extends Component{
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
                <Projectcolora></Projectcolora>
              </div>
              <div className="col-sm-6 col-xs-12">
                <Projectcolorb></Projectcolorb>
              </div>
              <div className="col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <h4><b>Màu: Đỏ</b></h4>
                    <h4><b>Font-size: 12px</b></h4>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                      <input className="control-form" placeholder="Trần Hải Yến" />
                  </div>
                </div>
              </div>
            </div>
            );
  }
};
export default Projectcolor;