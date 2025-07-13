import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Users, TrendingUp, Play, Clock, ArrowRight, Menu, ArrowUp } from "lucide-react";
import PersonalityCard from "@/components/personality-card";
import { personalityTypes } from "@/data/personality-types";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleStartQuiz = () => {
    setLocation("/quiz");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get first 4 personality types for preview
  const previewTypes = personalityTypes.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">PersonalityTest</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={handleStartQuiz}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Take Test
              </button>
              <button 
                onClick={() => scrollToSection('types')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Types
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="touch-feedback">
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="gradient-bg py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="hero-text text-5xl md:text-6xl font-bold mb-6">
            Discover Your
            <span className="text-yellow-300"> True Self</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Take our comprehensive 54-question personality assessment and unlock deep insights about your unique strengths, preferences, and growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleStartQuiz}
              size="lg"
              className="touch-feedback bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Your Test
            </Button>
            <div className="flex items-center text-purple-200">
              <Clock className="w-5 h-5 mr-2" />
              <span>Takes 10-15 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Take This Test?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Gain scientifically-backed insights into your personality with our comprehensive assessment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-md transition-shadow slide-up">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Self-Awareness</h3>
                <p className="text-muted-foreground">Understand your natural tendencies, decision-making patterns, and behavioral preferences</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Better Relationships</h3>
                <p className="text-muted-foreground">Improve communication and understanding with family, friends, and colleagues</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Personal Growth</h3>
                <p className="text-muted-foreground">Identify strengths to leverage and areas for development to reach your full potential</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personality Types Preview */}
      <section id="types" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">16 Personality Types</h2>
            <p className="text-xl text-muted-foreground">Each type has unique characteristics, strengths, and growth opportunities</p>
          </div>
          
          <div className="personality-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewTypes.map((type) => (
              <PersonalityCard key={type.code} type={type} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="ghost" 
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
              onClick={handleStartQuiz}
            >
              <span>Take Test to Discover Your Type</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
