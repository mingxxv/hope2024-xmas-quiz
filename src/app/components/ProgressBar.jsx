import React from 'react';

export const ProgressBar = ({ current, total }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Question {current + 1}</h2>
        <span className="text-sm text-gray-500">
          {current + 1} / {total}
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div 
          className="h-2 bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  );
};