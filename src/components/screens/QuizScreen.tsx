import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { quizQuestions } from "../../data/quizQuestions";

type QuizScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Quiz">,
};

export function QuizScreen({ navigation }: QuizScreenProps) {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [timeLeft, setTimeLeft] = React.useState(30);
    const [isFinished, setIsFinished] = React.useState(false);
    const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);
    const [showFeedback, setShowFeedback] = React.useState(false);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsFinished(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleAnswer = (index: number) => {
        setSelectedAnswer(index);
        setShowFeedback(true);
        
        const isCorrect = index === quizQuestions[currentQuestion].correctAnswer;
        if (isCorrect) {
            setScore(score + 1);
        }

        setTimeout(() => {
            setShowFeedback(false);
            setSelectedAnswer(null);
            
            if (currentQuestion < quizQuestions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setIsFinished(true);
            }
        }, 1000);
    };

    if (isFinished) {
        return (
            <flexboxLayout className="bg-blue-50 h-full justify-center items-center p-4">
                <stackLayout className="bg-white p-8 rounded-xl w-full">
                    <label className="text-4xl text-center mb-4">🎓</label>
                    <label className="text-2xl font-bold text-center text-blue-800 mb-4">
                        ¡Quiz Terminado!
                    </label>
                    <label className="text-xl text-center text-gray-700 mb-6">
                        Tu puntuación: {score} de {quizQuestions.length}
                    </label>
                    <label className="text-lg text-center text-gray-600 mb-6">
                        {score === quizQuestions.length 
                            ? "¡Excelente! Dominas las normas APA." 
                            : "¡Sigue practicando para mejorar!"}
                    </label>
                    <button
                        className="bg-blue-600 text-white p-4 rounded-xl text-lg font-semibold mb-3"
                        onTap={() => navigation.navigate("Home")}
                    >
                        Volver al Inicio
                    </button>
                    <button
                        className="bg-green-600 text-white p-4 rounded-xl text-lg font-semibold"
                        onTap={() => navigation.navigate("Quiz")}
                    >
                        Intentar de Nuevo
                    </button>
                </stackLayout>
            </flexboxLayout>
        );
    }

    const question = quizQuestions[currentQuestion];

    return (
        <flexboxLayout className="bg-blue-50 h-full">
            <stackLayout className="p-6 w-full">
                <stackLayout className="bg-white p-4 rounded-xl mb-6">
                    <label className="text-xl font-bold text-blue-800 text-center mb-2">
                        Tiempo: {timeLeft}s
                    </label>
                    <progress 
                        value={timeLeft} 
                        maxValue={30} 
                        className="w-full bg-blue-200"
                    />
                </stackLayout>

                <label className="text-lg text-gray-700 mb-6">
                    Pregunta {currentQuestion + 1} de {quizQuestions.length}:
                </label>
                
                <label className="text-xl font-semibold text-blue-900 mb-6">
                    {question.question}
                </label>
                
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={`p-4 rounded-xl mb-3 text-lg ${
                            showFeedback
                                ? index === question.correctAnswer
                                    ? 'bg-green-500 text-white'
                                    : index === selectedAnswer
                                    ? 'bg-red-500 text-white'
                                    : 'bg-white border-2 border-blue-600 text-blue-800'
                                : 'bg-white border-2 border-blue-600 text-blue-800'
                        }`}
                        onTap={() => !showFeedback && handleAnswer(index)}
                    >
                        {option}
                    </button>
                ))}
            </stackLayout>
        </flexboxLayout>
    );
}