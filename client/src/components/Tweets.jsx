import React, { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import NewTweetForm from './NewTweetForm';
import TweetCard from './TweetCard';

const Tweets = ({ tweetService }) => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    tweetService
      .getTweets()
      .then((tweets) => setTweets([...tweets]))
      .catch(onError);
  }, [tweetService]);

  const onError = (error) => {
    setError(error.toString());
    setTimeout(() => {
      setError('');
    }, 3000);
  };
  return (
    <>
      <NewTweetForm tweetService={tweetService} />
      <ul className="w-full">
        {tweets.map((tweet) => (
          <TweetCard tweet={tweet} />
        ))}
      </ul>
    </>
  );
};

export default Tweets;
