export default class TweetService {
  tweets = [
    {
      id: 1,
      text: '안녕하세요 텍스트에요!',
      createdAt: '2021-05-09T04:20:57.000Z',
      name: '마이네임',
      username: 'nowhhk',
      url: 'https://image.msscdn.net/images/goods_img/20210512/1946985/1946985_9_500.jpg?t=20220531145931',
    },
    {
      id: 2,
      text: '두번째 텍스트에요~ :)',
      createdAt: '2021-09-10T04:20:57.000Z',
      name: 'hk',
      username: 'hkhkhkhk',
      url: '',
    },
  ];

  async getTweets(username) {
    return username
      ? this.tweets.filter((tweet) => tweet.username === username)
      : this.tweets;
  }
}
