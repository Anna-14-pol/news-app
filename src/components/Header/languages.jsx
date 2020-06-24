import React from 'react';
import { Dropdown } from 'semantic-ui-react';

// const languages = ['pl','pt','us','ro'];

const countryOptions = [
  { key: 'pl', value: 'pl', flag: 'pl', text: 'Poland' },
  { key: 'pt', value: 'pt', flag: 'pt', text: 'Portugal' },
  { key: 'us', value: 'us', flag: 'us', text: 'USA' },
  { key: 'ro', value: 'ro', flag: 'ro', text: 'Romania' },
]
const LanguagesDrop = ({ language, onLanguageChange}) => (
  <Dropdown
  placeholder='Select Country'
  fluid
  search
  selection
  options={countryOptions}
  onChange={(event, data) => onLanguageChange(data.value)}
/>

);
 

export default LanguagesDrop;





//     constructor(props) {
//         super(props);
//         this.state = {
//           value: '',
//         };
//       }
    
//       onValueChange =(event) =>{
//         const value = event.target.value;
//         this.setState({value});
//         this.props.onLanguageChange(value);
//       }
    
//       render() {
//         return (
  // <select value={this.state.value} onChange={this.onValueChange}>
  // //                   {languages.map((lang) =>(
  // //                       <option key={lang} value={lang}>{lang}</option>
  // //                   ))}
  // //               </select> 
//         
        
//         );
//       }};

// export default LanguagesDrop;



//  