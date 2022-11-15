import React, { useState } from 'react';

const NewTweetForm = ({ tweetService, onError, onCreated }) => {
  const [tweet, setTweet] = useState('');
  const onChange = (event) => {
    setTweet(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    tweetService
      .postTweet(tweet)
      .then((created) => {
        setTweet('');
        onCreated(created);
      })
      .catch(onError);
  };

  return (
    <form className="my-4" onSubmit={onSubmit}>
      <input
        type="text"
        value={tweet}
        placeholder="What's Happening?"
        required
        autoFocus
        onChange={onChange}
        className="w-80 p-2 bg-transparent border-b focus:outline-none"
      />
      <button
        type="submit"
        className={`rounded-full px-2.5 py-1.5 bg-blue text-white fobt-bold ml-4
          ${tweet.length < 1 ? 'opacity-60' : 'opacity-100'}`}
      >
        Tweet
      </button>
    </form>
  );
};

export default NewTweetForm;
