import imgPlaceholder from "assets/images/img-placeholder.png";

const quizInitialState = {
    id: 2,
    title: 'Untitled',
    img: imgPlaceholder,
    duration: 0,
    difficulty: 'beginner',
    num_of_questions: 0,
    quizzed: 0,
    collaborative: true,
    personal: false
};

export default quizInitialState;