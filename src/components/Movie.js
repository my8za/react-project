import React from "react";
import PropTypes from "prop-types";
import "../assets/css/Movie.css";
import { Link } from "react-router-dom";
import No_img from '../img/No_img.jpg';

// Detail 영화 정보값 넘겨주기
function Movie({ id, title, poster, actors, year, userRating }) {
  const title_rep = title.replaceAll(/&amp;/g, "&").replaceAll("<b>", "").replaceAll("</b>", "");
  const actors_list = actors.substring(0, actors.length - 1).split("|");

  const onErrorImg = (e) => {
    e.target.src = No_img;
  }


  return <div className="movie">
    <Link to={'/detail'}
          state={{
            id: id,
            title: title_rep,
            poster: poster,
            actors: actors_list,
            year: year,
            userRating: userRating
          }}><a target="_blank" rel="noopener noreferrers"><img src={poster} alt={title_rep} onError={onErrorImg} title={title_rep} /></a>
    </Link>
    <div className="movie_data">
      <h3 className="movie_title">
        <Link to={'/detail'}
          state={{
            id: id,
            title: title_rep,
            poster: poster,
            actors: actors_list,
            year: year,
            userRating: userRating
          }}>{title_rep}</Link></h3>
      <h5 className="movie_year">{year}</h5>
      <p className="movie_actors">
        {actors_list.map((actor, index) => {
          var actor_link = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=" + actor;
          if (actors_list.length - 1 > index) {
            return <a href={actor_link} target="_blank" rel="noopener noreferrer">
              {actor},&nbsp;
            </a>;
          } else {
            return <a href={actor_link} target="_blank" rel="noopener noreferrer">
              {actor}
            </a>;
          }
        })}
      </p>
    </div>
  </div>;
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  userRating: PropTypes.string.isRequired
}

export default Movie;