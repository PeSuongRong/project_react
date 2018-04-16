import React, { Component } from 'react';
import Header from './Components/Header';
import Bai1 from './Components/Bai1';
import Bai2 from './Components/Bai2';
import Bai3 from './Components/Bai3';
import Bai4 from './Components/Bai4';
import Projectcolor from './Components/Project-color';

class App extends Component {
  render() {
    var lisSamSung =[
      {
        id:1,
        name:'Samsung j3',
        src:'https://cdn3.tgdd.vn/Products/Images/42/73908/samsung-galaxy-j3-6-300x300.jpg',
        price:4500000,
        status:true
      },
      {
        id:2,
        name:'Samsung j5',
        src:'https://i2.vitalk.vn/thread/c500x300/2017/12/22/1859409995_1513921038.png',
        price:5500000,
        status:false
      },
      {
        id:3,
        name:'Samsung j7',
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaR8YLG0glk8JJ6vngesIHU7In9RZwlBsAcksfIyadJIKQC5Mu',
        price:6500000,
        status:true
      },
      {
        id:4,
        name:'Samsung s9',
        src:'https://cdn.tgdd.vn/Products/Images/42/142465/samsung-galaxy-a8-plus-2018-hh-600x600.jpg',
        price:2500000,
        status:true
      }
    ];
    let samsung = lisSamSung.map((lisSamSung, index) =>{
      return(
        <Bai3
          name = {lisSamSung.name}
          img = {lisSamSung.src}
          gia={lisSamSung.price}
          trangthai={lisSamSung.status ? 'Còn hàng' : 'Hết hàng'}
          key ={lisSamSung.id}
        >       
        </Bai3>);
    });
    return (
            <div>
                <div>
                  <Header />
                </div>
                <div className="container">
                  <div className="row">
                    <br /> <br /> <br />
                    <Bai1></Bai1>
                    <Bai2></Bai2>
                    <div className="col-sm-12 col-xs-12">
                      <hr />
                    </div>
                  </div>
                  <div className="row" id="bai3">
                    <div className="col-sm-12 col-xs-12 text-center">
                      <h1>Bài 3:Prop & Bắt sự kiện</h1>
                      <h4>(có 2 cách bắt sự kiện, 1 là viết hàm + constructor, 2 là viết dạng ten_fn=()....)</h4>
                      <h4>(onClick ko, có tham số. Có tham số phải dùng onClick dạng array)</h4>
                    </div>
                    {samsung}
                    <div className="col-sm-12 col-xs-12">
                      <hr />
                    </div>
                  </div>
                  <Bai4></Bai4>
                  <Projectcolor></Projectcolor>
                </div>
            </div>
    );
  }
};
export default App;
