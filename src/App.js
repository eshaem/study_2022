import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // addEventListener('click',()=>{});

  // var [ a,b ] = [10,100]
  
  let [글제목, 글제목변경] = useState(['게임','게임2','게임3']); 
  //[a(=데이터),b(=데이터 변경하는 함수)]
  //a와 b에 각각 데이터를 넣어주세요


  // state 데이터 변경하는법
  // 변경함수(대체할 데이터=deep copy한 state)

  function 제목변경(){
    var newArray = [...글제목] ;
    // var newArray = [...글제목] <<< ...를 붙여야 딥카피댐
    // var newArray = 글제목 << 값 공유
    newArray[0] = '게임2' ; 
    // 글 제목에 있던 0번째 데이터를 바꿈
    // state는 복사(deep copy)해서 수정
    글제목변경(newArray);
  };

  let posts = ' 게임' ; 
  function 함수(){
    return 100
  }

  let style = {color : 'red', fontSize : '20px'} ; 
  {/* 이런식으로 style도 변수에 담아서 사용 가능함 */}
  // document.getelementById('').innerHTML="" <<js데이터 집어넣기(바인딩)

  let [하트,하트변경] = useState(0);

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
        <h3> { 글제목[0] } <span onClick={()=>{하트변경(하트+1)}}>♥</span> {하트} </h3>
        {/* 하트를 누를 때 마다 숫자가 올라가는 법 */}
        {/* onClick={} {}에는 함수만 들어갈수있음 */}
        <p> 발행날짜 </p>
      </div>

      <div className='list'>
        <h3> { 글제목[1] } </h3><span onClick={ 제목변경 }>버튼</span>
        {/* 함수()는 바로 실행이기때문에 ()빼야함 */}
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
