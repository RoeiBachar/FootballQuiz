import { useState } from "react";
import "./NewMain.css";
import { questions} from "./questions";

function NewMain(): JSX.Element {
     interface questions{
        text:string,
        image:string
       }
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");
  const handleAnswer = (answer: any) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setBackgroundColor("green");

      setNumCorrectAnswers(numCorrectAnswers + 1);
    }
    // Go to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  return (
    <div className="NewMain">
      <div style={{ display: "flex", justifyContent: "center" }}>
        {currentQuestionIndex >= questions.length ? (
          <div>
            You got {numCorrectAnswers} out of {questions.length} questions
            correct!
          </div>
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                textAlign: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ backgroundColor: `${backgroundColor}` }}>
                {questions[currentQuestionIndex].quest}{" "}
              </div>
              {questions[currentQuestionIndex].answers.map((answer) => (
                <button onClick={() => handleAnswer(answer.text)}>
                  <img
                    src={answer.image}
                    width={20}
                  />{answer.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewMain;
