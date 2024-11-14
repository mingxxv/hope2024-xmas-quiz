// app/components/ResultCard.jsx
import { useState } from 'react';
import { RotateCcw, ClipboardList } from 'lucide-react';
import { LogDisplay } from './LogDisplay';

export const ResultCard = ({ result, onReset, questionLog }) => {
  const [showLog, setShowLog] = useState(false);

  // Safety check for result object
  if (!result?.type || !result?.scores) {
    return (
      <div className="quiz-card">
        <h2 className="result-title">Calculating Results...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="quiz-card">
        <h2 className="result-title">Your Gingerbread Personality Result</h2>
        
        <div className="result-content">
          {/* Type Display */}
          <div className="mb-8">
            <span className="text-xl">You are...</span>
            <span className="result-type block">{result.type}</span>
            <span className="result-subtitle">{result.description}</span>
          </div>

          {/* Score Bars */}
          <div className="result-scores">
            <div className="score-item">
              <span className="score-label">
                {result.scores.EI >= 50 ? 'Extraversion (E)' : 'Introversion (I)'}
              </span>
              <div className="score-bar-container">
                <div 
                  className="score-bar" 
                  style={{ width: `${result.scores.EI}%` }}
                />
                <span className="score-value">{result.scores.EI}%</span>
              </div>
            </div>

            <div className="score-item">
              <span className="score-label">
                {result.scores.SN >= 50 ? 'Sensing (S)' : 'Intuition (N)'}
              </span>
              <div className="score-bar-container">
                <div 
                  className="score-bar" 
                  style={{ width: `${result.scores.SN}%` }}
                />
                <span className="score-value">{result.scores.SN}%</span>
              </div>
            </div>

            <div className="score-item">
              <span className="score-label">
                {result.scores.TF >= 50 ? 'Thinking (T)' : 'Feeling (F)'}
              </span>
              <div className="score-bar-container">
                <div 
                  className="score-bar" 
                  style={{ width: `${result.scores.TF}%` }}
                />
                <span className="score-value">{result.scores.TF}%</span>
              </div>
            </div>

            <div className="score-item">
              <span className="score-label">
                {result.scores.JP >= 50 ? 'Judging (J)' : 'Perceiving (P)'}
              </span>
              <div className="score-bar-container">
                <div 
                  className="score-bar" 
                  style={{ width: `${result.scores.JP}%` }}
                />
                <span className="score-value">{result.scores.JP}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button onClick={onReset} className="reset-button flex-1">
            <RotateCcw size={20} />
            <span>Try Again</span>
          </button>
          
          <button 
            onClick={() => setShowLog(true)} 
            className="view-log-button flex-1"
          >
            <ClipboardList size={20} />
            <span>View Journey</span>
          </button>
        </div>
      </div>

      {/* Log Display */}
      <LogDisplay 
        questionLog={questionLog}
        isOpen={showLog}
        onClose={() => setShowLog(false)}
      />
    </>
  );
};
