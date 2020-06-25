import'./home.css';
import React from 'react';
import NewsList from './NewsList/newsList';
import NewsFiltersBar from './NewsFiltersBar/newsFiltersBar';
import LanguageContext from '../../../languageContext';

class HomePage extends React.Component {
    static contextType = LanguageContext;
    constructor(props){
        super(props);

        this.state = {
            results: null,
            category: null,
            lang: 'pl',
        }
    }

    componentDidMount() {
        this.getArticles();
        this.setState({lang: this.context});
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log(this.context);
        if (prevState.category!==this.state.category || prevState.lang !== this.state.lang) this.getArticles();
        if (prevState.lang !== this.context) this.setState({ lang: this.context}); 
        if (prevState.phrase !==this.state.phrase) this.getArticles();
        console.log(this.state);
    }

    getArticles(){
        const {category, lang, phrase} = this.state;
        const query = category ? `&category=${category}` : '';
        const queryWithPhrase = phrase ? `${query}&q=${phrase}` : query;

        fetch(`http://localhost:4000/articles?country=${lang}${queryWithPhrase}`)
        .then(response=> response.json())
        .then((results)=> this.setState({results}));
    }

    setCategory =(category) => this.setState({category});
    setSearchPhrase = (event) => {
    const phrase = event.target.value;
    if (phrase.length >= 3) this.setState({ phrase });
    if (!phrase || phrase === '') this.setState({ phrase: null });
    };

    render(){
        const {results} = this.state;
        if(!results) return null;
        return(
            <div id='HomePage'>
                <NewsFiltersBar onCategoryChange={this.setCategory} onSearchPhraseChange={this.setSearchPhrase} />
                <NewsList articles={results.articles}/>
            </div>
        )}
}

export default HomePage;