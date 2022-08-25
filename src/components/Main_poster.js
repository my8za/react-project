import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageSlider, { Slide } from "react-auto-image-slider";
import '../assets/css/Main_poster.css';
import { Link } from "react-router-dom";


// Main페이지 포스터 자동 슬라이드 컴포넌트
function Main_poster() {
    // 초기값 설정
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {

            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고 loading 상태 true로 변경
                setMovies([]);
                setError(null);
                setLoading(true);

                const response = await axios.get(
                    '/v1/search/movie.json?query=어벤져스&display=20', {
                    headers: {
                        'X-Naver-Client-Id': process.env.REACT_APP_ID_KEY,
                        'X-Naver-Client-Secret': process.env.REACT_APP_SECRET_KEY
                    }
                }
                );

                // response.data 안에 읽어온 api 읽어온 데이터 저장 되어있음.
                setMovies(response.data.items);
            }
            catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        getMovies();
    }, []);


    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!movies) return null;

    return (
        <div className='poster-container'>
            <h2 className="title">What do you want to watch?</h2>
            <ImageSlider effectDelay={500} autoPlayDelay={1000}>
                {movies.map(movie => (
                    <Slide>
                        <div key={movie.link} className='poster'>
                            <Link to='/detail' state={{
                                id: movie.link,
                                title: movie.title.replaceAll(/&amp;/g, "&").replaceAll("<b>", "").replaceAll("</b>", ""),
                                poster: movie.image,
                                actors: movie.actor,
                                year: movie.pubDate,
                                userRating: movie.userRating}}>
                                <img src={movie.image} />
                            </Link>
                        </div>
                    </Slide>
                ))}
            </ImageSlider>
        </div>
    );
}


export default Main_poster;