  export const calculateResult = (answers) => {
  // Group questions by dimension (zero-based indices)
  const dimensions = {
    EI: [0, 4, 8],    // Questions 1, 5, 9
    SN: [1, 5, 9],    // Questions 2, 6, 10
    TF: [2, 6, 10],   // Questions 3, 7, 11
    JP: [3, 7, 11]    // Questions 4, 8, 12
  };

  // Count occurrences of each letter
  const counts = {
    E: answers.filter((ans, idx) => dimensions.EI.includes(idx) && ans === 'E').length,
    I: answers.filter((ans, idx) => dimensions.EI.includes(idx) && ans === 'I').length,
    S: answers.filter((ans, idx) => dimensions.SN.includes(idx) && ans === 'S').length,
    N: answers.filter((ans, idx) => dimensions.SN.includes(idx) && ans === 'N').length,
    T: answers.filter((ans, idx) => dimensions.TF.includes(idx) && ans === 'T').length,
    F: answers.filter((ans, idx) => dimensions.TF.includes(idx) && ans === 'F').length,
    J: answers.filter((ans, idx) => dimensions.JP.includes(idx) && ans === 'J').length,
    P: answers.filter((ans, idx) => dimensions.JP.includes(idx) && ans === 'P').length
  };

  // Calculate percentages for each dimension
  const calculatePercentage = (count1, count2) => {
    const total = count1 + count2;
    return total === 0 ? 50 : Math.round((count1 / total) * 100);
  };

  const scores = {
    EI: calculatePercentage(counts.E, counts.I),
    SN: calculatePercentage(counts.S, counts.N),
    TF: calculatePercentage(counts.T, counts.F),
    JP: calculatePercentage(counts.J, counts.P)
  };

  // Determine the type
  const type = [
    scores.EI >= 50 ? 'E' : 'I',
    scores.SN >= 50 ? 'S' : 'N',
    scores.TF >= 50 ? 'T' : 'F',
    scores.JP >= 50 ? 'J' : 'P'
  ].join('');

  const personalityDescriptions = {
    'ISTJ': 'The Traditional Gingerbread - Reliable and precise, you prefer following tried-and-true recipes!',
    'ISFJ': 'The Caring Gingerbread - Nurturing and detail-oriented, you love bringing sweetness to others!',
    'INFJ': 'The Mystical Gingerbread - Insightful and creative, you see magic in every sprinkle!',
    'INTJ': 'The Strategic Gingerbread - Innovative and analytical, you\'ve calculated the perfect escape route!',
    'ISTP': 'The Craftsman Gingerbread - Practical and adaptable, you know how to get out of sticky situations!',
    'ISFP': 'The Artistic Gingerbread - Spontaneous and gentle, your decorations are always unique!',
    'INFP': 'The Dreamy Gingerbread - Idealistic and caring, you believe in gingerbread magic!',
    'INTP': 'The Logical Gingerbread - Curious and precise, you\'ve theorized multiple escape plans!',
    'ESTP': 'The Energetic Gingerbread - Bold and direct, you\'re ready to jump into any adventure!',
    'ESFP': 'The Entertaining Gingerbread - Spontaneous and cheerful, you bring joy to the cookie jar!',
    'ENFP': 'The Enthusiastic Gingerbread - Creative and spirited, you spread holiday cheer wherever you go!',
    'ENTP': 'The Inventive Gingerbread - Clever and curious, you always find innovative escape routes!',
    'ESTJ': 'The Executive Gingerbread - Organized and practical, you lead other cookies to freedom!',
    'ESFJ': 'The Harmonious Gingerbread - Warm and supportive, you keep the cookie community together!',
    'ENFJ': 'The Inspiring Gingerbread - Charismatic and empathetic, you motivate other treats!',
    'ENTJ': 'The Commander Gingerbread - Confident and strategic, you\'re the master of cookie escape plans!'
  };

  return {
    type,
    scores: {
      EI: scores.EI,
      SN: scores.SN,
      TF: scores.TF,
      JP: scores.JP
    },
    description: personalityDescriptions[type]
  };
};