import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

let post = "강남 우동 맛집";
let [a,b] = useState('temp_title');

function App() {
    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그임</h4>
            </div>
            <div className="list">
              <h4>제목입니다.</h4>
              <p>1월 31일 발행</p>
            </div>
        </div>
    );
}

export default App;
