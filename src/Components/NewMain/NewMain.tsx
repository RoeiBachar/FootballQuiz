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
    <div className="NewMain">
      <div id="container" style={{width:"100%"}}>
        <div
          style={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          {currentQuestionIndex >= questions.length ? (
            numCorrectAnswers >= 16 ? (
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
                    width={400}
                    height={400}
                    src="https://media.tenor.com/LfSgwR0jqPgAAAAd/clap-applause.gif"
                  />
                </p>
                <footer>
                  Date:{" "}
                  {`${new Date().getDate()}-${
                    new Date().getMonth() + 1
                  }-${new Date().getFullYear()}`}
                </footer>
              </div>
            ) : (
              <div
                style={{ width: "50%", height: "25rem" }}
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setNumCorrectAnswers(0);
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
            <div>
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  textAlign: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    backgroundColor: "darkblue",
                    padding: "6px",
                    margin: "0,auto",
                    width: "70rem",
                    height: "35rem",
                    overflow: "hidden",
                  }}
                >
                  <span>{`${currentQuestionIndex + 1} / ${
                    questions.length
                  }`}</span>
                  <div style={{ padding: "6px" }} >
                    <span style={{ color: "white" }} >
                      {questions[currentQuestionIndex].question.quest}
                    </span>
                  </div>
                  <div>
                    <img
                      height={"450rem"}
                      width={"900rem"}
                      src={questions[currentQuestionIndex].question.image}
                    />
                  </div>
                </div>
                {questions[currentQuestionIndex].answers.map((answer) => (
                  <button
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
                {}
              </div>
              <div className={`line ${animate ? "lineUp" : ""}`}>
                <h5 className="lineUp">{getMyMessage}</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewMain;
