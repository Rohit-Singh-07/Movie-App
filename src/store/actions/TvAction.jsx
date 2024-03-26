export { removeTv } from '../reducers/TvSlice';
import axios from '../../Utils/axios';
import { loadTv, removeTv } from '../reducers/TvSlice';

const asyncLoadTv = (id) => async (dispatch, getState) => {
    try {
        const details = await axios.get(`/tv/${id}`);
        const external_id = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchProviders = await axios.get(`/tv/${id}/watch/providers`);

        const allDetails = {
            details: details.data,
            external_id: external_id.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.find(m => m.type === 'Trailer'),
            watchProviders: watchProviders.data.results.IN,
        };

        console.log(allDetails);

        // Dispatch an action to update Redux store with the fetched tv details
        dispatch(loadTv(allDetails));
    } catch (error) {
        console.log(error);
    }
};

export default asyncLoadTv;
