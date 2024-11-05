'use client';

import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCard';
import { questions } from './data/questions';
import { calculateResult } from './utils/scoring';

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

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
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center">
      {showResult ? (
        <ResultCard 
          result={calculateResult(answers)} 
          onReset={resetQuiz} 
        />
      ) : (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
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