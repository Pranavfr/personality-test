export interface PersonalityType {
  code: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  strengths: string[];
  weaknesses: string[];
  careerPaths: string[];
  growthActivities: string[];
  famousPeople: Array<{ name: string; profession: string }>;
}

export const personalityTypes: PersonalityType[] = [
  {
    code: "INTJ",
    title: "The Architect",
    description: "Imaginative and strategic thinkers, with a plan for everything. You're independent, decisive, and have strong convictions about what's right.",
    emoji: "🏗️",
    color: "bg-purple-600",
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
    famousPeople: [
      { name: "Steve Jobs", profession: "Tech Visionary" },
      { name: "Margaret Thatcher", profession: "Prime Minister" },
      { name: "Gordon Ramsay", profession: "Chef" },
      { name: "Oprah Winfrey", profession: "Media Mogul" }
    ]
  },
  {
    code: "ENTP",
    title: "The Debater",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge. You love exploring new ideas and possibilities.",
    emoji: "🎭",
    color: "bg-orange-600",
    strengths: [
      "Quick wit and mental agility",
      "Excellent at brainstorming and innovation",
      "Charismatic and engaging communicator",
      "Adaptable and resourceful",
      "Enthusiastic about new ideas"
    ],
    weaknesses: [
      "Can be argumentative and confrontational",
      "Difficulty with routine tasks",
      "May start projects without finishing them",
      "Can be insensitive to others' feelings",
      "Struggle with long-term planning"
    ],
    careerPaths: [
      "Marketing & Advertising",
      "Innovation & Product Development",
      "Sales & Business Development",
      "Journalism & Media"
    ],
    growthActivities: [
      "Practice follow-through on projects",
      "Develop emotional sensitivity",
      "Learn time management skills",
      "Focus on completing tasks"
    ],
    famousPeople: [
      { name: "Leonardo da Vinci", profession: "Renaissance Genius" },
      { name: "Walt Disney", profession: "Entertainment Pioneer" },
      { name: "Neil Patrick Harris", profession: "Actor" },
      { name: "Sarah Silverman", profession: "Comedian" }
    ]
  },
  {
    code: "INFJ",
    title: "The Advocate",
    description: "Quiet and mystical, yet very inspiring and tireless idealists. You have a deep sense of purpose and strong values.",
    emoji: "🌟",
    color: "bg-indigo-600",
    strengths: [
      "Deep empathy and understanding",
      "Strong moral compass and values",
      "Excellent at inspiring others",
      "Creative and insightful",
      "Dedicated to personal growth"
    ],
    weaknesses: [
      "Can be overly sensitive to criticism",
      "Tendency to perfectionism",
      "May burn out from overcommitment",
      "Difficulty with conflict",
      "Can be too idealistic"
    ],
    careerPaths: [
      "Counseling & Psychology",
      "Non-profit & Social Work",
      "Writing & Literature",
      "Human Resources & Training"
    ],
    growthActivities: [
      "Practice assertiveness training",
      "Set realistic expectations",
      "Learn conflict resolution skills",
      "Develop self-care routines"
    ],
    famousPeople: [
      { name: "Martin Luther King Jr.", profession: "Civil Rights Leader" },
      { name: "Gandhi", profession: "Peace Activist" },
      { name: "Nelson Mandela", profession: "Political Leader" },
      { name: "Mother Teresa", profession: "Humanitarian" }
    ]
  },
  {
    code: "INFP",
    title: "The Mediator",
    description: "Poetic, kind and altruistic people, always eager to help a good cause. You're guided by your values and seek harmony.",
    emoji: "🌈",
    color: "bg-purple-500",
    strengths: [
      "Deeply empathetic and compassionate",
      "Creative and imaginative",
      "Authentic and genuine",
      "Passionate about causes they believe in",
      "Excellent at understanding others' perspectives"
    ],
    weaknesses: [
      "Can avoid conflict at all costs",
      "Tendency toward perfectionism",
      "Difficulty with routine tasks",
      "May be overly self-critical",
      "Can be impractical with details"
    ],
    careerPaths: [
      "Counseling & Psychology",
      "Creative Writing & Arts",
      "Human Resources",
      "Social Work & Non-profits"
    ],
    growthActivities: [
      "Practice assertiveness training",
      "Set realistic deadlines",
      "Join creative communities",
      "Develop organizational systems"
    ],
    famousPeople: [
      { name: "J.K. Rowling", profession: "Author" },
      { name: "Vincent van Gogh", profession: "Artist" },
      { name: "Johnny Depp", profession: "Actor" },
      { name: "Kurt Cobain", profession: "Musician" }
    ]
  },
  {
    code: "ENFJ",
    title: "The Protagonist",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners. You're natural teachers and mentors.",
    emoji: "🎯",
    color: "bg-green-600",
    strengths: [
      "Natural ability to inspire and motivate",
      "Excellent communication skills",
      "Empathetic and understanding",
      "Strong leadership qualities",
      "Passionate about helping others grow"
    ],
    weaknesses: [
      "Can be overly idealistic",
      "May neglect their own needs",
      "Sensitive to criticism",
      "Can be manipulative when stressed",
      "Difficulty saying no to requests"
    ],
    careerPaths: [
      "Teaching & Education",
      "Human Resources & Training",
      "Public Relations & Communications",
      "Life Coaching & Counseling"
    ],
    growthActivities: [
      "Practice setting personal boundaries",
      "Develop self-care routines",
      "Learn to accept constructive criticism",
      "Focus on realistic goal-setting"
    ],
    famousPeople: [
      { name: "Barack Obama", profession: "Former President" },
      { name: "Tony Robbins", profession: "Life Coach" },
      { name: "Maya Angelou", profession: "Poet" },
      { name: "Malala Yousafzai", profession: "Activist" }
    ]
  },
  {
    code: "ENFP",
    title: "The Campaigner",
    description: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile. You inspire others with your energy.",
    emoji: "🎨",
    color: "bg-pink-600",
    strengths: [
      "Enthusiastic and energetic",
      "Excellent at connecting with people",
      "Creative and innovative thinking",
      "Flexible and adaptable",
      "Natural ability to inspire others"
    ],
    weaknesses: [
      "Can be disorganized and scattered",
      "Difficulty with routine tasks",
      "May overcommit to projects",
      "Can be overly emotional",
      "Struggle with follow-through"
    ],
    careerPaths: [
      "Marketing & Advertising",
      "Event Planning & Management",
      "Journalism & Media",
      "Arts & Entertainment"
    ],
    growthActivities: [
      "Develop organizational systems",
      "Practice time management",
      "Learn to prioritize tasks",
      "Focus on completing projects"
    ],
    famousPeople: [
      { name: "Robin Williams", profession: "Actor/Comedian" },
      { name: "Ellen DeGeneres", profession: "TV Host" },
      { name: "Will Smith", profession: "Actor" },
      { name: "Russell Brand", profession: "Comedian" }
    ]
  },
  {
    code: "ISTJ",
    title: "The Logistician",
    description: "Practical and fact-minded, reliable and responsible. You're the backbone of many organizations and communities.",
    emoji: "📊",
    color: "bg-blue-700",
    strengths: [
      "Highly organized and systematic",
      "Reliable and responsible",
      "Excellent attention to detail",
      "Strong work ethic",
      "Practical and realistic approach"
    ],
    weaknesses: [
      "Can be rigid and inflexible",
      "Difficulty with change",
      "May be overly critical",
      "Can neglect personal needs",
      "Struggle with expressing emotions"
    ],
    careerPaths: [
      "Accounting & Finance",
      "Project Management",
      "Administration & Operations",
      "Engineering & Technical Fields"
    ],
    growthActivities: [
      "Practice flexibility and adaptability",
      "Develop interpersonal skills",
      "Learn stress management",
      "Explore creative hobbies"
    ],
    famousPeople: [
      { name: "Warren Buffett", profession: "Investor" },
      { name: "George Washington", profession: "First President" },
      { name: "Jeff Bezos", profession: "Business Leader" },
      { name: "Condoleezza Rice", profession: "Former Secretary of State" }
    ]
  },
  {
    code: "ISFJ",
    title: "The Protector",
    description: "Warm-hearted and dedicated, always ready to protect their loved ones. You're caring and considerate of others' needs.",
    emoji: "🛡️",
    color: "bg-teal-600",
    strengths: [
      "Deeply caring and supportive",
      "Excellent attention to detail",
      "Reliable and trustworthy",
      "Strong sense of duty",
      "Good at remembering personal details"
    ],
    weaknesses: [
      "Can be overly selfless",
      "Difficulty saying no",
      "May be taken advantage of",
      "Resist change and new ideas",
      "Can be overly sensitive"
    ],
    careerPaths: [
      "Healthcare & Nursing",
      "Social Work & Counseling",
      "Education & Teaching",
      "Administration & Support"
    ],
    growthActivities: [
      "Practice assertiveness",
      "Learn to set boundaries",
      "Develop self-advocacy skills",
      "Embrace change gradually"
    ],
    famousPeople: [
      { name: "Mother Teresa", profession: "Humanitarian" },
      { name: "Kate Middleton", profession: "Duchess" },
      { name: "Jimmy Carter", profession: "Former President" },
      { name: "Selena Gomez", profession: "Artist" }
    ]
  },
  {
    code: "ESTJ",
    title: "The Executive",
    description: "Excellent administrators, unsurpassed at managing things – or people. You're natural leaders who get things done.",
    emoji: "💼",
    color: "bg-gray-700",
    strengths: [
      "Natural leadership abilities",
      "Excellent organizational skills",
      "Strong work ethic",
      "Practical and results-oriented",
      "Good at making tough decisions"
    ],
    weaknesses: [
      "Can be inflexible and stubborn",
      "May be insensitive to others' feelings",
      "Difficulty with abstract concepts",
      "Can be overly controlling",
      "Impatient with inefficiency"
    ],
    careerPaths: [
      "Business Management",
      "Operations & Administration",
      "Military & Law Enforcement",
      "Finance & Banking"
    ],
    growthActivities: [
      "Develop emotional intelligence",
      "Practice active listening",
      "Learn to delegate effectively",
      "Embrace creative thinking"
    ],
    famousPeople: [
      { name: "Donald Trump", profession: "Business Leader" },
      { name: "Hillary Clinton", profession: "Politician" },
      { name: "Judge Judy", profession: "TV Judge" },
      { name: "Frank Sinatra", profession: "Entertainer" }
    ]
  },
  {
    code: "ESFJ",
    title: "The Consul",
    description: "Extraordinarily caring, social and popular people, always eager to help. You're the glue that holds groups together.",
    emoji: "🤝",
    color: "bg-orange-500",
    strengths: [
      "Excellent interpersonal skills",
      "Strong sense of duty and loyalty",
      "Good at organizing people and events",
      "Warm and supportive nature",
      "Practical and detail-oriented"
    ],
    weaknesses: [
      "Can be overly people-pleasing",
      "Difficulty with conflict",
      "May neglect their own needs",
      "Can be inflexible with rules",
      "Sensitive to criticism"
    ],
    careerPaths: [
      "Human Resources",
      "Event Planning & Coordination",
      "Healthcare & Patient Care",
      "Customer Service & Relations"
    ],
    growthActivities: [
      "Practice self-care routines",
      "Learn conflict resolution",
      "Develop assertiveness skills",
      "Set personal boundaries"
    ],
    famousPeople: [
      { name: "Taylor Swift", profession: "Musician" },
      { name: "Jennifer Garner", profession: "Actress" },
      { name: "Danny Glover", profession: "Actor" },
      { name: "Sally Field", profession: "Actress" }
    ]
  },
  {
    code: "ISTP",
    title: "The Virtuoso",
    description: "Bold and practical experimenters, masters of all kinds of tools. You're adaptable and skilled problem-solvers.",
    emoji: "🔧",
    color: "bg-slate-600",
    strengths: [
      "Practical and hands-on approach",
      "Excellent problem-solving skills",
      "Adaptable and flexible",
      "Calm under pressure",
      "Independent and self-reliant"
    ],
    weaknesses: [
      "Can be insensitive to others' feelings",
      "Difficulty with long-term planning",
      "May appear distant or aloof",
      "Can be stubborn and rigid",
      "Struggle with emotional expression"
    ],
    careerPaths: [
      "Engineering & Technical Fields",
      "Skilled Trades & Crafts",
      "Emergency Services",
      "Sports & Recreation"
    ],
    growthActivities: [
      "Develop emotional awareness",
      "Practice long-term planning",
      "Improve communication skills",
      "Learn team collaboration"
    ],
    famousPeople: [
      { name: "Tom Cruise", profession: "Actor" },
      { name: "Scarlett Johansson", profession: "Actress" },
      { name: "Michael Jordan", profession: "Athlete" },
      { name: "Clint Eastwood", profession: "Actor/Director" }
    ]
  },
  {
    code: "ISFP",
    title: "The Adventurer",
    description: "Flexible and charming artists, always ready to explore new possibilities. You're sensitive and passionate about your values.",
    emoji: "🎨",
    color: "bg-emerald-600",
    strengths: [
      "Deeply compassionate and caring",
      "Creative and artistic abilities",
      "Flexible and adaptable",
      "Strong personal values",
      "Good at understanding others"
    ],
    weaknesses: [
      "Can be overly sensitive",
      "Difficulty with conflict",
      "May procrastinate on tasks",
      "Can be unpredictable",
      "Struggle with criticism"
    ],
    careerPaths: [
      "Arts & Creative Fields",
      "Healthcare & Therapy",
      "Social Work & Counseling",
      "Environmental & Animal Care"
    ],
    growthActivities: [
      "Develop assertiveness skills",
      "Practice time management",
      "Learn to handle criticism",
      "Set realistic goals"
    ],
    famousPeople: [
      { name: "Frida Kahlo", profession: "Artist" },
      { name: "Bob Dylan", profession: "Musician" },
      { name: "Audrey Hepburn", profession: "Actress" },
      { name: "Kurt Cobain", profession: "Musician" }
    ]
  },
  {
    code: "ESTP",
    title: "The Entrepreneur",
    description: "Smart, energetic and very perceptive people, who truly enjoy living on the edge. You're natural entertainers and performers.",
    emoji: "🚀",
    color: "bg-yellow-600",
    strengths: [
      "Energetic and enthusiastic",
      "Excellent at reading people",
      "Adaptable and resourceful",
      "Natural performer and entertainer",
      "Practical and results-oriented"
    ],
    weaknesses: [
      "Can be impulsive and reckless",
      "Difficulty with long-term planning",
      "May be insensitive to others",
      "Can be easily bored",
      "Struggle with routine tasks"
    ],
    careerPaths: [
      "Sales & Marketing",
      "Entertainment & Performance",
      "Sports & Athletics",
      "Emergency Services"
    ],
    growthActivities: [
      "Practice patience and reflection",
      "Develop long-term planning skills",
      "Learn emotional sensitivity",
      "Focus on follow-through"
    ],
    famousPeople: [
      { name: "Donald Trump", profession: "Business Leader" },
      { name: "Madonna", profession: "Entertainer" },
      { name: "Eddie Murphy", profession: "Comedian/Actor" },
      { name: "Bruce Willis", profession: "Actor" }
    ]
  },
  {
    code: "ESFP",
    title: "The Entertainer",
    description: "Spontaneous, energetic and enthusiastic people – life is never boring around them. You bring joy and excitement to others.",
    emoji: "🎪",
    color: "bg-rose-600",
    strengths: [
      "Enthusiastic and positive",
      "Excellent people skills",
      "Creative and artistic",
      "Spontaneous and fun-loving",
      "Empathetic and supportive"
    ],
    weaknesses: [
      "Can be easily overwhelmed",
      "Difficulty with planning",
      "May avoid difficult conversations",
      "Can be overly emotional",
      "Struggle with criticism"
    ],
    careerPaths: [
      "Entertainment & Performance",
      "Hospitality & Tourism",
      "Social Work & Counseling",
      "Arts & Creative Fields"
    ],
    growthActivities: [
      "Develop planning and organization",
      "Practice emotional regulation",
      "Learn to handle criticism",
      "Focus on long-term goals"
    ],
    famousPeople: [
      { name: "Marilyn Monroe", profession: "Actress" },
      { name: "Elvis Presley", profession: "Musician" },
      { name: "Jamie Foxx", profession: "Actor/Comedian" },
      { name: "Adele", profession: "Singer" }
    ]
  }
];
