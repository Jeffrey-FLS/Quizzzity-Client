
import axios from 'axios'
// import { API } from '../helpers';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const quizService = {
    fetchQuizzes
};

async function fetchQuizzes() {
    return await axios.get(`${BASE_URL}/quizzes`)
            .then(resp => resp.data)
            .catch(error => Promise.reject(error));
}

export default quizService;
