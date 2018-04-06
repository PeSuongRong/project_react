import React, {Component} from 'react';
class Bai3 extends Component{
//Cach1:constructor
//  constructor(props){
//    super (props);
//    this.clickcart = this.clickcart.bind(this);
//  };
//  clickcart(){
//    alert(this.props.name + '+' + this.props.gia);
//  };

//cách 2
  clickcart = () =>{
    alert(this.props.name + '-' + this.props.gia);
  };
  clicktt(text){
    alert(text + 'để xem' + this.props.name);
  };
  render(){
    return(
            <div className="col-sm-3 col-xs-6" key="">
              <div className="product">
                <img className="fix-width" src={this.props.img} alt={this.props.name} />
                <h4>Tên: {this.props.name}</h4>
                <h4>Giá: {this.props.gia}</h4>
                <h4>Tình trạng: {this.props.trangthai}</h4>
                <button className="btn btn-danger" onClick={this.clickcart}>Mua hàng</button>
                <button className="btn btn-primary" onClick ={() =>{this.clicktt('Vui lòng đăng nhập!');}}>Xem chi tiết</button>
              </div>
            </div>
          );
  }
};
export default Bai3;