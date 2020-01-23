
import axios from 'axios'
// import { API } from '../helpers';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const quizService = {
    fetchQuizzes,
    createQuiz
};

async function fetchQuizzes() {
    return await axios.get(`${BASE_URL}/quizzes`)
            .then(resp => resp.data)
            .catch(error => Promise.reject(error));
}


async function createQuiz(quiz, questions) {
    console.log(`
        QUIZ VALUE IS ${JSON.stringify(quiz)}
        QUESTIONS VALUE IS ${JSON.stringify(questions)}
    `);

        // const config = {
        //     method: 'POST',
        //     // url: '/user/12345',
        //     data: {
        //         quiz: quiz,
        //         questions: questions
        //     }
        // };

    const config = {
        quiz: quiz,
        questions: questions
    };

    return await axios.post(`${BASE_URL}/quizzes`, config)
        .then(resp => resp.data)
        .catch(error => Promise.reject(error));
}


export default quizService;

