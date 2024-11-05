import React from 'react';
import { RotateCcw } from 'lucide-react';

export const ResultCard = ({ result, onReset }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Your Result</h2>
      <p className="text-center text-lg mb-6">
        Based on your answers, you are most likely:
        <span className="block mt-2 text-xl font-bold text-blue-600">
          {result.toUpperCase()}
        </span>
      </p>
      <button
        onClick={onReset}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2"
      >
        <RotateCcw size={20} />
        Try Again
      </button>
    </div>
  );
};
