import'./home.css';
import React from 'react';
import NewsList from './NewsList/newsList';
import NewsFiltersBar from './NewsFiltersBar/newsFiltersBar';
import LanguageContext from '../../../languageContext';
import { Pagination } from 'semantic-ui-react';

class HomePage extends React.Component {
    static contextType = LanguageContext;
    constructor(props){
        super(props);

        this.state = {
            results: null,
            category: 'general',
            lang: 'pl',
            page: 1,
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
        if (prevState.page !==this.state.page) this.getArticles();
        console.log(this.state);
    }

    getArticles(){
        const {category, lang, page, phrase} = this.state;
        const query = category ? `&category=${category}` : '';
        const queryWithPhrase = phrase ? `${query}&q=${phrase}` : query;
        const queryWithPage = page ? `${queryWithPhrase}&q=${page}` : queryWithPhrase;


        fetch(`http://localhost:4000/articles?country=${lang}${queryWithPage}`)
        .then(response=> response.json())
        .then((results)=> this.setState({results}));
    }

    setCategory =(category) => this.setState({category});
    setSearchPhrase = (event) => {
    const phrase = event.target.value;
    if (phrase.length >= 3) this.setState({ phrase });
    if (!phrase || phrase === '') this.setState({ phrase: null });
    };
    onPageChange = (e, { activePage }) =>{
    this.setState ({page: activePage});
    }

    render(){
        const {results} = this.state;
        if(!results) return null;
        return(
            <div id='HomePage'>
                <NewsFiltersBar onCategoryChange={this.setCategory} onSearchPhraseChange={this.setSearchPhrase} />
                <NewsList articles={results.articles}/>
                {results&&results.totalResults? (<Pagination defaultActivePage={1}
                // firstItem={null}
                // lastItem={null}
                // pointing
                // secondary
                totalPages={Math.ceil(results.totalResults/6)}
                onPageChange={this.onPageChange}
                 />) : null}
                
            </div>
        )}
}

export default HomePage;