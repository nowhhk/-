let tweets = [
  {
    id: '1',
    text: '안녕하세요',
    createdAt: Date.now().toString(),
    name: 'hk',
    username: 'hhk',
    url: '',
  },
  {
    id: '2',
    text: '안녕하세요~~~~!!',
    createdAt: Date.now().toString(),
    name: 'hk',
    username: 'bob',
    url: '',
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
  return tweets.find((t) => t.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweets;
}

export async function update(text, id) {
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((t) => t.id !== id);
}
