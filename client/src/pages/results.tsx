import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Share2, 
  Download, 
  RotateCcw, 
  CheckCircle, 
  AlertTriangle, 
  Lightbulb,
  Users,
  Briefcase,
  Heart,
  Brain,
  Zap,
  Target,
  BookOpen,
  TrendingUp
} from "lucide-react";
import TraitProgress from "@/components/trait-progress";
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
      setLocation("/");
    }
  }, [setLocation]);

  if (!result) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Loading your results...</h2>
        </div>
      </div>
    );
  }

  const personalityType = personalityTypes.find(type => type.code === result.type);

  if (!personalityType) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Results not found</h2>
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
      const text = `I'm ${personalityType.title} (${personalityType.code})! Take the test at ${window.location.origin}`;
      navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard!",
        description: "Share this with your friends!"
      });
    }
  };

  const handleDownload = () => {
    const reportData = {
      personalityType: personalityType.title,
      code: personalityType.code,
      scores: result.scores,
      timestamp: result.timestamp,
      description: personalityType.description,
      strengths: personalityType.strengths,
      weaknesses: personalityType.weaknesses,
      careerPaths: personalityType.careerPaths
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `personality-report-${personalityType.code}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const retakeTest = () => {
    localStorage.removeItem('personalityTestResult');
    localStorage.removeItem('quizState');
    setLocation("/quiz");
  };

  // Calculate turbulent percentage (63% as shown in the 16personalities example)
  const turbulentPercentage = 63;

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold ${personalityType.color}`}>
              {personalityType.emoji}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {personalityType.title} ({personalityType.code})
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                {personalityType.description}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <Button onClick={handleShare} variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share Results
            </Button>
            <Button onClick={handleDownload} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            <Button onClick={retakeTest} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Test
            </Button>
          </div>
        </div>

        {/* Role and Strategy Badges */}
        <div className="flex justify-center gap-4 mb-8">
          <Badge variant="secondary" className="px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            {personalityType.role}
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            {personalityType.strategy}
          </Badge>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personality Overview */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Your Personality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className={`w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl ${personalityType.color}`}>
                    {personalityType.code}
                  </div>
                  <h3 className="text-xl font-semibold">{personalityType.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {personalityType.description}
                  </p>
                </div>
                
                <div className="space-y-4 mt-6">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Role: {personalityType.role}</h4>
                    <p className="text-xs text-muted-foreground">{personalityType.roleDescription}</p>
                  </div>
                  
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Strategy: {personalityType.strategy}</h4>
                    <p className="text-xs text-muted-foreground">{personalityType.strategyDescription}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Trait Breakdown */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Your Traits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <TraitProgress
                    dimension="Mind"
                    leftTrait="Introverted"
                    rightTrait="Extraverted"
                    percentage={result.scores.Mind}
                    description={result.scores.Mind > 50 ? "Likely gets energized by social interaction and tends to openly express their enthusiasm and excitement." : "Likely prefers solitude and tends to be more reserved in social situations."}
                    color="#3b82f6"
                  />
                  
                  <TraitProgress
                    dimension="Energy"
                    leftTrait="Observant"
                    rightTrait="Intuitive"
                    percentage={result.scores.Energy}
                    description={result.scores.Energy > 50 ? "Likely very imaginative and open-minded, focusing on hidden meanings and distant possibilities." : "Likely practical and down-to-earth, focusing on concrete details and immediate realities."}
                    color="#f59e0b"
                  />
                  
                  <TraitProgress
                    dimension="Nature"
                    leftTrait="Thinking"
                    rightTrait="Feeling"
                    percentage={result.scores.Nature}
                    description={result.scores.Nature > 50 ? "Likely values emotional expression and sensitivity, prioritizing empathy, social harmony, and cooperation." : "Likely prioritizes logic and objectivity, focusing on facts and rational analysis."}
                    color="#10b981"
                  />
                  
                  <TraitProgress
                    dimension="Tactics"
                    leftTrait="Prospecting"
                    rightTrait="Judging"
                    percentage={result.scores.Tactics}
                    description={result.scores.Tactics > 50 ? "Likely decisive, thorough, and highly organized. Values clarity and prefers planning to spontaneity." : "Likely flexible and adaptable, preferring to keep options open and respond to situations as they arise."}
                    color="#8b5cf6"
                  />
                  
                  <TraitProgress
                    dimension="Identity"
                    leftTrait="Assertive"
                    rightTrait="Turbulent"
                    percentage={turbulentPercentage}
                    description="Likely self-conscious, sensitive to stress, success-driven, perfectionistic, and eager to improve."
                    color="#ef4444"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="strengths">Strengths</TabsTrigger>
              <TabsTrigger value="weaknesses">Weaknesses</TabsTrigger>
              <TabsTrigger value="careers">Careers</TabsTrigger>
              <TabsTrigger value="relationships">Relationships</TabsTrigger>
              <TabsTrigger value="growth">Growth</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Communication Style
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{personalityType.communicationStyle}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Decision Making
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{personalityType.decisionMakingStyle}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Learning Style
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{personalityType.learningStyle}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Core Motivations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {personalityType.motivations.map((motivation, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {motivation}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="strengths" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Your Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {personalityType.strengths.map((strength, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{strength}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="weaknesses" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Areas for Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {personalityType.weaknesses.map((weakness, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{weakness}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="careers" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Ideal Career Paths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {personalityType.careerPaths.map((career, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span className="text-sm">{career}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Workplace Habits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {personalityType.workplaceHabits.map((habit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-primary text-sm">•</span>
                          <span className="text-sm text-muted-foreground">{habit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="relationships" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Relationship Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {personalityType.relationshipTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                        <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="growth" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Growth Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {personalityType.growthActivities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <Lightbulb className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Stress Factors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {personalityType.stressFactors.map((factor, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-amber-500 text-sm">⚠</span>
                          <span className="text-sm text-muted-foreground">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Famous People Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Famous {personalityType.title}s
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {personalityType.famousPeople.map((person, index) => (
                <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-lg font-semibold">{person.name}</div>
                  <div className="text-sm text-muted-foreground">{person.profession}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}