import React, {Component} from 'react';

class Bai5 extends Component{
  constructor(props){
    super(props);
    this.state ={
      txtName:'Trần Hải Yến',
      txtAddress:'Sư vạn hạnh',
      txtDescribe:'Baby kute',
      txtselect:0,
      choose:'it',
      check:false
    };
//    this.onHandleChange = this.onHandleChange.bind(this);
//    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  onHandleChange = (values) =>{
    var target = values.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    });
  }
  onHandleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);
  }
  render(){
    return(
            <div className="row">
              <div className="col-sm-12 col-xs-12"><hr /></div>
              <div className="col-sm-6 col-xs-12">
              <h1>Lý thuyết form</h1>
              <h4>1.Bien.preventDefault ' xóa load mặc định khi click submit '</h4>
              <h4>2.Thay đổi giá trị trong state: this.setState</h4>
              <h4>3.Lấy giá trị value của nhiểu input, textarea: <br />
                <ul>
                <li>Tạo biến hứng target: var bien = bien1.target</li>
                <li>Tạo biến hướng giá trị muốn lưu: var bien2 = bien.giatritrongtarget</li>
                <li>Lấy giá trị value: var bien3 = bien.value</li>
                <li>Thay đổi state: this.setState()</li>
                </ul>
              </h4>
              <h4>4.Tên biến trong state phải giống tên của "name" trong input hoặc textarea</h4>
              <h4>Khi dùng onchange={} thì cũng nên dùng value={}</h4>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Form</h3>
                  </div>
                  <div className="panel-body">
                    <form onSubmit={this.onHandleSubmit}>
                      <div className="form-group">
                        <label>Tên:</label>
                        <input
                          type="text" 
                          className="form-control" 
                          name="txtName"
                          onChange={this.onHandleChange}
                          value={this.state.txtName}
                        />
                      </div>
                      <div className="form-group">
                        <label>Địa chỉ:</label>
                        <input
                          type="text" 
                          className="form-control" 
                          value={this.state.txtAddress}
                          name="txtAddress"
                          onChange={this.onHandleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Mô tả:</label>
                        <textarea
                          type="text" 
                          className="form-control" 
                          name="txtDescribe"
                          value={this.state.txtDescribe}
                          onChange={this.onHandleChange}
                        />
                      </div>
                      <div className="form-group">
                        <select className="form-control" name="txtselect" value={this.state.txtselect} onChange={this.onHandleChange}>
                        <option value={1}>Nam</option>
                        <option value={0}>Nữ</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label><input type="radio" value="it" name="choose" onChange={this.onHandleChange} checked={this.state.choose === "it"}/>IT</label> <br />
                        <label><input type="radio" value="seo" name="choose" onChange={this.onHandleChange} checked={this.state.choose === "seo"}/>SEO</label>
                      </div>
                      <div className="form-group">
                        <label><input type="checkbox" name="check" onChange={this.onHandleChange} value={true} checked={this.state.check === true}/>Có xe</label>
                      </div>
                      <div className="form-group">
                        <button 
                          type="submit" 
                          className="btn btn-primary">
                          Lưu
                        </button> &nbsp; 
                        <button type="reset" className="btn btn-danger">reset</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    );
  };
};
export default Bai5;