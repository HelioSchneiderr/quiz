//REACT
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz"

//COMPONENTES
import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from "./components/GameOver";

//CSS
import "./app.css"


function App() {
  const [quizState, dispatch] = useContext(QuizContext)
  console.log("Aqui meu querido", quizState)
  useEffect(()=>{
    dispatch({type: "REORDER_QUESTIONS"});
  }, []);

  return (
    <div className="App">
       <h1>Quiz de Programação</h1>
       {quizState.gameStage === "Start" && <Welcome/>}
       {quizState.gameStage === "Playing" && <Question/>}
       {quizState.gameStage === "End" && <GameOver/>}

    </div>
  )
}

export default App
