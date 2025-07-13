import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, TrendingUp, Clock, Play, Star } from "lucide-react";
import PersonalityCard from "@/components/personality-card";

const sampleTypes = [
  {
    code: "INFP",
    title: "The Mediator",
    description: "Idealistic, empathetic, and creative",
    color: "bg-purple-500"
  },
  {
    code: "ENTJ",
    title: "The Commander",
    description: "Natural leader, strategic thinker",
    color: "bg-blue-500"
  },
  {
    code: "INTP",
    title: "The Thinker",
    description: "Logical, innovative, independent",
    color: "bg-green-500"
  },
  {
    code: "ESFJ",
    title: "The Consul",
    description: "Caring, social, supportive",
    color: "bg-orange-500"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="text-primary text-2xl" />
              <h1 className="text-2xl font-bold text-slate-900">PersonalityTest</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">About</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">Types</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">Help</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="gradient-bg py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Discover Your{" "}
                <span className="text-yellow-300">Personality Type</span>
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-slate-100 max-w-3xl mx-auto">
                Take our comprehensive 54-question assessment to unlock insights about your unique personality, strengths, and preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/quiz">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-slate-100 text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Start Your Test
                  </Button>
                </Link>
                <div className="flex items-center text-slate-200">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>Takes 10-15 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Take This Test?</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Gain deep insights into your personality with our scientifically-based assessment
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-primary text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Self-Awareness</h4>
                  <p className="text-slate-600">Understand your natural tendencies, preferences, and behavioral patterns</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-secondary text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Better Relationships</h4>
                  <p className="text-slate-600">Improve communication and understanding with friends, family, and colleagues</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-accent text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Personal Growth</h4>
                  <p className="text-slate-600">Identify your strengths and areas for development to reach your potential</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Personality Types Preview */}
        <section className="py-20 px-4 bg-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">16 Personality Types</h3>
              <p className="text-lg text-slate-600">Each type has unique characteristics, strengths, and growth opportunities</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sampleTypes.map((type) => (
                <PersonalityCard key={type.code} type={type} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="ghost" className="text-primary font-semibold hover:text-primary/80">
                View All 16 Types
                <TrendingUp className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
