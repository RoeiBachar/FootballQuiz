import { useState } from "react";
import "./NewMain.css";
import { questions } from "./questions";

function NewMain(): JSX.Element {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [corrindex, setcorrindex] = useState(0);
  const handleAnswer = (answer: any,index:number) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      // Increment the number of correct answers if the answer is correct
      setNumCorrectAnswers(numCorrectAnswers + 1);
      setBackgroundColor("green");
      setcorrindex(index)
    }
    // Go to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  return (
    <div className="NewMain">
      {/* If there are no more questions, show the result message */}
      {currentQuestionIndex >= questions.length ? (
        <div>
          You got {numCorrectAnswers} out of {questions.length} questions
          correct!
        </div>
      ) : (
        <div>
          {/* Otherwise, show the current question and options */}
          <div
            style={{
              display: "flex",
              justifyItems: "center",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <div  style={{ backgroundColor: `${backgroundColor}` }}>{questions[currentQuestionIndex].quest} </div>
            {questions[currentQuestionIndex].answers.map((answer,index) => (
              <button 
              {index}
                onClick={() => handleAnswer(answer,index)}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NewMain;
