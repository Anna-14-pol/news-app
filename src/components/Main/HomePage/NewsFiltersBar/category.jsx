import React from 'react';

class CategoryDrop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: '',
        };
      }
    
      handleChange =(event) =>{
        const value = event.target.value;
        this.setState({value});
        this.props.onCategoryChange(value);
      }
    
      render() {
        return (
              <select value={this.state.value} onChange={this.handleChange}>
                <option value='general'>ogólna</option>  
                <option value="business">biznes</option>
                <option value="entertainment">rozrywka</option>
                <option value="health">zdrowie</option>
                <option value="science">nauka</option>
                <option value="sport">sport</option>
                <option value="technology">technologia</option>
              </select>
        );
      }
};

export default CategoryDrop;