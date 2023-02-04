/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    let post = "강남 우동 맛집";
    let [BlogTitle, setBlogTitle] = useState([
        "첫번째 제목입니다.",
        "두번째 제목입니다.",
        "세번째도 잘 들어가나요?",
    ]);
    let [likes, setLikes] = useState(0);
    let [modal, setModal] = useState(false);
    let [heart, setHeart] = useState("♡");

    return (
        <div className="App">
            <div className="black-nav">
                <h4>React Blog</h4>
            </div>
            <button
                onClick={() => {
                    let copy = [...BlogTitle];
                    copy[0] = "제목 바뀌지롱!";
                    setBlogTitle(copy);
                }}
            >
                {" "}
                뿅{" "}
            </button>

            <button
                onClick={() => {
                    let copy = [...BlogTitle];
                    copy = copy.sort();
                    setBlogTitle(copy);
                }}
            >
                정렬!
            </button>
            {/* <div className="list">
                <h4>
                    {BlogTitle[0]}{" "}
                    <span
                        onClick={() => {
                            setLikes(likes + 1);
                        }}
                    >
                        <span
                            onClick={() => {
                                if (heart == "♡") {
                                    setHeart("♥");
                                } else {
                                    setHeart("♡");
                                }
                            }}
                        >
                            {heart}
                        </span>
                    </span>{" "}
                    {likes}{" "}
                </h4>
                <p>1월 31일 발행</p>
            </div>
            <div className="list">
                <h4>{BlogTitle[1]}</h4>
                <p>1월 31일 발행</p>
            </div>
            <div className="list">
                <h4
                    onClick={() => {
                        modal == true ? setModal(false) : setModal(true);
                    }}
                >
                    {BlogTitle[2]}
                </h4>
                <p>1월 31일 발행</p>
            </div> */}

            {BlogTitle.map(function (el,i) {
                return (
                    <div className="list">
                        <h4>{BlogTitle[i]}</h4>
                        <p>1월 31일 발행</p>
                    </div>
                );
            })}
            {modal == true ? <Modal /> : null}
        </div>
    );
}

function Modal() {
    //컴포넌트 작명은 첫글자 대문자
    return (
        <>
            {" "}
            {/* fragment 문법 <></> */}
            <div className="modal">
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        </>
    );
}

export default App;
