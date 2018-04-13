import React, {Component} from 'react';
class Projectcolora extends Component{
  constructor(props){
    super(props);
    this.state = {
      colors:['red', 'green', 'blue', 'yellow', 'pink']
    };
  };
  showColor(color){
    return {
            backgroundColor:color
          };
  };
  setActiveColor(color){
    this.props.onReceiveColor(color);
  }
  render(){
    var elementcolor = this.state.colors.map((color,index) => {
      return (
              <li key={index} 
                  style={this.showColor(color)} 
                  className={this.props.color_prop === color ? 'active' : ''}
                  onClick={()=> this.setActiveColor(color)}
              >
              </li>
              ); 
    });
    return(
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h5>Chọn màu</h5>
        </div>
        <div className="panel-body">
          <ul className="color">
            {elementcolor}
        </ul>
        </div>
      </div>
    );
  }
};
export default Projectcolora;