import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Download, RotateCcw, CheckCircle, AlertTriangle } from "lucide-react";
import ResultsBreakdown from "@/components/results-breakdown";
import { personalityTypes } from "@/data/personality-types";
import { useToast } from "@/hooks/use-toast";

interface SavedResult {
  type: string;
  scores: {
    Mind: number;
    Energy: number;
    Nature: number;
    Tactics: number;
  };
  timestamp: string;
}

export default function Results() {
  const [, setLocation] = useLocation();
  const [result, setResult] = useState<SavedResult | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedResult = localStorage.getItem('personalityTestResult');
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    } else {
      // No results found, redirect to home
      setLocation("/");
    }
  }, [setLocation]);

  if (!result) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Loading your results...</h2>
        </div>
      </div>
    );
  }

  const personalityType = personalityTypes.find(type => type.code === result.type);

  if (!personalityType) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Results not found</h2>
          <Button onClick={() => setLocation("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `I'm ${personalityType.title}!`,
          text: `I just discovered I'm ${personalityType.title} (${personalityType.code}) on this personality test!`,
          url: window.location.origin
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      const text = `I'm ${personalityType.title} (${personalityType.code})! Take the test at ${window.location.origin}`;
      navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard!",
        description: "Share link copied to clipboard"
      });
    }
  };

  const handleRestart = () => {
    localStorage.removeItem('personalityTestResult');
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Result Header */}
        <div className="text-center mb-12 result-animation">
          <Card className="p-8 mb-8">
            <CardContent className="pt-6">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Your Personality Type</h1>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="bg-primary text-white px-6 py-3 rounded-lg text-2xl font-bold">
                  {personalityType.code}
                </div>
                <div className="text-2xl font-semibold text-slate-900">
                  {personalityType.title}
                </div>
              </div>
              <div className="w-full h-48 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-6xl">{personalityType.emoji}</div>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {personalityType.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Personality Breakdown */}
        <ResultsBreakdown scores={result.scores} />

        {/* Strengths & Weaknesses */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                Strengths
              </h3>
              <ul className="space-y-2 text-slate-600">
                {personalityType.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <AlertTriangle className="text-orange-500 mr-2" />
                Areas for Growth
              </h3>
              <ul className="space-y-2 text-slate-600">
                {personalityType.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>{weakness}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Famous People */}
        <Card className="p-6 mb-12">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
              <Share2 className="text-purple-500 mr-2" />
              Famous {personalityType.code}s
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {personalityType.famousPeople.map((person, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl">{personalityType.emoji}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-900">{person.name}</p>
                  <p className="text-xs text-slate-600">{person.profession}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleShare} className="px-8 py-3">
              <Share2 className="mr-2 h-4 w-4" />
              Share Your Results
            </Button>
            <Button variant="outline" className="px-8 py-3">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
            <Button variant="secondary" onClick={handleRestart} className="px-8 py-3">
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
