export const calculateResult = (answers) => {
    // Count occurrences of each MBTI dimension
    const counts = {
      E: answers.filter(score => score === 'E').length,
      I: answers.filter(score => score === 'I').length,
      S: answers.filter(score => score === 'S').length,
      N: answers.filter(score => score === 'N').length,
      T: answers.filter(score => score === 'T').length,
      F: answers.filter(score => score === 'F').length,
      J: answers.filter(score => score === 'J').length,
      P: answers.filter(score => score === 'P').length
    };
  
    // Determine each dimension based on majority
    const type = [
      counts.E > counts.I ? 'E' : 'I',
      counts.S > counts.N ? 'S' : 'N',
      counts.T > counts.F ? 'T' : 'F',
      counts.J > counts.P ? 'J' : 'P'
    ].join('');
  
    // Map of MBTI types to gingerbread personalities
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
      description: personalityDescriptions[type]
    };
  };