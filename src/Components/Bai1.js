import React, {Component} from 'react';
class Bai1 extends Component{
  render(){
    //khai báo project
    var info ={
      id: 1,
      name: 'Trần Hải Yến',
      old: 24,
      work:'IT'
    };
    let array ={
      name:'Các chú ý trong aray',
      ifo:'Không return cho array, khai báo 1 biến rồi đổ array vào, return biến đó!',
      ifo1:'Dùng hàm "map" xuất array với điều kiện if',
      ifo2:'Viết function để xuất project'
    };
    return(
            <div className="col-sm-6 col-xs-12" id="bai1">
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <h1 className="text-center">Bài 1: Project</h1>
                </div>
                <div className="col-sm-12 col-xs-12">
                    <div className="panel panel-danger">                    
                      <div className="panel-heading">
                        Thông tin cá nhân <br />
                        (Lấy thông tin kiểu khai báo project)
                      </div>
                      <div className="panel-body">
                      <h4><b>Tên:</b> {info.name}</h4>
                      <h4><b>Tuổi:</b> {info.old}</h4>
                      <h4><b>Công viêc:</b> {info.work}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12">
                    <div className="panel panel-danger">                    
                      <div className="panel-heading">
                        {array.name}
                      </div>
                      <div className="panel-body">
                      <h4>{array.ifo}</h4>
                      <h4>{array.ifo1}</h4>
                      <h4>{array.ifo2}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
  };
};
export default Bai1;