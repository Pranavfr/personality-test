import { Card, CardContent } from "@/components/ui/card";

interface PersonalityType {
  code: string;
  title: string;
  description: string;
  color: string;
  emoji: string;
}

interface PersonalityCardProps {
  type: PersonalityType;
}

export default function PersonalityCard({ type }: PersonalityCardProps) {
  return (
    <Card className="personality-card cursor-pointer touch-feedback">
      <CardContent className="p-6 text-center">
        <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${type.color}`}>
          <span className="text-2xl text-white font-bold">{type.code}</span>
        </div>
        <h4 className="text-lg font-semibold text-foreground mb-2">{type.title}</h4>
        <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
        <div className="text-2xl mt-2">{type.emoji}</div>
      </CardContent>
    </Card>
  );
}
