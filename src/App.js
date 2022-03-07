import logo from './logo.svg';
import './App.css';

function App() {

  let posts = ' 게임' ; 
  function 함수(){
    return 100
  }
  let style = {color : 'red', fontSize : '20px'} ; 
  {/* 이런식으로 변수에 담아서 사용 가능함 */}
  // document.getelementById('').innerHTML="" <<js데이터 집어넣기(바인딩)

  return (
    <div className="App">
     <div className="navbar">
       <div style ={style}>개발 Blog</div>
       {/* style속성 넣을 땐 {}안에 object형식으로 넣어야함 */}
       
     </div>
      <h4>{posts}</h4>
      {/* { 변수명 } */}
      {/* { 함수() } */}
      {/* img src = { image 파일명(확장자x) } */}
    </div>
  );
}

export default App;
