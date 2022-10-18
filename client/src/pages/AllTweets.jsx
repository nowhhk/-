import React from 'react';
import Tweets from '../components/Tweets';

const AllTweets = ({ tweetService, user }) => (
  <Tweets tweetService={tweetService} user={user} />
);

export default AllTweets;
