import { Card, CardContent } from "@/components/ui/card";

interface PersonalityType {
  code: string;
  title: string;
  description: string;
  color: string;
}

interface PersonalityCardProps {
  type: PersonalityType;
}

export default function PersonalityCard({ type }: PersonalityCardProps) {
  return (
    <Card className="personality-card cursor-pointer">
      <CardContent className="p-6 text-center">
        <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${type.color}`}>
          <span className="text-2xl text-white font-bold">{type.code}</span>
        </div>
        <h4 className="text-lg font-semibold text-slate-900 mb-2">{type.code}</h4>
        <p className="text-sm text-slate-600 mb-2">{type.title}</p>
        <p className="text-xs text-slate-500">{type.description}</p>
      </CardContent>
    </Card>
  );
}
