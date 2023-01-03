export interface IQuiz {
    question: {
        quest: string;
        image: string;
    };
    answers: IAnswer[];
}


export interface IAnswer {
    text: string;
    image: string;
    isCorrect: boolean;
}