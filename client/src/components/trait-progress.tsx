import { Progress } from "@/components/ui/progress";

interface TraitProgressProps {
  dimension: string;
  leftTrait: string;
  rightTrait: string;
  percentage: number;
  description: string;
  color: string;
}

export default function TraitProgress({ 
  dimension, 
  leftTrait, 
  rightTrait, 
  percentage, 
  description,
  color 
}: TraitProgressProps) {
  const isLeftLeaning = percentage < 50;
  const dominantTrait = isLeftLeaning ? leftTrait : rightTrait;
  const displayPercentage = isLeftLeaning ? 100 - percentage : percentage;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-muted-foreground">{leftTrait}</span>
        <span className="text-sm font-medium text-muted-foreground">{rightTrait}</span>
      </div>
      
      <div className="relative">
        <Progress 
          value={percentage} 
          className="h-3 bg-gray-200 dark:bg-gray-700"
        />
        <div 
          className="absolute top-0 left-0 h-3 rounded-full transition-all duration-300"
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 rounded-full shadow-sm"
          style={{ 
            left: `${percentage}%`,
            transform: 'translateX(-50%) translateY(-50%)',
            borderColor: color
          }}
        />
      </div>
      
      <div className="text-center">
        <div className="text-lg font-semibold text-foreground">
          {Math.round(displayPercentage)}% {dominantTrait}
        </div>
        <div className="text-sm text-muted-foreground mt-1">
          {dimension}: {description}
        </div>
      </div>
    </div>
  );
}