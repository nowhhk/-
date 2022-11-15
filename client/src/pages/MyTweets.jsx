import React from 'react';
import Tweets from '../components/Tweets';
import { useParams } from 'react-router-dom';

const MyTweets = ({ tweetService, user }) => {
  const { username } = useParams();
  return <Tweets tweetService={tweetService} username={username} user={user} />;
};

export default MyTweets;
