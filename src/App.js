import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  // var [ a,b ] = [10,100]
  
  let [글제목, 글제목변경] = useState(['게임','게임2','게임3']); 
  //[a(=데이터),b(=데이터 변경하는 함수)]
  //a와 b에 각각 데이터를 넣어주세요

  let [글제목2, 글제목변경2] = useState('게임'); 

  let posts = ' 게임' ; 
  function 함수(){
    return 100
  }

  let style = {color : 'red', fontSize : '20px'} ; 
  {/* 이런식으로 style도 변수에 담아서 사용 가능함 */}
  // document.getelementById('').innerHTML="" <<js데이터 집어넣기(바인딩)

  return (
    <div className="App">
     <div className="navbar">
       <div style ={style}>개발 Blog</div>
       {/* style속성 넣을 땐 {}안에 object형식으로 넣어야함 */}
     </div>
      {/* <h4>{posts}</h4> */}
      {/* { 변수명 } */}
      {/* { 함수() } */}
      {/* img src = { image 파일명(확장자x) } */}
      <div className='list'>
        <h3> { 글제목[0] } </h3>
        <p> 발행날짜 </p>
      </div>

      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p> 발행날짜 </p>
      </div>

      <div className='list'>
        <h3> { 글제목[2] } </h3>
        <p> 발행날짜 </p>
      </div>

    </div>
  );
}

export default App;
