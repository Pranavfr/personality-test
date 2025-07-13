import { useState, useEffect } from 'react';

export interface QuizState {
  currentQuestion: number;
  selectedAnswers: Record<number, number>;
}

export function useQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  // Load saved state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('quizState');
    if (saved) {
      try {
        const state: QuizState = JSON.parse(saved);
        setCurrentQuestion(state.currentQuestion);
        setSelectedAnswers(state.selectedAnswers);
      } catch (error) {
        console.error('Error loading quiz state:', error);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    const state: QuizState = {
      currentQuestion,
      selectedAnswers
    };
    localStorage.setItem('quizState', JSON.stringify(state));
  }, [currentQuestion, selectedAnswers]);

  const selectAnswer = (questionIndex: number, answer: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const nextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
  };

  const previousQuestion = () => {
    setCurrentQuestion(prev => Math.max(0, prev - 1));
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    localStorage.removeItem('quizState');
  };

  return {
    currentQuestion,
    selectedAnswers,
    setCurrentQuestion,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetQuiz
  };
}
