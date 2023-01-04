import { useEffect, useState } from "react";
import "./NewMain.css";
import { questions } from "./questions";
import { IAnswer, IQuiz } from "../../Interfaces/IQuestions";
import { useParams } from "react-router-dom";

function NewMain(): JSX.Element {
  const { topic } = useParams();
  useEffect(() => {
    if (topic) {
      const difficultLevel = +topic;
      const que = questions.filter(
        (item) => item.difficulty === difficultLevel
      );
      setDifficultLevel(que);
    }
  }, []);

  const [getDifficultLevel, setDifficultLevel] = useState<IQuiz[]>([]);

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
      <div
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      >
        {currentQuestionIndex >= getDifficultLevel.length ? (
          <div>
            You got {numCorrectAnswers} out of {getDifficultLevel.length}{" "}
            questions correct!
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
              <div style={{ backgroundColor: "darkblue",padding:"6px"}}>
                <span>{`${currentQuestionIndex + 1} / ${
                  getDifficultLevel.length
                }`}</span>
                <div style={{ padding: "6px" }}>
                  <span style={{ color: "white" }}>
                    {getDifficultLevel[currentQuestionIndex].question.quest}
                  </span>
                </div>
                <div>
                  <img
                    height={530}
                    width={730}
                    src={getDifficultLevel[currentQuestionIndex].question.image}
                  ></img>
                </div>
              </div>
              {getDifficultLevel[currentQuestionIndex].answers.map((answer) => (
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
