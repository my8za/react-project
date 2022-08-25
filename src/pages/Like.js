import React, { useContext } from "react";
import Nav from "../components/Nav";
import Logo from '../components/Logo';
import { MovieContext } from "../context/MovieContext";
import { Link } from 'react-router-dom';
import "../assets/css/Like.css"

function Like() {
    const contextData = useContext(MovieContext);
    const test = contextData.likeData

    return (
        <div>
            <Logo />
            <h2 className="title">Favorite</h2>
            {test.map(item => (
                <div className="like-movie">
                    <Link to='/detail' state={{
                        id: item.id,
                        title: item.title,
                        poster: item.poster,
                        actors: item.actors,
                        year: item.year,
                        userRating: item.userRating
                    }}>
                        <img src={item.poster} alt='poster' />
                    </Link>
                    <div className="like-info">
                        <Link to='/detail' state={{
                            id: item.id,
                            title: item.title,
                            poster: item.poster,
                            actors: item.actors,
                            year: item.year,
                            userRating: item.userRating
                        }}>
                            <a>{item.title}</a>
                        </Link>
                        <div>{item.year}</div>
                        <div>{item.actors}</div>
                        <div>{item.userRating}</div>
                    </div>
                </div>
            ))}
            <Nav />
        </div>
    )
}

export default Like;