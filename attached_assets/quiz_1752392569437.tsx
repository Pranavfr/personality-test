import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import QuizQuestion from "@/components/quiz-question";
import ProgressBar from "@/components/progress-bar";
import { questions } from "@/data/questions";
import { useQuiz } from "@/hooks/use-quiz";
import { calculatePersonalityType } from "@/lib/scoring";

export default function Quiz() {
  const [, setLocation] = useLocation();
  const { 
    currentQuestion, 
    selectedAnswers, 
    setCurrentQuestion, 
    selectAnswer, 
    nextQuestion, 
    previousQuestion 
  } = useQuiz();

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      nextQuestion();
    } else {
      // Quiz complete - calculate results and navigate to results
      const personalityType = calculatePersonalityType(selectedAnswers);
      localStorage.setItem('personalityTestResult', JSON.stringify({
        type: personalityType.code,
        scores: personalityType.scores,
        timestamp: new Date().toISOString()
      }));
      setLocation("/results");
    }
  };

  const handlePrevious = () => {
    previousQuestion();
  };

  const handleAnswerSelect = (value: number) => {
    selectAnswer(currentQuestion, value);
  };

  const currentAnswer = selectedAnswers[currentQuestion];
  const isAnswered = currentAnswer !== undefined;
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <ProgressBar 
          current={currentQuestion + 1} 
          total={questions.length} 
        />

        {/* Question Card */}
        <Card className="mb-8 fade-in">
          <CardContent className="p-8">
            <QuizQuestion 
              question={questions[currentQuestion]}
              selectedValue={currentAnswer}
              onSelect={handleAnswerSelect}
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={handlePrevious}
            disabled={isFirstQuestion}
            className="px-6 py-3"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={!isAnswered}
            className="px-6 py-3"
          >
            {isLastQuestion ? "Complete Test" : "Next"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
