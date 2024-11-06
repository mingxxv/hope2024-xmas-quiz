// app/page.jsx
'use client';

import { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCard';
import { questions } from './data/questions';
import { calculateResult } from './utils/scoring';

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [questionLog, setQuestionLog] = useState([]);

  const handleAnswer = (option) => {
    // Add the score to answers array
    const newAnswers = [...answers, option.score];
    setAnswers(newAnswers);

    // Log the question and selected answer
    const newLog = {
      question: questions[currentQuestion].text,
      selectedAnswer: option.text,
      score: option.score
    };
    setQuestionLog([...questionLog, newLog]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setQuestionLog([]);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <ResultCard 
          result={calculateResult(answers)} 
          onReset={resetQuiz}
          questionLog={questionLog}
        />
      ) : (
        <div className="quiz-card">
          <ProgressBar 
            current={currentQuestion} 
            total={questions.length} 
          />
          <QuestionCard
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </div>
      )}
    </div>
  );
}