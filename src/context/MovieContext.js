import { useState, createContext } from 'react';

export const MovieContext = createContext(null);

function MovieProvider(props) {
    const [ likeData , setLikeData ] = useState([]);
 
    return (
        <MovieContext.Provider value={{ likeData, setLikeData }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;