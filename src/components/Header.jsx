import QuizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={QuizLogo} alt="Logo quiz" />
      <h1>Reactquiz</h1>
    </header>
  );
}
