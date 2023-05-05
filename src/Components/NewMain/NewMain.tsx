import { useEffect, useState } from "react";
import "./NewMain.css";
import { questions } from "./questions";
import { IAnswer, IQuiz } from "../../Interfaces/IQuestions";
import Card from "../Card/Card";

function NewMain(): JSX.Element {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [getMyMessage, setMyMessage] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleAnswer = (answer: IAnswer) => {
    setSelectedAnswer(answer.text);
    if (answer.isCorrect) {
      setNumCorrectAnswers(numCorrectAnswers + 1);
      setMyMessage("כל הכבוד! תשובה נכונה");
    }
    let timeout = setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setAnimate(false);

      clearTimeout(timeout);
    }, 3500);
    setAnimate(true);
  };

  const getMessage = (answer: IAnswer) => {
    let timeout = setTimeout(() => {
      setMyMessage("");
      setAnimate(false);
      clearTimeout(timeout);
    }, 3500);
    if (!answer.isCorrect) {
      const bdika = questions[currentQuestionIndex].answers.filter(
        (item) => item.isCorrect === true
      );

      setMyMessage(
        `
            התשובה הנכונה היא 
            ${bdika[0].text}
            `
      );
      setAnimate(true);
    }
  };

  return (
    <div className="NewMain" >
      <div id="container">
        {currentQuestionIndex >= questions.length ? (
          numCorrectAnswers >= 27 ? (
            <div className="certificate">
              <h1>Certificate of Completion</h1>
              <h2>כל הכבוד</h2>
              <p style={{ direction: "rtl", fontSize: "70px" }}>
                ענית על {`${numCorrectAnswers}/${questions.length}`} שאלות
                נכון
                <p style={{ direction: "rtl", fontSize: "40px" }}>
                  רציתי להודות לך על השתתפותך בחידון הכדורגל, אין ספק שכדורגל
                  זה הצד החזק שלך!
                </p>
                <img
                  width={200}
                  height={200}
                  src="https://media.tenor.com/LfSgwR0jqPgAAAAd/clap-applause.gif"
                />
              </p>
              <footer>
                Date:{" "}
                {`${new Date().getDate()}-${new Date().getMonth() + 1
                  }-${new Date().getFullYear()}`}
              </footer>
            </div>
          ) : (
            <div
              onClick={() => {
                setCurrentQuestionIndex(0);
                setNumCorrectAnswers(0);
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Card
                image="https://media.tenor.com/8iKMNjcWv08AAAAM/ronaldo-crying.gif"
                caption="נסה שוב"
              />
              <h1 style={{ textAlign: "center" }}>
                ענית נכון על {`${numCorrectAnswers}/${questions.length}`}
              </h1>
            </div>
          )
        ) : (
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}>
            <div
              style={{
                // display: "flex",
                justifyItems: "center",
                textAlign: "center",
                flexDirection: "column",
                width: "100%",
                maxWidth: "70rem"
              }}
            >
              <div
                id="blueContainer"
              >
                <span style={{ color: "white" }}>{`${currentQuestionIndex + 1} / ${questions.length
                  }`}</span>
                <div>
                  <span style={{ color: "white" }}>
                    {questions[currentQuestionIndex].question.quest}
                  </span>
                </div>
                <img
                  draggable="false"
                  id="questionImage"
                  src={questions[currentQuestionIndex].question.image}
                />
              </div>
              {questions[currentQuestionIndex].answers.map((answer) => (
                <button
                  id="answersButton"
                  onClick={() => {
                    handleAnswer(answer);
                    getMessage(answer);
                  }}
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
                  {`  ${answer.text} `}
                </button>
              ))}
              { }
            </div>
            {getMyMessage &&
              <div className={`line ${animate ? "lineUp" : ""}`}>
                <h5 className="lineUp">{getMyMessage}</h5>
              </div>
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default NewMain;
