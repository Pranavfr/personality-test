import { Card, CardContent } from "@/components/ui/card";

interface Scores {
  Mind: number;
  Energy: number;
  Nature: number;
  Tactics: number;
}

interface ResultsBreakdownProps {
  scores: Scores;
}

export default function ResultsBreakdown({ scores }: ResultsBreakdownProps) {
  const dimensions = [
    {
      name: 'Mind',
      score: scores.Mind,
      label: scores.Mind > 50 ? 'Extraverted' : 'Introverted',
      color: 'bg-primary',
      emoji: '🧠',
      description: scores.Mind > 50 
        ? 'You prefer to focus on the outer world and gain energy from social interaction.'
        : 'You prefer to focus on your inner world and gain energy from solitude and reflection.'
    },
    {
      name: 'Energy',
      score: scores.Energy,
      label: scores.Energy > 50 ? 'Intuitive' : 'Observant',
      color: 'bg-secondary',
      emoji: '💡',
      description: scores.Energy > 50
        ? 'You focus on patterns, possibilities, and future potential rather than immediate details.'
        : 'You focus on facts, details, and practical applications rather than abstract concepts.'
    },
    {
      name: 'Nature',
      score: scores.Nature,
      label: scores.Nature > 50 ? 'Feeling' : 'Thinking',
      color: 'bg-accent',
      emoji: '❤️',
      description: scores.Nature > 50
        ? 'You prioritize personal values and the impact of decisions on people when making choices.'
        : 'You prioritize logic, consistency, and objective analysis when making decisions.'
    },
    {
      name: 'Tactics',
      score: scores.Tactics,
      label: scores.Tactics > 50 ? 'Judging' : 'Prospecting',
      color: 'bg-orange-500',
      emoji: '🔄',
      description: scores.Tactics > 50
        ? 'You prefer structure, planning, and having things decided rather than keeping options open.'
        : 'You prefer to keep your options open and adapt to new information rather than stick to rigid plans.'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      {dimensions.map((dimension) => (
        <Card key={dimension.name} className="p-6">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{dimension.emoji}</div>
              <h3 className="text-xl font-semibold text-foreground">{dimension.name}</h3>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">{dimension.label}</span>
              <span className="font-semibold text-primary">{dimension.score}%</span>
            </div>
            <div className="w-full bg-border rounded-full h-3 mb-4">
              <div 
                className={`${dimension.color} h-3 rounded-full transition-all duration-500`}
                style={{ width: `${dimension.score}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {dimension.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
