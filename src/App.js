import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react"; //react 에서 컴포넌트를 쓸수있도록 가져옴
/* 

function App() {
  return (
    <div className="App">
      <h1 className="title">Hello React!</h1>
    </div>
  );
} 

*/
// 함수로 컴포넌트 만들었음. + 클래스로 만들수도 있어요 >> rcc.

//App > 여기서

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 주의사항 : 이 div 안에 모든 태그가 있어야해요. - 이거 주석 이렇게생긴게맞음 어차피 화면에안나와~~ */}
        <div className="App">
          <h1 className="title">Hello React!</h1>
        </div>
      </div>
    );
  }
}

// export default App;
//그대로 모듈형식으로 가져오기 위해 export default
// export 해서 추출된 모듈을 (컴포넌트라고도 부름) > 을
/* 
  <React.StrictMode>
    <App /> <<<<< 이렇게 씀 <App></App>
  </React.StrictMode>
   */
