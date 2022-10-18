import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TweetService from './service/tweet';
import HttpClient from './network/http';
import AuthService from './service/auth';
import TokenStorage from './service/token';

const baseURL = process.env.REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient(baseURL);
const tweetService = new TweetService(httpClient, tokenStorage);
const authService = new AuthService(httpClient, tokenStorage);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App tweetService={tweetService} authService={authService} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
