import React, { Component } from 'react'
import json1 from '../ejemplo/archivo.json'
import ButtonMenu from './buttonmenu'


class Menu extends Component{
  constructor(props){
    super(props);
    this.state={
    json1:json1.Breakfast,
    
  }

}

  render(){
    
    return <div>
     
      {this.state.json1.map((element) => <ButtonMenu clickBtn={this.clickBtn2} key={element.id}  productProp={element}  />)}

    </div>
  }
}

export default Menu