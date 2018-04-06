import React, {Component} from 'react';
class Bai4 extends Component{
  constructor(props){
    super(props);
    this.state = {
      ss:[{
        id:1,
        name:'samsung j7 pro',
        img:'https://cdn.tgdd.vn/Products/Images/42/112970/samsung-galaxy-j7-plus-hh-600x600.jpg',
        price:6490000,
        status:true
      },
      {
        id:2,
        name:'iphone 7',
        img:'https://cdn2.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-400x400.jpg',
        price:10000000,
        status:true
      },
      {
        id:3,
        name:'oppo',
        price:5000000,
        status:false
      }],
      active:true
    };
  };
  fclist = () =>{
 //Cách 1
//    if(this.state.active === true){
//      this.setState({
//        active:false
//      });
//    }
//    else{
//      this.setState({
//        active:true
//      });
//    }

//Cách 2
this.setState({
  active: !this.state.active
});
  }
  render(){
    let showss = this.state.ss.map((ss, index)=>{
     return(<tr key={index}>
            <td>{index}</td>
            <td>{ss.name}</td>
            <td><span className="label label-danger">{ss.price}</span></td>
            <td>{ss.status ? 'còn hàng' : 'hết hàng'}</td>
          </tr>
              );
    });
    return(
            <div className="row" id="bai4">
              <div className="col-sm-12 col-xs-12 text-center">
                <h1>Bài 4:Refs & state</h1>
              </div>
              <div className="col-sm-6 col-xs-12">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  {showss }
                </tbody>
              </table>
              <button className='btn btn-info' onClick={this.fclist} >Danh sách sản phẩm {this.state.active === true ? 'mới cập nhật' : 'chưa cập nhật'} </button>
              </div>
              <div className="col-sm-6 col-xs-12">
              <table className="table table-bordered table-striped">
              <thead>
                <tr>
                <td>Props</td>
                <td>State</td>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>chỉ liên quan constructor(props){}</td>
                  <td>Chỉ được viết trong constructor</td>
                </tr>
                <tr>
                  <td>Nhận dữ liệu từ bên ngoài(thằng cha): this.props.key</td>
                  <td>Dữ liệu nội bộ</td>
                </tr>
                <tr>
                  <td>Không thể thay đổi giá trị</td>
                  <td>Có thể thay đổi giá trị</td>
                </tr>
                <tr>
                  <td>Không phụ thuộc constructor</td>
                  <td>private trong constructor</td>
                </tr>
              </tbody>
            </table>
              </div>
            </div>
          );
  }
};
export default Bai4;