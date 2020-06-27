import './insurance.css';
import React, {useState, useEffect, useCallback, useContext} from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
import LanguageContext from '../../languageContext';
 
import "react-datepicker/dist/react-datepicker.css";
import NewsList from './HomePage/NewsList/newsList';


const InsurancePage = () => {
    const[startDate,setStartDate] = useState(moment().subtract(1, 'months').toDate());
    const[endDate,setEndStartDate] = useState(moment().toDate());
    const [results, setResults] = useState(null);
    const lang = useContext(LanguageContext);

    const fetchArticles = useCallback(() =>{
        if (startDate>endDate) return alert('niewłaściwe daty');
        
        fetch(`http://localhost:4000/insurance-news?from=${startDate.toISOString()}&to=${endDate.toISOString()}&language=${lang}`) 
        .then(response=> response.json())
        .then(res=> {
            setResults(res);
        });
    },[startDate, endDate, lang]);

    // useEffect(() => {
    //     setPage(1);
    // }, [startDate, endDate]);

    useEffect(()=>{ fetchArticles(); }, [fetchArticles]);

    if (!results) return null;

    return(
    <div className='Insurance'>
        <div>
            <label>Start date: </label>
            <DatePicker selected={startDate} onChange={setStartDate} dateFormat='dd-MM-yyyy' maxDate={endDate}/>
        </div>
        <div>
            <label>End date: </label>
            <DatePicker selected={endDate} onChange={setEndStartDate} dateFormat='dd-MM-yyyy' maxDate={new Date()} />
        </div>
       {results ? (<NewsList articles={results.articles} />) : null}
    </div>
);
}

export default InsurancePage;