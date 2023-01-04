export interface IQuiz {
    question: {
        quest: string;
        image: string;
        
    };
    answers: IAnswer[];
    difficulty: number;
}


export interface IAnswer {
    text: string;
    image?: string;
    isCorrect: boolean;
}

export interface CardProps {
    image: string;
    topic: string;
}



