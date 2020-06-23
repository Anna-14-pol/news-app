import React from 'react';
import { Flag, Segment } from 'semantic-ui-react';

// const languages = ['pl','pt','us','ro'];
class LanguagesDrop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: '',
        };
      }
    
      onValueChange =(event) =>{
        const value = event.target.value;
        this.setState({value});
        this.props.onLanguageChange(value);
      }
    
      render() {
        return (
         
          <Segment value={this.state.value} onChange={this.onValueChange}>
          <Flag name='pl' value='pl' />
          <Flag name='pt' value='pt' />
          <Flag name='us' value='us' />
          <Flag name='ro' value='ro' />
          </Segment>
        
        );
      }};

export default LanguagesDrop;



{/* <select value={this.state.value} onChange={this.onValueChange}>
                  {languages.map((lang) =>(
                      <option key={lang} value={lang}>{lang}</option>
                  ))}
              </select> */}