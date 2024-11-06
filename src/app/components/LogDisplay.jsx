// components/LogDisplay.jsx
import { X } from 'lucide-react';

export const LogDisplay = ({ questionLog, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="quiz-card max-h-[80vh] overflow-y-auto relative w-full max-w-md">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        
        <h2 className="result-title mb-6">Quiz Journey Log</h2>
        
        <div className="space-y-4">
          {questionLog.map((log, index) => (
            <div key={index} className="log-entry">
              <h3 className="font-medium mb-2">Question {index + 1}:</h3>
              <p className="text-muted mb-2">{log.question}</p>
              <div className="selected-answer">
                <span className="text-accent">Selected: </span> 
                {log.selectedAnswer}
                <span className="text-muted ml-2">({log.score})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};