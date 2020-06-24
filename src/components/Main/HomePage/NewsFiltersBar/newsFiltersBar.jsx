import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import CategoryDrop from './category';

const NewsFiltersBar = (props) =>(
    <div id='NewsFiltersBar'>
        <CategoryDrop onCategoryChange={props.onCategoryChange}/>
        <Input placeholder='Search...' id='search-phrase' onChange={props.onSearchPhraseChange} />
    </div>
);

NewsFiltersBar.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
    onSearchPhraseChange: PropTypes.func.isRequired,
}

export default NewsFiltersBar;