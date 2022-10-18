import Header from './components/Header';
import AllTweets from './components/Tweets';
import Login from './pages/Login';
import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

function App({ tweetService, authService }) {
  const history = useHistory();

  const [user, setUser] = useState(undefined);
  const isAuthorized = user !== undefined;

  const signUp = useCallback(
    async (username, password, name, email, url) =>
      authService
        .signup(username, password, name, email, url)
        .then((user) => setUser(user)),
    [authService]
  );

  const logIn = useCallback(
    async (username, password) =>
      authService.login(username, password).then((user) => setUser(user)),
    [authService]
  );
  const onLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      authService.logout();
      setUser(undefined);
      history.push('/login');
    }
  };

  useEffect(() => {
    authService.me().then(setUser).catch(console.error);
  }, [authService]);

  return (
    <div className="flex flex-col items-center m-auto h-screen w-120 bg-ivory">
      <Header onLogout={onLogout} user={user} />
      <Switch>
        (
        <>
          {!isAuthorized ? <Redirect to="/login" /> : <Redirect to="/" />}

          <Route path="/login">
            <Login onSignUp={signUp} onLogin={logIn} />
          </Route>
          <Route exact path="/">
            <AllTweets tweetService={tweetService} user={user} />
          </Route>
        </>
        )
      </Switch>
    </div>
  );
}

export default App;
