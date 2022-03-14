import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
{/* The following line can be included in your src/index.js or App.js file*/}
import { Button,Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import Data from './data.js';

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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
    </div>

    </Route>

    <Route path="/detail">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    </Route>

    {/* <Route path="/어쩌구" component={Modal}></Route> */}
    

    

        
        
      </div>
      
     
    


    

 

    
  );
}

function Card(props){

  return(
  <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+ ( props.i+1 ) +'.jpg'} width="100%"/>
      <h4>{ props.신발.title}</h4>
      <p>{props.신발.content} & {props.신발.price}</p>
    </div>
    )
}

export default App;
