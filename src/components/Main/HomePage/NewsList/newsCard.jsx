import './newsCard.css';
import React from 'react';


const NewsCard = (props) => (
    <div className='NewsCard'  key={props.id}>
        <img src={props.urlToImage} alt=''/>
        <div className='NewsCard-content'  key={props.id}>
            <h2>{props.title}</h2>
            {/* <p dangerouslySetInnerHTML={{__html:props.publishedAt}} /> */}
            <p>{props.description}</p>
            <div className='NewsCard-content-footer'>
                <p>źródło: {props.sourceName}</p>
                <a href={props.url} target='_blank'>Zobacz więcej</a>
            </div>    
        </div>
    </div>
);

export default NewsCard;