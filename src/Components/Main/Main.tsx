import "./Main.css";

import React, { useState } from "react";

function Main(): JSX.Element {
  // An array of objects representing the quiz questions
  const questions = [
    {
      quest: "Who won the World Cup in 2018?",
      answers: ["France", "Germany", "Spain", "Argentina"],
      correctAnswer: "France",
    },
    {
      quest: "Which team has won the most Champions League titles?",
      answers: ["Real Madrid", "Barcelona", "AC Milan", "Bayern Munich"],
      correctAnswer: "Real Madrid",
    },
    {
      quest: "Which player has scored the most goals in the Premier League?",
      answers: [
        "Wayne Rooney",
        "Alan Shearer",
        "Thierry Henry",
        "Sergio Aguero",
      ],
      correctAnswer: "Alan Shearer",
    },
    {
      quest: "aloba?",
      answers: ["Real Madrid", "Barcelona", "AC Milan", "Bayern Munich"],
      correctAnswer: "Real Madrid",
    },
    // Add more questions here...
  ];

  // State variables for the current question and the number of correct answers
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");

  // Function to handle the user's answer
  const handleAnswer = (answer: any) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      // Increment the number of correct answers if the answer is correct
      setNumCorrectAnswers(numCorrectAnswers + 1);
      setBackgroundColor("green");
    }
    // Go to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Render the quiz
  return (
    <div className="Main">
      {/* If there are no more questions, show the result message */}
      {currentQuestionIndex >= questions.length ? (
        <div>
          You got {numCorrectAnswers} out of {questions.length} questions
          correct!
        </div>
      ) : (
        <div>
          {/* Otherwise, show the current question and options */}
          <div>{questions[currentQuestionIndex].quest}</div>
          <div>
            {questions[currentQuestionIndex].answers.map((answer) => (
              <button
                style={{ backgroundColor: `${backgroundColor}` }}
                onClick={() => handleAnswer(answer)}
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

export default Main;
