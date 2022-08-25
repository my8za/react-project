import React from "react";
import { useLocation } from "react-router-dom";
import Reserve from '../components/Reserve';
import Heart from '../components/Heart';
import bg from '../img/detail_bg.jpg'
import { AiFillStar, AiOutlineCalendar } from "react-icons/ai";
import Nav from "../components/Nav";
import Logo from '../components/Logo'
import { BiLinkExternal } from "react-icons/bi";

const Detail = () => {
    const location = useLocation();
    return (
        <div>
            <Logo />
            <div className="detail">
                <img className="detail-bg" src={bg} />

                <div className="movie-box">
                    <img className="poster-img" src={location.state.poster} />
                    <div className="info-wrapper">
                        <h2 className="movie-title">{location.state.title}</h2>
                        <ul className="movie-info">
                            <li>
                                <p><AiFillStar className="movie-icon" /> {location.state.userRating}</p>
                                <p><AiOutlineCalendar className="movie-icon" /> {location.state.year}</p>
                            </li>
                            <li><Heart location={location} /></li>
                        </ul>
                    </div>
                </div>
                <Reserve title={location.state.title} />
                <div className="movie-content">
                    <p>출연 : {location.state.actors}</p>
                    <h3 className="story-link"><a href={location.state.id}><BiLinkExternal className="btn--link" />줄거리정보 바로가기</a></h3>
                </div>
            </div>
            <Nav />
        </div>
    )
}



export default Detail;