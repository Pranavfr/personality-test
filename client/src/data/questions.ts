export interface Question {
  id: number;
  text: string;
  dimension: 'Mind' | 'Energy' | 'Nature' | 'Tactics';
  direction: 'I' | 'E' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P';
}

export const questions: Question[] = [
  // Mind dimension (Introversion vs Extraversion)
  { id: 1, text: "I enjoy being the center of attention in social situations.", dimension: "Mind", direction: "E" },
  { id: 2, text: "I prefer to work alone rather than in a team.", dimension: "Mind", direction: "I" },
  { id: 3, text: "I feel energized after spending time with a large group of people.", dimension: "Mind", direction: "E" },
  { id: 4, text: "I need quiet time to recharge after social interactions.", dimension: "Mind", direction: "I" },
  { id: 5, text: "I speak up easily in meetings or group discussions.", dimension: "Mind", direction: "E" },
  { id: 6, text: "I prefer to think things through before speaking.", dimension: "Mind", direction: "I" },
  { id: 7, text: "I enjoy meeting new people and making new connections.", dimension: "Mind", direction: "E" },
  { id: 8, text: "I have a small circle of close friends rather than many acquaintances.", dimension: "Mind", direction: "I" },
  { id: 9, text: "I often share my thoughts and feelings with others.", dimension: "Mind", direction: "E" },
  { id: 10, text: "I prefer to process my thoughts internally before sharing them.", dimension: "Mind", direction: "I" },
  { id: 11, text: "I thrive in busy, active environments.", dimension: "Mind", direction: "E" },
  { id: 12, text: "I prefer calm, quiet environments for working and relaxing.", dimension: "Mind", direction: "I" },
  { id: 13, text: "I'm comfortable being the leader in group activities.", dimension: "Mind", direction: "E" },
  { id: 14, text: "I prefer to observe and listen rather than lead discussions.", dimension: "Mind", direction: "I" },

  // Energy dimension (Sensing vs Intuition)
  { id: 15, text: "I often think about future possibilities and potential outcomes.", dimension: "Energy", direction: "N" },
  { id: 16, text: "I focus on concrete facts and practical details.", dimension: "Energy", direction: "S" },
  { id: 17, text: "I trust my hunches and gut feelings about situations.", dimension: "Energy", direction: "N" },
  { id: 18, text: "I prefer to rely on proven methods and established procedures.", dimension: "Energy", direction: "S" },
  { id: 19, text: "I enjoy exploring new ideas and concepts, even if they're theoretical.", dimension: "Energy", direction: "N" },
  { id: 20, text: "I prefer practical, hands-on activities over abstract discussions.", dimension: "Energy", direction: "S" },
  { id: 21, text: "I often see patterns and connections that others might miss.", dimension: "Energy", direction: "N" },
  { id: 22, text: "I pay close attention to details and specifics.", dimension: "Energy", direction: "S" },
  { id: 23, text: "I'm drawn to innovative solutions and creative approaches.", dimension: "Energy", direction: "N" },
  { id: 24, text: "I value experience and what has worked in the past.", dimension: "Energy", direction: "S" },
  { id: 25, text: "I enjoy brainstorming and generating new ideas.", dimension: "Energy", direction: "N" },
  { id: 26, text: "I prefer step-by-step instructions and clear guidelines.", dimension: "Energy", direction: "S" },
  { id: 27, text: "I'm comfortable with ambiguity and uncertainty.", dimension: "Energy", direction: "N" },
  { id: 28, text: "I like to have clear, concrete information before making decisions.", dimension: "Energy", direction: "S" },

  // Nature dimension (Thinking vs Feeling)
  { id: 29, text: "I make decisions based on logic and objective analysis.", dimension: "Nature", direction: "T" },
  { id: 30, text: "I consider people's feelings when making decisions.", dimension: "Nature", direction: "F" },
  { id: 31, text: "I can easily separate my emotions from my decision-making process.", dimension: "Nature", direction: "T" },
  { id: 32, text: "I believe harmony and cooperation are more important than efficiency.", dimension: "Nature", direction: "F" },
  { id: 33, text: "I value fairness and impartiality above all else.", dimension: "Nature", direction: "T" },
  { id: 34, text: "I'm naturally empathetic and can easily understand others' emotions.", dimension: "Nature", direction: "F" },
  { id: 35, text: "I prefer to give honest feedback, even if it might hurt someone's feelings.", dimension: "Nature", direction: "T" },
  { id: 36, text: "I try to find win-win solutions that make everyone happy.", dimension: "Nature", direction: "F" },
  { id: 37, text: "I analyze problems systematically and rationally.", dimension: "Nature", direction: "T" },
  { id: 38, text: "I trust my values and personal beliefs when making important decisions.", dimension: "Nature", direction: "F" },
  { id: 39, text: "I can be tough-minded when necessary, even if it's uncomfortable.", dimension: "Nature", direction: "T" },
  { id: 40, text: "I'm sensitive to criticism and take it personally.", dimension: "Nature", direction: "F" },
  { id: 41, text: "I believe rules should be applied consistently to everyone.", dimension: "Nature", direction: "T" },
  { id: 42, text: "I think circumstances should be considered when applying rules.", dimension: "Nature", direction: "F" },

  // Tactics dimension (Judging vs Perceiving)
  { id: 43, text: "I prefer to have a clear plan and structure for my day.", dimension: "Tactics", direction: "J" },
  { id: 44, text: "I like to keep my options open and adapt as situations change.", dimension: "Tactics", direction: "P" },
  { id: 45, text: "I feel comfortable making decisions quickly and sticking to them.", dimension: "Tactics", direction: "J" },
  { id: 46, text: "I prefer to gather more information before making final decisions.", dimension: "Tactics", direction: "P" },
  { id: 47, text: "I like to finish projects well before the deadline.", dimension: "Tactics", direction: "J" },
  { id: 48, text: "I work best under pressure and close to deadlines.", dimension: "Tactics", direction: "P" },
  { id: 49, text: "I prefer organized, structured environments.", dimension: "Tactics", direction: "J" },
  { id: 50, text: "I thrive in flexible, adaptable environments.", dimension: "Tactics", direction: "P" },
  { id: 51, text: "I like to have things settled and decided.", dimension: "Tactics", direction: "J" },
  { id: 52, text: "I enjoy exploring multiple possibilities before choosing.", dimension: "Tactics", direction: "P" },
  { id: 53, text: "I feel satisfied when I complete tasks and check them off my list.", dimension: "Tactics", direction: "J" },
  { id: 54, text: "I prefer to start multiple projects and work on them simultaneously.", dimension: "Tactics", direction: "P" }
];
