export interface PersonalityType {
  code: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  role: string;
  roleDescription: string;
  strategy: string;
  strategyDescription: string;
  strengths: string[];
  weaknesses: string[];
  careerPaths: string[];
  growthActivities: string[];
  relationshipTips: string[];
  cognitiveFunction: string;
  workplaceHabits: string[];
  stressFactors: string[];
  motivations: string[];
  communicationStyle: string;
  decisionMakingStyle: string;
  learningStyle: string;
  famousPeople: Array<{ name: string; profession: string }>;
}

export const personalityTypes: PersonalityType[] = [
  {
    code: "ENFJ",
    title: "The Protagonist",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners. Natural-born leaders, full of passion and charisma.",
    emoji: "🌟",
    color: "bg-green-600",
    role: "Diplomat",
    roleDescription: "These personality types are focused on empathy and cooperation, excelling in diplomatic and humanistic roles.",
    strategy: "Social Engagement",
    strategyDescription: "These types seek to understand and connect with others, finding meaning through relationships and shared experiences.",
    strengths: [
      "Charismatic and inspiring leadership",
      "Strong empathy and emotional intelligence",
      "Excellent communication and persuasion skills",
      "Natural ability to motivate and encourage others",
      "Passionate about helping people reach their potential",
      "Strong organizational and planning skills",
      "Ability to see the big picture and long-term vision"
    ],
    weaknesses: [
      "Can be overly sensitive to criticism",
      "May neglect their own needs for others",
      "Tendency to be overly idealistic",
      "Can struggle with making tough decisions that hurt others",
      "May become overwhelmed by others' emotions",
      "Can be impatient with details and routine tasks",
      "May have difficulty saying no to requests"
    ],
    careerPaths: [
      "Teaching and Education",
      "Counseling and Psychology",
      "Human Resources and Training",
      "Non-profit and Social Work",
      "Public Speaking and Coaching",
      "Politics and Diplomacy",
      "Healthcare and Nursing",
      "Marketing and Communications"
    ],
    growthActivities: [
      "Practice setting healthy boundaries",
      "Develop skills in constructive conflict resolution",
      "Learn to delegate tasks effectively",
      "Focus on self-care and personal needs",
      "Practice making difficult decisions objectively",
      "Engage in mindfulness and stress reduction activities",
      "Seek feedback and work on emotional regulation"
    ],
    relationshipTips: [
      "Communicate your needs clearly to your partner",
      "Learn to accept and give constructive criticism",
      "Balance giving support with receiving it",
      "Practice active listening without trying to fix everything",
      "Respect your partner's need for independence",
      "Express appreciation for your partner's efforts",
      "Work on managing emotional intensity in discussions"
    ],
    cognitiveFunction: "Extraverted Feeling (Fe)",
    workplaceHabits: [
      "Thrives in collaborative team environments",
      "Prefers people-centered rather than task-focused work",
      "Excels at building consensus and group harmony",
      "Enjoys mentoring and developing others",
      "Values workplace relationships and social connection",
      "Prefers flexible, dynamic work arrangements",
      "Motivated by meaningful work that helps others"
    ],
    stressFactors: [
      "Conflict and interpersonal tension",
      "Criticism of their values or character",
      "Isolation from others for extended periods",
      "Being unable to help someone in need",
      "Highly competitive or cutthroat environments",
      "Repetitive tasks without human interaction",
      "Lack of appreciation or recognition for their efforts"
    ],
    motivations: [
      "Helping others reach their full potential",
      "Creating harmony and positive relationships",
      "Making a meaningful difference in the world",
      "Inspiring and motivating others to achieve their goals",
      "Building strong communities and connections",
      "Personal growth and self-improvement",
      "Contributing to causes greater than themselves"
    ],
    communicationStyle: "Warm, enthusiastic, and engaging. Skilled at reading emotions and adapting their communication style to their audience. Prefers face-to-face interaction and values emotional connection.",
    decisionMakingStyle: "Considers the impact on people and relationships first. Seeks input from others and prefers collaborative decision-making. Values harmony and consensus in the process.",
    learningStyle: "Social and collaborative, preferring group discussions and interactive learning. Learns best when material is personally meaningful and connects to helping others.",
    famousPeople: [
      { name: "Oprah Winfrey", profession: "Media Mogul & Philanthropist" },
      { name: "Barack Obama", profession: "Former President" },
      { name: "Maya Angelou", profession: "Poet & Author" },
      { name: "Martin Luther King Jr.", profession: "Civil Rights Leader" },
      { name: "Jennifer Lawrence", profession: "Actress" },
      { name: "John Cusack", profession: "Actor" }
    ]
  },
  {
    code: "INTJ",
    title: "The Architect",
    description: "Imaginative and strategic thinkers, with a plan for everything. You're independent, decisive, and have strong convictions about what's right.",
    emoji: "🏗️",
    color: "bg-purple-600",
    role: "Analyst",
    roleDescription: "These personality types embrace rationality and impartiality, excelling in intellectual debates and scientific or technological fields.",
    strategy: "Confident Individualism",
    strategyDescription: "These types trust their own judgment and are comfortable with independence and self-reliance.",
    strengths: [
      "Strategic thinking and long-term vision",
      "Independent and self-motivated",
      "Excellent at analyzing complex problems",
      "Confident in their abilities and decisions",
      "High standards for themselves and others"
    ],
    weaknesses: [
      "Can appear overly critical or judgmental",
      "Struggle with expressing emotions",
      "May overlook important details",
      "Can be impatient with inefficiency",
      "Difficulty accepting criticism"
    ],
    careerPaths: [
      "Software Engineering & Architecture",
      "Strategic Planning & Management",
      "Research & Development",
      "Investment Banking & Finance"
    ],
    growthActivities: [
      "Practice active listening skills",
      "Develop emotional intelligence",
      "Learn to delegate effectively",
      "Join collaborative projects"
    ],
    relationshipTips: [
      "Express appreciation for your partner's contributions",
      "Share your long-term goals and vision",
      "Make time for quality conversation",
      "Be patient with different communication styles"
    ],
    cognitiveFunction: "Introverted Intuition (Ni)",
    workplaceHabits: [
      "Prefers working independently on complex projects",
      "Values competence and efficiency above all",
      "Focuses on long-term strategic objectives",
      "Appreciates minimal supervision and micromanagement"
    ],
    stressFactors: [
      "Incompetent leadership or colleagues",
      "Constant interruptions and distractions",
      "Being forced to work in teams without clear structure",
      "Lack of intellectual stimulation"
    ],
    motivations: [
      "Achieving mastery and expertise",
      "Solving complex, challenging problems",
      "Building efficient systems and processes",
      "Making a meaningful impact on the world"
    ],
    communicationStyle: "Direct and efficient, preferring substantial conversations over small talk. Values logical reasoning and evidence-based discussions.",
    decisionMakingStyle: "Analytical and methodical, considering long-term consequences. Makes decisions based on objective criteria and logical analysis.",
    learningStyle: "Theoretical and conceptual, preferring to understand underlying principles. Learns best through independent study and abstract thinking.",
    famousPeople: [
      { name: "Elon Musk", profession: "Entrepreneur" },
      { name: "Stephen Hawking", profession: "Physicist" },
      { name: "Mark Zuckerberg", profession: "Tech CEO" },
      { name: "Michelle Obama", profession: "Former First Lady" }
    ]
  },
  {
    code: "INTP",
    title: "The Thinker",
    description: "Innovative inventors with an unquenchable thirst for knowledge. You love exploring theories and abstract concepts.",
    emoji: "🧠",
    color: "bg-blue-600",
    role: "Analyst",
    roleDescription: "These personality types embrace rationality and impartiality, excelling in intellectual debates and scientific or technological fields.",
    strategy: "Constant Improvement",
    strategyDescription: "These types are always seeking ways to improve themselves and their understanding of the world around them.",
    strengths: [
      "Logical and analytical thinking",
      "Creative problem-solving abilities",
      "Objective and unbiased analysis",
      "Intellectual curiosity and love of learning",
      "Flexible and adaptable approach"
    ],
    weaknesses: [
      "Can procrastinate on routine tasks",
      "Difficulty with emotional expression",
      "May appear insensitive to others' feelings",
      "Struggle with practical implementation",
      "Can be overly critical of ideas"
    ],
    careerPaths: [
      "Research & Development",
      "Software Development",
      "Academia & Teaching",
      "Data Analysis & Statistics"
    ],
    growthActivities: [
      "Set specific deadlines for projects",
      "Practice emotional awareness",
      "Join study groups or intellectual discussions",
      "Develop project management skills"
    ],
    relationshipTips: [
      "Express interest in your partner's thoughts and ideas",
      "Make an effort to share your own feelings",
      "Be patient with different processing styles",
      "Create intellectual connection through shared interests"
    ],
    cognitiveFunction: "Introverted Thinking (Ti)",
    workplaceHabits: [
      "Prefers flexible work arrangements",
      "Values intellectual autonomy and freedom",
      "Focuses on theoretical understanding",
      "Appreciates minimal interruptions for deep work"
    ],
    stressFactors: [
      "Strict deadlines and time pressure",
      "Emotional confrontations",
      "Repetitive or mundane tasks",
      "Overly structured environments"
    ],
    motivations: [
      "Understanding complex systems and theories",
      "Intellectual stimulation and challenge",
      "Autonomy and independence",
      "Contributing to knowledge and innovation"
    ],
    communicationStyle: "Thoughtful and precise, preferring to think before speaking. Values intellectual discourse and theoretical discussions.",
    decisionMakingStyle: "Analytical and thorough, considering multiple perspectives. Takes time to evaluate options before making decisions.",
    learningStyle: "Conceptual and theoretical, preferring to understand underlying principles. Learns best through exploration and experimentation.",
    famousPeople: [
      { name: "Albert Einstein", profession: "Physicist" },
      { name: "Bill Gates", profession: "Tech Pioneer" },
      { name: "Charles Darwin", profession: "Naturalist" },
      { name: "Marie Curie", profession: "Scientist" }
    ]
  },
  {
    code: "ENTJ",
    title: "The Commander",
    description: "Bold, imaginative and strong-willed leaders, always finding a way – or making one. You're natural born leaders who inspire others.",
    emoji: "👑",
    color: "bg-red-600",
    role: "Analyst",
    roleDescription: "These personality types embrace rationality and impartiality, excelling in intellectual debates and scientific or technological fields.",
    strategy: "People Mastery",
    strategyDescription: "These types are energized by social interaction and skilled at influencing and leading others.",
    strengths: [
      "Natural leadership and charisma",
      "Strategic thinking and planning",
      "Confident and decisive",
      "Excellent at motivating others",
      "Goal-oriented and achievement-focused"
    ],
    weaknesses: [
      "Can be overly demanding of others",
      "May appear cold or insensitive",
      "Impatient with inefficiency",
      "Difficulty relaxing and taking breaks",
      "Can be overly competitive"
    ],
    careerPaths: [
      "Executive Leadership & Management",
      "Entrepreneurship & Business Development",
      "Law & Legal Services",
      "Management Consulting"
    ],
    growthActivities: [
      "Practice patience and empathy",
      "Develop active listening skills",
      "Learn stress management techniques",
      "Mentor others in leadership"
    ],
    relationshipTips: [
      "Show appreciation for your partner's efforts",
      "Practice patience with different working styles",
      "Make time for emotional connection",
      "Be supportive of your partner's goals"
    ],
    cognitiveFunction: "Extraverted Thinking (Te)",
    workplaceHabits: [
      "Takes charge in meetings and projects",
      "Values efficiency and results",
      "Focuses on strategic objectives",
      "Enjoys challenging and competitive environments"
    ],
    stressFactors: [
      "Incompetence and inefficiency",
      "Lack of control over outcomes",
      "Emotional decision-making",
      "Slow progress or delays"
    ],
    motivations: [
      "Achieving ambitious goals",
      "Leading and influencing others",
      "Building successful organizations",
      "Making a significant impact"
    ],
    communicationStyle: "Direct and assertive, preferring clear and efficient communication. Values results-oriented discussions and logical arguments.",
    decisionMakingStyle: "Quick and decisive, focusing on efficiency and results. Makes decisions based on logical analysis and strategic thinking.",
    learningStyle: "Action-oriented and practical, preferring to learn through application. Learns best when material is immediately applicable to goals.",
    famousPeople: [
      { name: "Steve Jobs", profession: "Tech Visionary" },
      { name: "Margaret Thatcher", profession: "Prime Minister" },
      { name: "Gordon Ramsay", profession: "Chef" },
      { name: "Oprah Winfrey", profession: "Media Mogul" }
    ]
  }
];