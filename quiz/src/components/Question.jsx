
import { useContext } from "react";
import { QuizContext } from "../context/quiz"

import "./Question.css";
import Option from "./Option";

const Question = () => {

  
  const [quizState, dispatch] = useContext(QuizContext)


  return ( 
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1 } de {quizState.questions.length}
      </p>
        <h2>{currentQuestion.question}</h2>
      <div id="options-container">
          {currentQuestion.options.map((option) =>{
            <Option option={option} key={option} />
          })}
      </div>
      <button onClick={()=> dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    </div>
  )
}

export default Question