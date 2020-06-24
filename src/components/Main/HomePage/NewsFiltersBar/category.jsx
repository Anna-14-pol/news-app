import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'general', value: 'general' },
  { key: 2, text: 'business', value: 'business' },
  { key: 3, text: 'entertainment', value: 'entertainment' },
  { key: 4, text: 'health', value: 'health' },
  { key: 5, text: 'science', value: 'science' },
  { key: 6, text: 'sport', value: 'sport' },
  { key: 7, text: 'technology', value: 'technology' },
]

const CategoryDrop = ({ category, onCategoryChange }) => (
 
  <Dropdown
    placeholder="Select category"
    options={options}
    selection
    onChange={(event, data) => onCategoryChange(data.value)}
  />
);

export default CategoryDrop;





    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       value: '',
    //     };
    //   }
      
    
    //   handleChange =(e, v) =>{
    //     changeMethod(e, v)
    //     const value = e.target.value;
    //     this.setState({value});
    //     this.props.onCategoryChange(value);
      
    //   }
    
    //   render() {
    //     return (
            

              // <select value={this.state.value} onChange={this.handleChange}>
              //   <option value='general'>ogólna</option>  
              //   <option value="business">biznes</option>
              //   <option value="entertainment">rozrywka</option>
              //   <option value="health">zdrowie</option>
              //   <option value="science">nauka</option>
              //   <option value="sport">sport</option>
              //   <option value="technology">technologia</option>
              // </select>
    //     );
    //   }
    // };

