import logoImg from '../assets/quiz-logo.png';

export default function () {
    return (
        <header>
            <img src={logoImg} alt="Quiz Logo" />
            <h1>ReactQuiz</h1>
        </header>
    )
}