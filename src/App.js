/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    let post = "강남 우동 맛집";
    let [Blog_title, b] = useState(['첫번째 제목입니다.','두번째 제목입니다.','세번째도 잘 들어가나요?']);
    let [likes, setLikes] = useState(0);


    return (
        <div className="App">
            <div className="black-nav">
                <h4>React Blog</h4>
            </div>
            <div className="list">
                <h4>{Blog_title[0]} <span onClick={() => { setLikes(likes+1) }}>🫶</span> {likes} </h4>
                <p>1월 31일 발행</p>
            </div>
            <div className="list">
                <h4>{Blog_title[1]}</h4>
                <p>1월 31일 발행</p>
            </div>
            <div className="list">
                <h4>{Blog_title[2]}</h4>
                <p>1월 31일 발행</p>
            </div>
        </div>
    );
}

export default App;
