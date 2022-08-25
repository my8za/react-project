import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../assets/css/Search.css";
import Pagination from "../components/Pagination";
import Posts from '../components/Posts';
import Logo from '../components/Logo'
import Nav from '../components/Nav';

function Search() {
  const [state, setState] = useState({
    isLoading: true,
    movies: [],
    value: ""
  });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const getMovies = async () => {
    const search = state.value;

    try {
      if (search === "") {
        setState({ movies: [], isLoading: false });
      } else {
        const {
          data: { items }
        } = await axios.get(
          '/v1/search/movie.json', {
          params: {
            query: search,
            display: 20
          },
          headers: {
            'X-Naver-Client-Id': process.env.REACT_APP_ID_KEY,
            'X-Naver-Client-Secret': process.env.REACT_APP_SECRET_KEY
          }
        });

        setState({ movies: items, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleChange = (e) => {
    setState(prevState => ({ ...prevState, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };



  const { isLoading, movies } = state;
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (movies) => {
    let currentPosts = 0;
    currentPosts = movies.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  return (
      <section className="container">
        <Logo />
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (<form onSubmit={handleSubmit}>
          <div className="input_div">
            <input
              className="input_search"
              type="text"
              defaultValue={state.value}
              onChange={handleChange}
              placeholder="Search" />
          </div>

          <div className="movies">
            <Posts posts={currentPosts(movies)} loading={loading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={movies.length}
              paginate={setCurrentPage}
            ></Pagination>
          </div>

        </form>)}
      <Nav />
      </section>
  );

}

export default Search;
