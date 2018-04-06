import React, {Component} from 'react';
class Header extends Component{
  render(){
    return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <a className="navbar-brand" >Hải Yến</a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="dropdown active"><a className="dropdown-toggle" data-toggle="dropdown" >Danh sách <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#bai1">Bài 1+2</a></li>
                      <li><a href="#bai3">Bài 3</a></li>
                      <li><a href="#bai4">Bài 4</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#color-project"> Project color</a>
                  </li>
                </ul>
              </div>
            </nav>
            );
  };
};
export default Header;