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
      "Passionate about helping people reach their potential"
    ],
    weaknesses: [
      "Can be overly sensitive to criticism",
      "May neglect their own needs for others",
      "Tendency to be overly idealistic",
      "Can struggle with making tough decisions that hurt others",
      "May become overwhelmed by others' emotions"
    ],
    careerPaths: [
      "Teaching and Education",
      "Counseling and Psychology",
      "Human Resources and Training",
      "Non-profit and Social Work"
    ],
    growthActivities: [
      "Practice setting healthy boundaries",
      "Develop skills in constructive conflict resolution",
      "Learn to delegate tasks effectively",
      "Focus on self-care and personal needs"
    ],
    relationshipTips: [
      "Communicate your needs clearly to your partner",
      "Learn to accept and give constructive criticism",
      "Balance giving support with receiving it",
      "Practice active listening without trying to fix everything"
    ],
    cognitiveFunction: "Extraverted Feeling (Fe)",
    workplaceHabits: [
      "Thrives in collaborative team environments",
      "Prefers people-centered rather than task-focused work",
      "Excels at building consensus and group harmony",
      "Enjoys mentoring and developing others"
    ],
    stressFactors: [
      "Conflict and interpersonal tension",
      "Criticism of their values or character",
      "Isolation from others for extended periods",
      "Being unable to help someone in need"
    ],
    motivations: [
      "Helping others reach their full potential",
      "Creating harmony and positive relationships",
      "Making a meaningful difference in the world",
      "Inspiring and motivating others to achieve their goals"
    ],
    communicationStyle: "Warm, enthusiastic, and engaging. Skilled at reading emotions and adapting their communication style to their audience.",
    decisionMakingStyle: "Considers the impact on people and relationships first. Seeks input from others and prefers collaborative decision-making.",
    learningStyle: "Social and collaborative, preferring group discussions and interactive learning. Learns best when material is personally meaningful.",
    famousPeople: [
      { name: "Oprah Winfrey", profession: "Media Mogul & Philanthropist" },
      { name: "Barack Obama", profession: "Former President" },
      { name: "Maya Angelou", profession: "Poet & Author" },
      { name: "Martin Luther King Jr.", profession: "Civil Rights Leader" }
    ]
  },
  {
    code: "INTJ",
    title: "The Architect",
    description: "Imaginative and strategic thinkers, with a plan for everything. You're independent, decisive, and have strong convictions.",
    emoji: "🏗️",
    color: "bg-purple-600",
    role: "Analyst",
    roleDescription: "These personality types embrace rationality and impartiality, excelling in intellectual debates and scientific fields.",
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
    roleDescription: "These personality types embrace rationality and impartiality, excelling in intellectual debates and scientific fields.",
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
    roleDescription: "These personality types embrace rationality and impartiality, excelling in intellectual debates and scientific fields.",
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
  },
  // Add basic definitions for the other 12 types to prevent errors
  {
    code: "ENFP",
    title: "The Campaigner",
    description: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
    emoji: "🎨",
    color: "bg-orange-600",
    role: "Diplomat",
    roleDescription: "These personality types are focused on empathy and cooperation, excelling in diplomatic and humanistic roles.",
    strategy: "Social Engagement",
    strategyDescription: "These types seek to understand and connect with others, finding meaning through relationships and shared experiences.",
    strengths: ["Enthusiastic and energetic", "Creative and innovative", "Excellent people skills", "Strong communication abilities", "Flexible and adaptable"],
    weaknesses: ["Can be overly emotional", "Difficulty with routine tasks", "May struggle with follow-through", "Can be disorganized", "Sensitive to criticism"],
    careerPaths: ["Marketing & Advertising", "Journalism & Writing", "Arts & Entertainment", "Social Work"],
    growthActivities: ["Develop organizational skills", "Practice time management", "Learn to handle criticism", "Focus on completing projects"],
    relationshipTips: ["Be consistent in your commitments", "Share your enthusiasm appropriately", "Listen actively to your partner", "Balance social time with quality time"],
    cognitiveFunction: "Extraverted Intuition (Ne)",
    workplaceHabits: ["Thrives in creative environments", "Values variety and flexibility", "Enjoys brainstorming and collaboration", "Prefers people-focused work"],
    stressFactors: ["Rigid structures and routines", "Isolation from people", "Micromanagement", "Lack of creative freedom"],
    motivations: ["Inspiring others", "Creative expression", "Making connections", "Exploring new possibilities"],
    communicationStyle: "Enthusiastic and expressive, enjoys sharing ideas and connecting with others emotionally.",
    decisionMakingStyle: "Considers multiple options and seeks input from others. Values harmony and personal impact in decisions.",
    learningStyle: "Interactive and experiential, learns best through discussion and hands-on activities.",
    famousPeople: [
      { name: "Robin Williams", profession: "Actor & Comedian" },
      { name: "Ellen DeGeneres", profession: "TV Host" },
      { name: "Walt Disney", profession: "Animator & Entrepreneur" },
      { name: "Mark Twain", profession: "Author" }
    ]
  },
  {
    code: "INFP",
    title: "The Mediator",
    description: "Poetic, kind and altruistic people, always eager to help a good cause.",
    emoji: "🌸",
    color: "bg-pink-600",
    role: "Diplomat",
    roleDescription: "These personality types are focused on empathy and cooperation, excelling in diplomatic and humanistic roles.",
    strategy: "Constant Improvement",
    strategyDescription: "These types are always seeking ways to improve themselves and their understanding of the world around them.",
    strengths: ["Strong personal values", "Creative and artistic", "Empathetic and compassionate", "Flexible and open-minded", "Passionate about causes"],
    weaknesses: ["Can be overly idealistic", "Difficulty with criticism", "May procrastinate", "Can be too self-critical", "Struggles with conflict"],
    careerPaths: ["Writing & Literature", "Counseling & Therapy", "Arts & Design", "Non-profit Work"],
    growthActivities: ["Set realistic goals", "Practice assertiveness", "Develop organizational skills", "Learn conflict resolution"],
    relationshipTips: ["Express your needs clearly", "Practice compromise", "Share your values openly", "Be patient with different perspectives"],
    cognitiveFunction: "Introverted Feeling (Fi)",
    workplaceHabits: ["Values meaningful work", "Prefers flexible schedules", "Enjoys independent work", "Focuses on personal growth"],
    stressFactors: ["Value conflicts", "Harsh criticism", "Tight deadlines", "Impersonal environments"],
    motivations: ["Personal authenticity", "Helping others", "Creative expression", "Making a difference"],
    communicationStyle: "Gentle and thoughtful, values deep conversations about meaningful topics.",
    decisionMakingStyle: "Makes decisions based on personal values and potential impact on others.",
    learningStyle: "Reflective and independent, learns best when material connects to personal interests and values.",
    famousPeople: [
      { name: "Johnny Depp", profession: "Actor" },
      { name: "Kurt Cobain", profession: "Musician" },
      { name: "Princess Diana", profession: "Royal & Humanitarian" },
      { name: "J.K. Rowling", profession: "Author" }
    ]
  },
  {
    code: "ENTP",
    title: "The Debater",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge.",
    emoji: "🔥",
    color: "bg-yellow-600",
    role: "Analyst",
    roleDescription: "These personality types embrace rationality and impartiality, excelling in intellectual debates and scientific fields.",
    strategy: "Social Engagement",
    strategyDescription: "These types seek to understand and connect with others, finding meaning through relationships and shared experiences.",
    strengths: ["Quick thinking and wit", "Excellent debating skills", "Innovative and creative", "Adaptable and flexible", "Charismatic and engaging"],
    weaknesses: ["Can be argumentative", "May struggle with routine", "Difficulty with follow-through", "Can be insensitive", "Impatient with details"],
    careerPaths: ["Entrepreneurship", "Law & Legal Services", "Marketing & Sales", "Innovation & R&D"],
    growthActivities: ["Practice active listening", "Develop project completion skills", "Learn to consider others' feelings", "Focus on practical implementation"],
    relationshipTips: ["Be mindful of others' sensitivities", "Follow through on commitments", "Share your thought process", "Practice patience"],
    cognitiveFunction: "Extraverted Intuition (Ne)",
    workplaceHabits: ["Enjoys intellectual challenges", "Values innovation and creativity", "Prefers flexible work arrangements", "Thrives in dynamic environments"],
    stressFactors: ["Routine and repetitive tasks", "Micromanagement", "Lack of intellectual stimulation", "Rigid structures"],
    motivations: ["Intellectual stimulation", "Innovation and change", "Debating ideas", "Exploring possibilities"],
    communicationStyle: "Energetic and engaging, loves discussing ideas and challenging conventional thinking.",
    decisionMakingStyle: "Considers multiple possibilities and enjoys exploring different options before deciding.",
    learningStyle: "Interactive and discussion-based, learns best through debate and exploration of ideas.",
    famousPeople: [
      { name: "Leonardo da Vinci", profession: "Artist & Inventor" },
      { name: "Benjamin Franklin", profession: "Inventor & Statesman" },
      { name: "Steve Wozniak", profession: "Tech Innovator" },
      { name: "Neil Patrick Harris", profession: "Actor" }
    ]
  },
  {
    code: "INFJ",
    title: "The Advocate",
    description: "Quiet and mystical, yet very inspiring and tireless idealists.",
    emoji: "🔮",
    color: "bg-indigo-600",
    role: "Diplomat",
    roleDescription: "These personality types are focused on empathy and cooperation, excelling in diplomatic and humanistic roles.",
    strategy: "Constant Improvement",
    strategyDescription: "These types are always seeking ways to improve themselves and their understanding of the world around them.",
    strengths: ["Strong intuition and insight", "Passionate about causes", "Creative and artistic", "Empathetic and understanding", "Organized and decisive"],
    weaknesses: ["Can be overly sensitive", "Tendency to burn out", "May be too idealistic", "Difficulty with criticism", "Can be stubborn"],
    careerPaths: ["Counseling & Psychology", "Writing & Literature", "Non-profit Leadership", "Healthcare & Medicine"],
    growthActivities: ["Set realistic expectations", "Practice self-care", "Develop thick skin", "Learn to delegate"],
    relationshipTips: ["Communicate your needs clearly", "Be patient with different perspectives", "Share your vision", "Practice compromise"],
    cognitiveFunction: "Introverted Intuition (Ni)",
    workplaceHabits: ["Values meaningful work", "Prefers quiet environments", "Enjoys helping others", "Focuses on long-term goals"],
    stressFactors: ["Conflict and tension", "Lack of meaning in work", "Criticism of personal values", "Chaotic environments"],
    motivations: ["Making a difference", "Personal growth", "Helping others", "Creating harmony"],
    communicationStyle: "Thoughtful and insightful, prefers deep conversations about meaningful topics.",
    decisionMakingStyle: "Makes decisions based on values and long-term vision, considering impact on others.",
    learningStyle: "Reflective and independent, learns best when material connects to personal interests and future goals.",
    famousPeople: [
      { name: "Nelson Mandela", profession: "Civil Rights Leader" },
      { name: "Mother Teresa", profession: "Humanitarian" },
      { name: "Mahatma Gandhi", profession: "Activist" },
      { name: "Martin Luther King Jr.", profession: "Civil Rights Leader" }
    ]
  },
  {
    code: "ISTJ",
    title: "The Logistician",
    description: "Practical and fact-minded, reliable and responsible.",
    emoji: "📋",
    color: "bg-gray-600",
    role: "Sentinel",
    roleDescription: "These personality types are cooperative and reliable, excelling in logistics and administration.",
    strategy: "Confident Individualism",
    strategyDescription: "These types trust their own judgment and are comfortable with independence and self-reliance.",
    strengths: ["Reliable and responsible", "Practical and realistic", "Detail-oriented", "Organized and systematic", "Strong work ethic"],
    weaknesses: ["Can be inflexible", "May resist change", "Difficulty with abstract concepts", "Can be overly critical", "Struggles with emotions"],
    careerPaths: ["Accounting & Finance", "Administration & Management", "Law Enforcement", "Engineering"],
    growthActivities: ["Practice flexibility", "Learn to embrace change", "Develop emotional intelligence", "Try new experiences"],
    relationshipTips: ["Express appreciation regularly", "Be patient with different approaches", "Share your thoughts and feelings", "Make time for fun"],
    cognitiveFunction: "Introverted Sensing (Si)",
    workplaceHabits: ["Values structure and routine", "Prefers clear expectations", "Focuses on accuracy and quality", "Enjoys detailed work"],
    stressFactors: ["Sudden changes", "Disorganization", "Uncertainty", "Pressure to be social"],
    motivations: ["Stability and security", "Completing tasks", "Following traditions", "Being reliable"],
    communicationStyle: "Clear and direct, prefers factual information and structured conversations.",
    decisionMakingStyle: "Makes decisions based on facts and past experience, values stability and proven methods.",
    learningStyle: "Sequential and structured, learns best through step-by-step instruction and practice.",
    famousPeople: [
      { name: "George Washington", profession: "First President" },
      { name: "Warren Buffett", profession: "Investor" },
      { name: "Queen Elizabeth II", profession: "Monarch" },
      { name: "Jeff Bezos", profession: "Entrepreneur" }
    ]
  },
  {
    code: "ISFJ",
    title: "The Protector",
    description: "Warm-hearted and dedicated, always ready to protect loved ones.",
    emoji: "🛡️",
    color: "bg-green-500",
    role: "Sentinel",
    roleDescription: "These personality types are cooperative and reliable, excelling in logistics and administration.",
    strategy: "Social Engagement",
    strategyDescription: "These types seek to understand and connect with others, finding meaning through relationships and shared experiences.",
    strengths: ["Caring and compassionate", "Reliable and responsible", "Detail-oriented", "Loyal and devoted", "Practical and helpful"],
    weaknesses: ["Can be overly selfless", "Difficulty saying no", "May avoid conflict", "Can be too sensitive", "Struggles with change"],
    careerPaths: ["Healthcare & Nursing", "Education & Teaching", "Social Work", "Administration"],
    growthActivities: ["Practice assertiveness", "Learn to set boundaries", "Develop conflict resolution skills", "Focus on self-care"],
    relationshipTips: ["Express your needs clearly", "Set healthy boundaries", "Practice self-advocacy", "Share your feelings"],
    cognitiveFunction: "Introverted Sensing (Si)",
    workplaceHabits: ["Values helping others", "Prefers stable environments", "Focuses on details and accuracy", "Enjoys supportive roles"],
    stressFactors: ["Conflict and criticism", "Overcommitment", "Lack of appreciation", "Chaotic environments"],
    motivations: ["Helping others", "Maintaining harmony", "Following traditions", "Being needed"],
    communicationStyle: "Warm and supportive, prefers one-on-one conversations and shows genuine interest in others.",
    decisionMakingStyle: "Makes decisions based on how they affect others and what has worked in the past.",
    learningStyle: "Practical and hands-on, learns best in supportive environments with clear guidance.",
    famousPeople: [
      { name: "Mother Teresa", profession: "Humanitarian" },
      { name: "Kate Middleton", profession: "Duchess of Cambridge" },
      { name: "Jimmy Carter", profession: "Former President" },
      { name: "Rosa Parks", profession: "Civil Rights Activist" }
    ]
  },
  {
    code: "ESTJ",
    title: "The Executive",
    description: "Excellent administrators, unsurpassed at managing things or people.",
    emoji: "👔",
    color: "bg-blue-700",
    role: "Sentinel",
    roleDescription: "These personality types are cooperative and reliable, excelling in logistics and administration.",
    strategy: "People Mastery",
    strategyDescription: "These types are energized by social interaction and skilled at influencing and leading others.",
    strengths: ["Natural leadership", "Organized and efficient", "Practical and realistic", "Decisive and determined", "Strong work ethic"],
    weaknesses: ["Can be inflexible", "May be too demanding", "Difficulty with emotions", "Can be impatient", "Struggles with criticism"],
    careerPaths: ["Business Management", "Military & Law Enforcement", "Government & Politics", "Finance & Banking"],
    growthActivities: ["Practice flexibility", "Develop emotional intelligence", "Learn to delegate", "Work on patience"],
    relationshipTips: ["Show appreciation for others", "Be patient with different approaches", "Practice active listening", "Make time for relationships"],
    cognitiveFunction: "Extraverted Thinking (Te)",
    workplaceHabits: ["Values efficiency and results", "Prefers clear structure", "Enjoys leadership roles", "Focuses on goals and deadlines"],
    stressFactors: ["Disorganization", "Inefficiency", "Lack of control", "Emotional conflicts"],
    motivations: ["Achieving goals", "Leading others", "Maintaining order", "Being productive"],
    communicationStyle: "Direct and organized, prefers clear communication and structured discussions.",
    decisionMakingStyle: "Makes decisions quickly based on logic and efficiency, values proven methods.",
    learningStyle: "Structured and goal-oriented, learns best through organized instruction and practical application.",
    famousPeople: [
      { name: "Henry Ford", profession: "Industrialist" },
      { name: "Vince Lombardi", profession: "Football Coach" },
      { name: "Judge Judy", profession: "TV Judge" },
      { name: "John D. Rockefeller", profession: "Business Magnate" }
    ]
  },
  {
    code: "ESFJ",
    title: "The Consul",
    description: "Extraordinarily caring, social and popular people, always eager to help.",
    emoji: "🤝",
    color: "bg-rose-600",
    role: "Sentinel",
    roleDescription: "These personality types are cooperative and reliable, excelling in logistics and administration.",
    strategy: "Social Engagement",
    strategyDescription: "These types seek to understand and connect with others, finding meaning through relationships and shared experiences.",
    strengths: ["Caring and supportive", "Excellent social skills", "Organized and responsible", "Loyal and devoted", "Practical and helpful"],
    weaknesses: ["Can be overly concerned with others' opinions", "Difficulty with conflict", "May neglect own needs", "Can be inflexible", "Sensitive to criticism"],
    careerPaths: ["Healthcare & Nursing", "Education & Teaching", "Human Resources", "Event Planning"],
    growthActivities: ["Practice self-care", "Learn to handle conflict", "Develop assertiveness", "Focus on personal goals"],
    relationshipTips: ["Set healthy boundaries", "Express your needs", "Practice self-advocacy", "Value your own opinions"],
    cognitiveFunction: "Extraverted Feeling (Fe)",
    workplaceHabits: ["Values teamwork and cooperation", "Prefers people-centered work", "Enjoys helping others", "Focuses on harmony"],
    stressFactors: ["Conflict and tension", "Criticism", "Isolation", "Lack of appreciation"],
    motivations: ["Helping others", "Maintaining harmony", "Being appreciated", "Creating connections"],
    communicationStyle: "Warm and enthusiastic, genuinely interested in others and skilled at building relationships.",
    decisionMakingStyle: "Makes decisions based on how they affect others and what maintains harmony.",
    learningStyle: "Social and collaborative, learns best in group settings with supportive feedback.",
    famousPeople: [
      { name: "Taylor Swift", profession: "Singer" },
      { name: "Bill Clinton", profession: "Former President" },
      { name: "Jennifer Garner", profession: "Actress" },
      { name: "Hugh Jackman", profession: "Actor" }
    ]
  },
  {
    code: "ISTP",
    title: "The Virtuoso",
    description: "Bold and practical experimenters, masters of all kinds of tools.",
    emoji: "🔧",
    color: "bg-amber-600",
    role: "Explorer",
    roleDescription: "These personality types are spontaneous and adaptable, excelling in hands-on activities and problem-solving.",
    strategy: "Confident Individualism",
    strategyDescription: "These types trust their own judgment and are comfortable with independence and self-reliance.",
    strengths: ["Practical and hands-on", "Adaptable and flexible", "Independent and self-reliant", "Logical and analytical", "Calm under pressure"],
    weaknesses: ["Can be insensitive", "Difficulty with emotions", "May be too reserved", "Struggles with long-term planning", "Can be unpredictable"],
    careerPaths: ["Engineering & Technology", "Mechanics & Repair", "Sports & Recreation", "Emergency Services"],
    growthActivities: ["Develop communication skills", "Practice emotional expression", "Learn long-term planning", "Build relationships"],
    relationshipTips: ["Share your thoughts and feelings", "Be patient with emotional needs", "Make time for others", "Practice active listening"],
    cognitiveFunction: "Introverted Thinking (Ti)",
    workplaceHabits: ["Values independence", "Prefers hands-on work", "Enjoys problem-solving", "Focuses on practical solutions"],
    stressFactors: ["Emotional pressure", "Micromanagement", "Strict deadlines", "Interpersonal conflict"],
    motivations: ["Solving problems", "Working with tools", "Independence", "Practical results"],
    communicationStyle: "Quiet and reserved, prefers action over words and values practical information.",
    decisionMakingStyle: "Makes decisions based on logic and practical considerations, values efficiency.",
    learningStyle: "Hands-on and experiential, learns best through direct experience and trial-and-error.",
    famousPeople: [
      { name: "Clint Eastwood", profession: "Actor & Director" },
      { name: "Bear Grylls", profession: "Survivalist" },
      { name: "Michael Jordan", profession: "Basketball Player" },
      { name: "Steve Jobs", profession: "Tech Innovator" }
    ]
  },
  {
    code: "ISFP",
    title: "The Adventurer",
    description: "Flexible and charming artists, always ready to explore new possibilities.",
    emoji: "🎭",
    color: "bg-purple-500",
    role: "Explorer",
    roleDescription: "These personality types are spontaneous and adaptable, excelling in hands-on activities and problem-solving.",
    strategy: "Constant Improvement",
    strategyDescription: "These types are always seeking ways to improve themselves and their understanding of the world around them.",
    strengths: ["Creative and artistic", "Flexible and adaptable", "Caring and sensitive", "Independent and free-spirited", "Authentic and genuine"],
    weaknesses: ["Can be overly sensitive", "Difficulty with criticism", "May avoid conflict", "Struggles with long-term planning", "Can be unpredictable"],
    careerPaths: ["Arts & Design", "Photography & Film", "Music & Entertainment", "Counseling & Therapy"],
    growthActivities: ["Develop planning skills", "Practice assertiveness", "Learn to handle criticism", "Build confidence"],
    relationshipTips: ["Express your needs clearly", "Practice direct communication", "Share your values", "Be patient with different styles"],
    cognitiveFunction: "Introverted Feeling (Fi)",
    workplaceHabits: ["Values creativity and flexibility", "Prefers independent work", "Enjoys meaningful projects", "Focuses on personal values"],
    stressFactors: ["Conflict and criticism", "Rigid structures", "Pressure to conform", "Lack of creative freedom"],
    motivations: ["Creative expression", "Personal authenticity", "Helping others", "Exploring possibilities"],
    communicationStyle: "Gentle and considerate, values harmony and prefers to express thoughts through actions.",
    decisionMakingStyle: "Makes decisions based on personal values and what feels right in the moment.",
    learningStyle: "Creative and independent, learns best through hands-on experience and personal exploration.",
    famousPeople: [
      { name: "Bob Dylan", profession: "Musician" },
      { name: "Frida Kahlo", profession: "Artist" },
      { name: "Audrey Hepburn", profession: "Actress" },
      { name: "Kurt Cobain", profession: "Musician" }
    ]
  },
  {
    code: "ESTP",
    title: "The Entrepreneur",
    description: "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
    emoji: "⚡",
    color: "bg-red-500",
    role: "Explorer",
    roleDescription: "These personality types are spontaneous and adaptable, excelling in hands-on activities and problem-solving.",
    strategy: "People Mastery",
    strategyDescription: "These types are energized by social interaction and skilled at influencing and leading others.",
    strengths: ["Energetic and enthusiastic", "Adaptable and flexible", "Practical and realistic", "Excellent people skills", "Bold and confident"],
    weaknesses: ["Can be impulsive", "Difficulty with long-term planning", "May be insensitive", "Struggles with abstract concepts", "Can be impatient"],
    careerPaths: ["Sales & Marketing", "Entrepreneurship", "Sports & Recreation", "Emergency Services"],
    growthActivities: ["Develop long-term planning", "Practice patience", "Learn to consider consequences", "Build deeper relationships"],
    relationshipTips: ["Be mindful of others' feelings", "Practice active listening", "Make time for meaningful conversations", "Show appreciation"],
    cognitiveFunction: "Extraverted Sensing (Se)",
    workplaceHabits: ["Values action and results", "Prefers dynamic environments", "Enjoys working with people", "Focuses on immediate solutions"],
    stressFactors: ["Boredom and routine", "Abstract theory", "Long meetings", "Micromanagement"],
    motivations: ["Excitement and adventure", "Practical results", "Social interaction", "New experiences"],
    communicationStyle: "Energetic and engaging, prefers face-to-face interaction and focuses on immediate concerns.",
    decisionMakingStyle: "Makes decisions quickly based on current information and practical considerations.",
    learningStyle: "Active and hands-on, learns best through direct experience and practical application.",
    famousPeople: [
      { name: "Donald Trump", profession: "Businessman & Politician" },
      { name: "Ernest Hemingway", profession: "Author" },
      { name: "Madonna", profession: "Singer" },
      { name: "Bruce Willis", profession: "Actor" }
    ]
  },
  {
    code: "ESFP",
    title: "The Entertainer",
    description: "Spontaneous, energetic and enthusiastic people – life is never boring around them.",
    emoji: "🎪",
    color: "bg-pink-500",
    role: "Explorer",
    roleDescription: "These personality types are spontaneous and adaptable, excelling in hands-on activities and problem-solving.",
    strategy: "Social Engagement",
    strategyDescription: "These types seek to understand and connect with others, finding meaning through relationships and shared experiences.",
    strengths: ["Enthusiastic and energetic", "Excellent people skills", "Flexible and adaptable", "Caring and generous", "Practical and realistic"],
    weaknesses: ["Can be overly emotional", "Difficulty with long-term planning", "May seek approval too much", "Struggles with criticism", "Can be disorganized"],
    careerPaths: ["Entertainment & Performance", "Sales & Marketing", "Healthcare & Nursing", "Education & Teaching"],
    growthActivities: ["Develop planning skills", "Practice handling criticism", "Learn to be more independent", "Build organizational skills"],
    relationshipTips: ["Be genuine and authentic", "Share your enthusiasm appropriately", "Practice active listening", "Show appreciation regularly"],
    cognitiveFunction: "Extraverted Sensing (Se)",
    workplaceHabits: ["Values people and relationships", "Prefers collaborative environments", "Enjoys variety and change", "Focuses on immediate needs"],
    stressFactors: ["Conflict and criticism", "Isolation", "Rigid structures", "Impersonal environments"],
    motivations: ["Making others happy", "Social connection", "Creative expression", "New experiences"],
    communicationStyle: "Warm and enthusiastic, genuinely interested in others and skilled at making people feel comfortable.",
    decisionMakingStyle: "Makes decisions based on how they affect others and what feels right in the moment.",
    learningStyle: "Social and interactive, learns best through group activities and hands-on experience.",
    famousPeople: [
      { name: "Will Smith", profession: "Actor" },
      { name: "Elvis Presley", profession: "Singer" },
      { name: "Marilyn Monroe", profession: "Actress" },
      { name: "Jamie Oliver", profession: "Chef" }
    ]
  }
];