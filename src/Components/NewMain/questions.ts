import { IQuiz } from "../../Interfaces/IQuestions";


export const questions: IQuiz[] = [
    {
        question: {
            quest: "?מי זכתה במונדיאל 2002",
            image: "https://thumbs.gfycat.com/NegligibleImpossibleGreatwhiteshark-size_restricted.gif"
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
            quest: "כמה מחציות יש במשחק של 90 דקות?",
            image: "https://resources.premierleague.com/photos/2022/08/08/2ab10666-b34d-4b11-9d49-ce5b7924a6cf/Anthony-Taylor-referee.png?width=930&height=620"
        },
        answers: [
            {
                text: '2',
                image: '',
                isCorrect: true
            },
            {
                text: '1',
                image: '',
                isCorrect: false
            },
            {
                text: '3',
                image: '',
                isCorrect: false
            },
            {
                text: '6',
                image: '',
                isCorrect: false
            },
        ],
        difficulty: 1
    },
    {
        question: {
            quest: "באיזו עיר נולד ליאו מסי",
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/de5fa267186889.5b311b25e59a0.gif"
        },
        answers: [
            {
                text: 'רוסאריו, ארגנטינה',
                image: '',
                isCorrect: true
            },
            {
                text: 'ליסבון, פורטוגל',
                image: '',
                isCorrect: false
            },
            {
                text: 'ברצלונה, ספרד',
                image: '',
                isCorrect: false
            },
            {
                text: 'בת-ים, ישראל',
                image: '',
                isCorrect: false
            },
        ],
        difficulty: 2
    },
    {
        question: {
            quest: "?מי כבש את השער המצמק לזכות ברזיל בהפסד 7:1 לגרמניה",
            image: 'https://pyxis.nymag.com/v1/imgs/dfb/e7b/6bea14bedd70501455f7a02c469e04ba87-world-cup-brazil-goal.w710.gif'
        },
        answers: [
            {
                text: 'ניימאר',
                image: '',
                isCorrect: false
            },
            {
                text: 'קוטיניו',
                image: '',
                isCorrect: false
            },
            {
                text: 'אוסקר',
                image: '',
                isCorrect: true
            },
            {
                text: 'פפה',
                image: '',
                isCorrect: false
            },
        ],
        difficulty: 3
    },
];


