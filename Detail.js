import React, { useEffect, useState } from 'react';
import { useHistory,useParams } from 'react-router-dom'
import styled from'styled-components';
import './Detail.scss';

let 박스 = styled.div`
padding : 25px;
` //css를 입혀놓은 컴포넌트
//padding이 20px입혀진 div박스
// 

let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`

//일부 속성만 전달할땐 ${ props => props.속성 }


function Detail(props){


    useEffect(()=>{
      //컴포넌트가 보일때 특정코드 실행
    //   let 타이머 = setTimeout(()=>{ alert2.'display:none'},2000)
    //   // return function 어쩌구(){실행코드} <<사라질때 
    // })

    })

    let { id } = useParams(); //오브젝트 자료형
    let history = useHistory();
    // 방문기록 저장 -> useHistory()사용
    // import하기
    
    

    return(
      <div className="container">
        <박스>
          <제목 className='red'>Product Detail page</제목>
          {/* <div className='alert'>
            <p>재고가 얼마 남지 않았습니다.</p>
          </div> */}
          <div className='alert2'>
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
        </박스>
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{props.신발[id].title}</h4>
              <p>{props.신발[0].content}</p>
              <p>{props.신발[0].price}원</p>
              <button className="btn btn-danger">주문하기</button> 
              <button className="btn btn-danger" onClick={()=>{
                  history.goBack();
                // push('/') ->/으로 이동시켜주세요
              }}>뒤로가기</button> 
            </div>
          </div>
        </div> 
    )
            }

  


export default Detail;