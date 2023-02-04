/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    let post = "강남 우동 맛집";
    let [BlogTitle, setBlogTitle] = useState(['첫번째 제목입니다.','두번째 제목입니다.','세번째도 잘 들어가나요?']);
    let [likes, setLikes] = useState(0);

    


    return (
        <div className="App">
            <div className="black-nav">
                <h4>React Blog</h4>
            </div>
            <button onClick={() => {
                let copy = [...BlogTitle];
                copy[0] = '제목 바뀌지롱!';
                setBlogTitle(copy);
            }}> 뿅 </button>

            <button onClick={() => {
                let copy = [...BlogTitle];
                copy = copy.sort();
                setBlogTitle(copy);
            }}>정렬!</button>
            <div className="list">
                <h4>{BlogTitle[0]} <span onClick={() => { setLikes(likes+1) }}>🫶</span> {likes} </h4>
                <p>1월 31일 발행</p>
            </div>
            <div className="list">
                <h4>{BlogTitle[1]}</h4>
                <p>1월 31일 발행</p>
            </div>
            <div className="list">
                <h4>{BlogTitle[2]}</h4>
                <p>1월 31일 발행</p>
            </div>


            <div className="modal">
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        </div>
    );
}

export default App;
