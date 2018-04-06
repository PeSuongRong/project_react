import React, {Component} from 'react';
class Bai2 extends Component{
  render(){
    //array
    var product = [
      {
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
      }
    ];
    //xuất mảng
    let view_product = product.map((product, index)=>{
      let list ='';
      if(product.status){
        list=(<div className="col-xs-6 col-sm-6" key={product.id}>
              <div className="panel panel-danger">
                <div className="panel-heading">
                  {product.name}
                </div>
                <div className="panel panel-body">
                  <img src={product.img} alt={product.name} />
                  <h4>Giá: {product.price}</h4> 
                  <h4>Tình trạng: {product.status ? 'Còn hàng' : 'Hết hàng'}</h4>
                </div>
              </div>
            </div>
            );
      }
      return list;
    });
    return(
            <div className="col-sm-6 col-xs-12">
            <h1 className="text-center">Bài 2: Array</h1>
              <div className="row">
                  {view_product}
              </div>
            </div>
          );
  };
};
export default Bai2;