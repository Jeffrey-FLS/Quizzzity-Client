
import axios from 'axios'
import { API } from '../helpers';

export const quizService = {
    fetchQuizzes
};

async function fetchQuizzes() {
    return await axios.get(`${API.URL}/quizzes`)
            .then(resp => resp.data)
            .catch(error => Promise.reject(error));
}

export default quizService;
