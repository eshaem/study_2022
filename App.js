import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import Data from './data.js';
import Detail from './Detail';
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom' ; 


function App() {

  let [신발,신발변경] = useState(Data);
  
  return (
    <div className="App">

      
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shopping mall</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            {/* 리액트 링크걸기 <Link to="/">*/}
            <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

    {/* 자동칸배치 */}

    <Switch>
    <Route exact path="/">
      {/* exact추가하면 경로가 정확할때만 노출 */}
      <div className='jumbo'>
        <h1>Welcome to mall</h1><br/>
        <p>나에게 딱 맞는 신발이 필요할 때, 이 곳으로 놀러오세요.</p>
        <Button variant="secondary">more</Button>{' '}
      </div>

    <div className='container'>
      <div className='row'>
        {
          신발.map(function(a,i){
            return <Card 신발 = {신발[i]}  i = {i}/>
          })
        }
        {/* {
          신발.map(()=>{
            return <Card 신발 = {신발[i]}/>
          })
        } */}
        </div>
        <div>
        <button className='show' onClick={()=>{

          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과)=>{
            console.log(결과.data)
          }) //성공할때 나옴
          .catch(()=>{
            console.log('실패')}) // 실패할때 나옴
          // axios.get(데이터 요청할 링크);
        }}>더보기</button>
    </div>
    </div>

    

    </Route>

    <Route path="/detail/:id">
      <Detail 신발 = {신발}/>   
    </Route>
    {/* <Route path="/어쩌구" component={Modal}></Route> */}

    
    <Route path="/:id">
      <div>아무거나 적었을 때 이거 노출</div>
    </Route>
    

    

        
    </Switch>
      </div>
      
     
    


    

 

      
  );
}



// class Detail2 extends React.Component{

//   componentDidMount(){
//     //
//   }

//   componentDidMount(){

//   }

// }

function Card(props){


  return(
  <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+ ( props.i+1 ) +'.jpg'} width="100%"/>
      <h4>{ props.신발.title}</h4>
      <p>{props.신발.content} / {props.신발.price}</p>
    </div>
    )
}

export default App;

