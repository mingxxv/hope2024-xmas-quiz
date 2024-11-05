import React from 'react';
import { RotateCcw } from 'lucide-react';

export const ResultCard = ({ result, onReset }) => {
    return (
      <div className="quiz-card">
        <h2 className="result-title">Your Result</h2>
        <div className="result-content">
          Based on your answers, you are most likely:
          <span className="result-type">{result.type}</span>
          <span className="result-description">{result.description}</span>
        </div>
        <button onClick={onReset} className="reset-button">
          <RotateCcw size={20} />
          Try Again
        </button>
      </div>
    );
  };
