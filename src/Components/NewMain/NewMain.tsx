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
      setQuestionByDifficulty(que);
    }
  }, []);

  const [getQuestionByDifficulty, setQuestionByDifficulty] = useState<IQuiz[]>(
    []
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const handleAnswer = (answer: IAnswer) => {
    const hara = "";
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
        {currentQuestionIndex >= getQuestionByDifficulty.length ? (
          numCorrectAnswers >= 8 ? (
            <div className="certificate">
              <h1>Certificate of Completion</h1>
              <h2>כל הכבוד</h2>
              <p style={{ direction: "rtl", fontSize: "70px" }}>
                ענית על{" "}
                {`${numCorrectAnswers}/${getQuestionByDifficulty.length}`} שאלות
                נכון
                <p style={{ direction: "rtl", fontSize: "40px" }}>
                  רציתי להודות לך על השתתפותך בחידון הכדורגל, אין ספק שכדורגל זה
                  הצד החזק שלך!
                </p>
                <img width={400} height={400} src="https://media.tenor.com/LfSgwR0jqPgAAAAd/clap-applause.gif"/>
              </p>
              <footer>
                Date:{" "}
                {`${new Date().getDate()}-${
                  new Date().getMonth() + 1
                }-${new Date().getFullYear()}`}
              </footer>
            </div>
          ) : (
            "לא נורא"
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
              <div style={{ backgroundColor: "darkblue", padding: "6px" }}>
                <span>{`${currentQuestionIndex + 1} / ${
                  getQuestionByDifficulty.length
                }`}</span>
                <div style={{ padding: "6px" }}>
                  <span style={{ color: "white" }}>
                    {
                      getQuestionByDifficulty[currentQuestionIndex].question
                        .quest
                    }
                  </span>
                </div>
                <div>
                  <img
                    height={530}
                    width={730}
                    src={
                      getQuestionByDifficulty[currentQuestionIndex].question
                        .image
                    }
                  ></img>
                </div>
              </div>
              {getQuestionByDifficulty[currentQuestionIndex].answers.map(
                (answer) => (
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
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewMain;
