import React, { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {MovieContext} from '../context/MovieContext';

function Heart({ location }) {

    const {likeData, setLikeData} = useContext(MovieContext);

    let mode = false;
    likeData.map(item => {
        if(item.id === location.state.id) {
            mode = true;
        }
    });
    const [checkIcon, setCheckIcon] = useState(mode);

    const movie = location.state
    const fillIcon = () => {
        setCheckIcon(!checkIcon);
        setLikeData(likeData.concat(movie));
    }
    const emptyIcon = () => {
        setCheckIcon(!checkIcon);
        setLikeData(likeData.filter(item => item.id !== location.state.id));
    }


    return (
        <>
            {checkIcon ?
                <AiFillHeart className="btn--like" onClick={emptyIcon} /> :
                <AiOutlineHeart className="btn--like" onClick={fillIcon} />
            }
        </>
    );
}

export default Heart;