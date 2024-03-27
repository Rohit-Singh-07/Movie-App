export { removeMovie } from '../reducers/MovieSlice';
import axios from '../../Utils/axios';
import { loadMovie } from '../reducers/MovieSlice';

const asyncLoadMovie = (id) => async (dispatch, getState) => {
    try {
        const details = await axios.get(`/movie/${id}`);
        const external_id = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchProviders = await axios.get(`/movie/${id}/watch/providers`);

        const allDetails = {
            details: details.data,
            external_id: external_id.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.find( m => m.type === 'Trailer'),
            watchProviders: watchProviders.data.results.IN,
        };


        // Dispatch an action to update Redux store with the fetched movie details
        dispatch(loadMovie(allDetails));
    } catch (error) {
        console.log(error);
    }
};

export default asyncLoadMovie;
