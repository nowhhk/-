import Header from './components/Header';
import AllTweets from './components/Tweets';
import { Switch, Route, useHistory } from 'react-router-dom';

function App({ tweetService }) {
  const history = useHistory();
  return (
    <div class="flex flex-col items-center m-auto h-screen w-120 bg-ivory">
      <Header />
      <Switch>
        (
        <>
          <Route exact path="/">
            <AllTweets tweetService={tweetService} />
          </Route>
        </>
        )
      </Switch>
    </div>
  );
}

export default App;
