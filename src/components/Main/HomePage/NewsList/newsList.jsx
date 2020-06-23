import './newsList.css';
import React from 'react';
import NewsCard from './newsCard';

const NewsList = (props) => (
<div id='NewsList'>
    {props.articles.map((item)=>(
        <NewsCard 
              urlToImage={item.urlToImage} 
              title={item.title} 
              publishedAt={item.publishedAt}
              description={item.description}
              url={item.url}
              sourceName={item.source.name}
              />
    ))}
</div> 
);

export default NewsList;