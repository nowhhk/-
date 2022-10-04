import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TweetService from './service/tweet';

const baseURL = process.env.REACT_APP_BASE_URL;
const tweetService = new TweetService(baseURL);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App tweetService={tweetService} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
