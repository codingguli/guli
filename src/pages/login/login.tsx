import React from "react";
import style from "./login.module.scss";

const Login: React.FC = () => {
  

  return (
    <div className={style.login}>
        <div className={style['login-left']}>
          <div className={style['login-left-content']}>
            <i></i>
            <p>傍晚了</p>
            <p>生活从来都不简单，但向前走就对了</p>
          </div>
        </div>
        <div className={style['login-right']}></div>
    </div>
  );
};

export default Login;
