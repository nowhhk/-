import React, { useState } from 'react';
import Banner from '../components/Banner';
const Login = ({ onSignUp, onLogin }) => {
  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setURL] = useState('');
  const [text, setText] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (signup) {
      onSignUp(username, password, name, email, url).catch(setError);
    } else {
      onLogin(username, password).catch(setError);
    }
  };

  const setError = (error) => {
    setText(error.toString());
    setIsAlert(true);
  };

  const onChange = (event) => {
    const {
      target: { name, value, checked },
    } = event;
    switch (name) {
      case 'username':
        return setUsername(value);
      case 'password':
        return setPassword(value);
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'url':
        return setURL(value);
      case 'signup':
        return setSignup(checked);
      default:
    }
  };
  return (
    <>
      <Banner text={text} isAlert={isAlert} />
      <form className="flex flex-col w-4/5 py-4 gap-y-3" onSubmit={onSubmit}>
        <input
          name="username"
          type="text"
          placeholder="아이디"
          value={username}
          onChange={onChange}
          className="rounded-full border px-4 py-2 focus:outline-blue"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          className="rounded-full border px-4 py-2 focus:outline-blue"
          onChange={onChange}
        />
        {signup && (
          <input
            name="name"
            type="text"
            placeholder="이름"
            value={name}
            onChange={onChange}
            className="rounded-full border px-4 py-2 focus:outline-blue"
            required
          />
        )}
        {signup && (
          <input
            name="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onChange}
            className="rounded-full border px-4 py-2 focus:outline-blue"
            required
          />
        )}
        {signup && (
          <input
            name="url"
            type="url"
            placeholder="프로필 이미지 URL"
            value={url}
            onChange={onChange}
            className="rounded-full border px-4 py-2 focus:outline-blue"
          />
        )}
        <div className="m-1 flex gap-x-2">
          <input
            name="signup"
            id="signup"
            type="checkbox"
            onChange={onChange}
            checked={signup}
          />
          <label htmlFor="signup" className="text-sm text-darkgrey">
            가입하기
          </label>
        </div>
        <button className="bg-blue text-white rounded-full p-2" type="submit">
          {signup ? '가입하기' : '로그인'}
        </button>
      </form>
    </>
  );
};

export default Login;
