const superagent = require('superagent');
const NEWS_API_URL = 'https://newsapi.org/v2';
const TOP_HEADLINES_ENDPOINT_PATH = '/top-headlines';
const API_KEY = 'bcc343e9b79f45de8bdf5f326954ff10';

const EVERYTHING_ENDPOINT_PATH = '/everything';


const getMainArticles = (query) => superagent
.get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`)
.query({country: 'pl',...query, apiKey: API_KEY, pageSize: 6 });

const getInsuranceNews = (query) => superagent
.get(`${NEWS_API_URL}${EVERYTHING_ENDPOINT_PATH}`)
.query({language: 'pl',...query, apiKey: API_KEY, q: 'insurance', pageSize: 6});



module.exports ={
    getMainArticles,
    getInsuranceNews,
};
