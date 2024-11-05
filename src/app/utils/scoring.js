export const calculateResult = (answers) => {
    // Count frequency of each personality type
    const counts = answers.reduce((acc, score) => {
      acc[score] = (acc[score] || 0) + 1;
      return acc;
    }, {});
  
    // Find the most frequent personality type
    return Object.entries(counts).reduce((a, b) => 
      counts[a] > counts[b] ? a : b
    )[0];
  };