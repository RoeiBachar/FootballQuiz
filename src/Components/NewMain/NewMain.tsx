import { useState } from "react";
import "./NewMain.css";
import { questions } from "./questions";
import { IAnswer } from "../../Interfaces/IQuestions";
import { useParams } from "react-router-dom";

function NewMain(): JSX.Element {
  const { topic } = useParams();
  console.log(topic);
  console.log(questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const handleAnswer = (answer: IAnswer) => {
    setSelectedAnswer(answer.text);
    if (answer.isCorrect) {
      setNumCorrectAnswers(numCorrectAnswers + 1);
    }
    let timeout = setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      clearTimeout(timeout);
    }, 1000);
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
              <div style={{ backgroundColor: "darkblue" }}>
                <div style={{padding:"6px"}}>
                  <span style={{ color: "white"}}>
                    {questions[currentQuestionIndex].question.quest}
                  </span>
                </div>
                <div>
                  <img
                    height={530}
                    width={730}
                    src={questions[currentQuestionIndex].question.image}
                  ></img>
                </div>
              </div>
              {questions[currentQuestionIndex].answers.map((answer) => (
                <button
                  onClick={() => handleAnswer(answer)}
                  style={{
                    backgroundColor:
                      answer.text === selectedAnswer
                        ? answer.isCorrect
                          ? "green"
                          : "red"
                        : "",
                  }}
                  disabled={selectedAnswer.length > 0}
                >
                  <img src={answer.image} width={50} />
                  {`  ${answer.text} `}
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
