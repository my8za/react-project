import React from "react";
import { useLocation } from "react-router-dom";
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import '../assets/css/ResFinished.css';

const ResFinished = () => {
    const location = useLocation();
    console.log(typeof parseInt(location.state.seat.length));
    return (
        <div>
            <Logo />
            <div className='movie-ticket'>
                <p className='customer'><a>{location.state.name}</a>님 예매가 완료되었습니다!</p>
                <div className='notification'>영화 상영시작시간 15분 전까지 취소가 가능하며 캡처화면은 입장이 제한될 수 있습니다.</div>
                <h3><span className='movie-circle'></span>{location.state.title}</h3>
                <p className='movie-time'>{location.state.time}</p>
                <p>좌석정보 : {location.state.seat.map(test => (test+"열 "))}</p>
                <p>결제금액 : {location.state.seat.length}인 / {parseInt(location.state.seat.length)*10000}원</p>
                <a href="/search">영화정보 더보기</a>
            </div>
            <Nav />
        </div>
    )
}




export default ResFinished;