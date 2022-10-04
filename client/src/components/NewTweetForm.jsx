import React, { useState } from 'react';

const NewTweetForm = () => {
  const [tweet, setTweet] = useState('');
  const onChange = (event) => {
    setTweet(event.target.value);
  };
  return (
    <form className="my-4">
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
          ${tweet === '' ? 'opacity-60' : 'opacity-100'}`}
      >
        Tweet
      </button>
    </form>
  );
};

export default NewTweetForm;
