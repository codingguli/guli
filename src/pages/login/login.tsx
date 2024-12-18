import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import getWelcome from "@/utils/welcome";
import style from "./login.module.scss";

const Login: React.FC = () => {
  const [welcome, setWelcome] = useState({
    condolence: "",
    icon: "",
    welcome: "",
  });

  useEffect(() => {
    const hour = dayjs().hour();
    setWelcome(getWelcome(hour));
  }, []);

  console.log("welcome", welcome);

  return (
    <div className={style.login}>
      <div className={style["login-left"]}>
        <div className={style["login-left-content"]}>
          <i className={style[`${welcome.icon}`]}></i>
          <p>{welcome.condolence}</p>
          <p>{welcome.welcome}</p>
        </div>
      </div>
      <div className={style["login-right"]}>
        <div className={style['login-right-container']}>
          <p>还没账号? <i>去注册</i></p>
          <div></div>
          <p>Copyright ©2013-2024 八度云计算（安徽）有限公司版权所有</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
