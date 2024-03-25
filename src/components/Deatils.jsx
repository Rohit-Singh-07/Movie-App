import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import asyncLoadMovie, { removeMovie } from '../store/actions/MovieAction';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { info } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(asyncLoadMovie(id));

        return () => {
            dispatch(removeMovie());
        };
    }, [dispatch, id]);

    return (
        <div>
            <img className='h-[92vh] w-screen object-cover mt-1 opacity-60 relative' src={info
                    ? `https://image.tmdb.org/t/p/original/${
                        info && info.details.backdrop_path
                      }`
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="" />

            <div className='absolute text-white top-16 h-[92vh]'>
                <h1>Title</h1>
            </div>
        </div>
    );
};

export default Details;
