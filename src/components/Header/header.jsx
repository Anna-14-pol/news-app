import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './header.css';
import {Link} from 'react-router-dom';
import LanguagesDrop from './languages';

class Header extends Component{   
  state = { activeItem: 'home'};

  handleItemClick = ( e, {name}) => this.setState({ activeItem: name});

  render(){
    const { activeItem } = this.state;
    return(
      
        <Menu>
          <Menu.Item as={Link} to='/' 
          name='home' active={activeItem==='home'} onClick={this.handleItemClick}>
            Home
          </Menu.Item>
          <Menu.Item as={Link} to='/insurance' 
          name='insurance news' active={activeItem==='insurance news'} 
          onClick={this.handleItemClick}>
            Insurance News
          </Menu.Item>
          {/* <Menu.Item as={Link} to='/help' 
          name='help' active={activeItem==='help'} onClick={this.handleItemClick}>
            Help
          </Menu.Item> */}
          <Menu.Menu position='right'>
            <Menu.Item>
              <LanguagesDrop onLanguageChange={this.props.onLanguageChange} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    );
  }
}

export default Header;