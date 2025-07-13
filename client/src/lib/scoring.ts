import { Question, questions } from "@/data/questions";

export interface PersonalityScores {
  Mind: number;    // I vs E
  Energy: number;  // S vs N
  Nature: number;  // T vs F
  Tactics: number; // J vs P
}

export interface PersonalityResult {
  code: string;
  scores: PersonalityScores;
}

export function calculatePersonalityType(answers: Record<number, number>): PersonalityResult {
  const scores: PersonalityScores = {
    Mind: 0,
    Energy: 0,
    Nature: 0,
    Tactics: 0
  };

  const dimensionCounts = {
    Mind: 0,
    Energy: 0,
    Nature: 0,
    Tactics: 0
  };

  // Process each answer
  Object.entries(answers).forEach(([questionIndex, answer]) => {
    const question = questions[parseInt(questionIndex)];
    if (!question) return;

    const { dimension, direction } = question;
    
    // Convert 1-5 scale to percentage contribution
    // 1 = strongly disagree (0% toward positive direction)
    // 3 = neutral (50% toward positive direction)
    // 5 = strongly agree (100% toward positive direction)
    let contribution = ((answer - 1) / 4) * 100;

    // For negative direction questions (I, S, T, J), invert the contribution
    if (['I', 'S', 'T', 'J'].includes(direction)) {
      contribution = 100 - contribution;
    }

    scores[dimension] += contribution;
    dimensionCounts[dimension]++;
  });

  // Calculate average scores for each dimension
  Object.keys(scores).forEach(dimension => {
    const key = dimension as keyof PersonalityScores;
    if (dimensionCounts[key] > 0) {
      scores[key] = Math.round(scores[key] / dimensionCounts[key]);
    }
  });

  // Determine personality type code
  const code = [
    scores.Mind > 50 ? 'E' : 'I',
    scores.Energy > 50 ? 'N' : 'S',
    scores.Nature > 50 ? 'F' : 'T',
    scores.Tactics > 50 ? 'P' : 'J'
  ].join('');

  return {
    code,
    scores
  };
}

export function getPersonalityDescription(code: string): string {
  const descriptions: Record<string, string> = {
    'INTJ': 'The Architect - Strategic, independent, and highly competent',
    'INTP': 'The Thinker - Innovative, curious, and analytical',
    'ENTJ': 'The Commander - Bold, imaginative, and strong-willed',
    'ENTP': 'The Debater - Smart, curious, and intellectually challenging',
    'INFJ': 'The Advocate - Quiet, mystical, and inspiring',
    'INFP': 'The Mediator - Poetic, kind, and altruistic',
    'ENFJ': 'The Protagonist - Charismatic, inspiring, and natural leaders',
    'ENFP': 'The Campaigner - Enthusiastic, creative, and sociable',
    'ISTJ': 'The Logistician - Practical, reliable, and responsible',
    'ISFJ': 'The Protector - Warm-hearted, dedicated, and caring',
    'ESTJ': 'The Executive - Excellent administrators and natural leaders',
    'ESFJ': 'The Consul - Caring, social, and popular',
    'ISTP': 'The Virtuoso - Bold, practical, and skilled',
    'ISFP': 'The Adventurer - Flexible, charming, and artistic',
    'ESTP': 'The Entrepreneur - Smart, energetic, and perceptive',
    'ESFP': 'The Entertainer - Spontaneous, energetic, and enthusiastic'
  };

  return descriptions[code] || 'Unknown personality type';
}
