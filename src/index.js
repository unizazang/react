import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //이 페이지 안에서도 CSS를 쓰려면 얘가 있어야해요 > 얘는 css loader style loader 이런거 없어도 이미 기본적으로 세팅돼있습니다.
import App from "./App"; // < 중요!!! app.js에서 생성된 모든 태그가 여기(<App />)에 생성된다는것
// 본 작업은 다 여기서 합니다.
// public/index.html 이 template임!!
// 여러분은 index.html도 ... index.js도 건드릴 필요가 없습니다. 모든 작업은 다 app.js에서... 모든 스크립트를 다만듭니다.
// 이건 나중얘기지만 이 스크립트 안에 모든 페이지가 다있기 때문에 좀 느려집니다.
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
