import { Button } from "@/components/ui/button";

interface Question {
  id: number;
  text: string;
  dimension: 'Mind' | 'Energy' | 'Nature' | 'Tactics';
  direction: 'I' | 'E' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P';
}

interface QuizQuestionProps {
  question: Question;
  selectedValue?: number;
  onSelect: (value: number) => void;
}

export default function QuizQuestion({ question, selectedValue, onSelect }: QuizQuestionProps) {
  const likertButtons = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
        {question.text}
      </h2>
      
      {/* Likert Scale */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
          <span>Strongly Disagree</span>
          <span>Strongly Agree</span>
        </div>
        
        <div className="flex justify-center space-x-4">
          {likertButtons.map((value) => (
            <Button
              key={value}
              variant={selectedValue === value ? "default" : "outline"}
              size="lg"
              onClick={() => onSelect(value)}
              className={`w-12 h-12 rounded-full font-semibold likert-button touch-feedback ${
                selectedValue === value 
                  ? 'bg-primary text-white border-primary' 
                  : 'border-border hover:border-primary hover:bg-primary/10'
              }`}
            >
              {value}
            </Button>
          ))}
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          {likertButtons.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
