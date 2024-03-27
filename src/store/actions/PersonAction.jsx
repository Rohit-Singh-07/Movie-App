export { removePerson } from '../reducers/PersonSlice';
import axios from '../../Utils/axios';
import { loadPerson } from '../reducers/PersonSlice';

const asyncLoadPerson = (id) => async (dispatch, getState) => {
    try {
        const details = await axios.get(`/person/${id}`);
        const images = await axios.get(`/person/${id}/images`);
        const movie_credits = await axios.get(`/person/${id}/movie_credits`);
        const tv_credits = await axios.get(`/person/${id}/tv_credits`);

        const allDetails = {
            details: details.data,
            images: images.data,
            movie_credits: movie_credits.data,
            tv_credits: tv_credits.data,
        };

        console.log(allDetails);

        // Dispatch an action to update Redux store with the fetched Person details
        dispatch(loadPerson(allDetails));
    } catch (error) {
        console.log(error);
    }
};

export default asyncLoadPerson;
