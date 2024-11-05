import React from 'react';
import { ChevronRight } from 'lucide-react';

export const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">{question.text}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.score)}
            className="w-full bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-lg p-4 text-left flex items-center justify-between group transition-colors"
          >
            <span>{option.text}</span>
            <ChevronRight 
              className="text-gray-400 group-hover:text-gray-600" 
              size={20} 
            />
          </button>
        ))}
      </div>
    </div>
  );
};