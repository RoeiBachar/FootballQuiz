import { IQuiz } from "../../Interfaces/IQuestions";


export const questions: IQuiz[] = [
    {
        question: {
            quest: "?מי זכתה במונדיאל 2002",
            image: "https://e0.365dm.com/21/10/2048x1152/skysports-world-cup-trophy_5555593.jpg"
        },
        answers: [
            {
                text: 'צרפת',
                image: 'https://cdn.britannica.com/82/682-050-8AA3D6A6/Flag-France.jpg',
                isCorrect: false
            }
            ,
            {
                text: 'גרמניה',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/150px-Flag_of_Germany.svg.png',
                isCorrect: false
            },
            {
                text: 'ברזיל',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/150px-Flag_of_Brazil.svg.png',
                isCorrect: true
            },
            {
                text: 'ישראל',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/150px-Flag_of_Israel.svg.png',
                isCorrect: false
            },
        ],
        difficulty: 1
    },
    {
        question: {
            quest: "Who won the World Cup in 2018?",
            image: "https://cdn.britannica.com/82/682-050-8AA3D6A6/Flag-France.jpg"
        },
        answers: [
            {
                text: 'France',
                image: 'https://cdn.britannica.com/82/682-050-8AA3D6A6/Flag-France.jpg',
                isCorrect: true
            },
            {
                text: 'Germany',
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII=',
                isCorrect: false
            },
        ],
        difficulty: 1
    }
    // {
    //     quest: "Which team has won the most Champions League titles?",
    //     answers: ["Real Madrid", "Barcelona", "AC Milan", "Bayern Munich"],
    //     correctAnswer: "Real Madrid",
    // },
    // {
    //     quest: "Which player has scored the most goals in the Premier League?",
    //     answers: [
    //         "Wayne Rooney",
    //         "Alan Shearer",
    //         "Thierry Henry",
    //         "Sergio Aguero",
    //     ],
    //     correctAnswer: "Alan Shearer",
    // },
];