/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    let [BlogTitle, setBlogTitle] = useState([
        "첫번째 제목입니다.",
        "두번째 제목입니다.",
        "세번째도 잘 들어가나요?",
    ]);
    let [likes, setLikes] = useState(0);
    let [modal, setModal] = useState(false);
    let [heart, setHeart] = useState("♡");

    let [title, setTitle] = useState(0);
    let [inputVal, setInputVal] = useState('');

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
            {BlogTitle.map(function (el,i) {
                return (
                    <>
                    <div className="list" key={i}>
                        <h4 onClick={() => { setModal(!modal); setTitle(i)}}>{BlogTitle[i]}{" "}
                            <span onClick={(e) => {e.stopPropagation(); setLikes(likes + 1);}}>
                                <span onClick={() => { if (heart == "♡") {setHeart("♥");} else {setHeart("♡");}}}>{heart}</span>
                            </span>{" "}{likes}{" "}
                        </h4>
                        <p>1월 31일 발행</p>
                        <button onClick={() => {
                            let copy = [...BlogTitle];
                            // copy.splice(copy.indexOf(copy[i]),1);
                            copy.splice(i,1);
                            setBlogTitle(copy);
                        }}>삭제</button>
                    </div>

                    
                    </>
                );
            })}

            <input type="text" onChange={(e) => {
                setInputVal(e.target.value);
                }}/>
            <button onClick={() =>{
                let copy = [...BlogTitle];
                copy.push(inputVal);
                setBlogTitle(copy);
            }}>글 발행</button>

            {modal == true ? <Modal title={title} setBlogTitle={setBlogTitle} color={'skyblue'} BlogTitle={BlogTitle}/> : null} 
        </div>
    );
}
//부모 -> 자식 state 전송하는 법
//1. <자식 컴포넌트 작명={state이름}>

function Modal(props) {
    //컴포넌트 작명은 첫글자 대문자
    return (
        <>
            <div className="modal" style={{background: props.color}}>
                <h4>{props.BlogTitle[props.title]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={()=>{
                    let copy = [...props.BlogTitle];
                    copy[0] = '헤헤 첫번째 제목 또 바꿈!';
                    props.setBlogTitle(copy);
                }}>글수정</button>
            </div>
        </>
    );
}

export default App;
