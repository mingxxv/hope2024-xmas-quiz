import React from 'react';
import { ChevronRight } from 'lucide-react';

export const QuestionCard = ({ question, onAnswer }) => {
    return (
      <div>
        <h3 className="question-text">{question.text}</h3>
        <div className="options-container">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.score)}
              className="option-button"
            >
              <span>{option.text}</span>
              <ChevronRight className="icon" size={20} />
            </button>
          ))}
        </div>
      </div>
    );
  };