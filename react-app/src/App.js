import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import logo from '@/logo.svg';
import './App.css';
import actions from "./shared/actions";

function App() {
  const [token, setToken] = useState('-');
  const history = useHistory();
  useEffect(() => {
    actions.onGlobalStateChange((state) => {
      const { token } = state;
      // 未登录 - 返回主页
      if (!token) {
        message.error("未检测到登录信息！");
      }
      setToken(token);
    }, true);
  }, [history]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <br/>
          react微应用token:  {token}
        </a>
      </header>
    </div>
  );
}

export default App;
