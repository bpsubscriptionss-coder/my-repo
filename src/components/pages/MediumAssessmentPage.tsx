import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ArrowRight, BookOpen, ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateBusinessCases, evaluateAnswers } from '@/services/openai';
import { useAssessmentStore } from '@/store/assessmentStore';

interface Question {
  question: string;
  userAnswer: string;
}

interface Case {
  caseTitle: string;
  scenario: string;
  questions: Question[];
}

export default function MediumAssessmentPage() {
  const navigate = useNavigate();
  const setMediumStage = useAssessmentStore((state) => state.setMediumStage);
  const selectedCategory = useAssessmentStore((state) => state.selectedCategory);
  const [cases, setCases] = useState<Case[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadCases();
  }, []);

  const loadCases = async () => {
    setIsLoading(true);
    try {
      const generatedCases = await generateBusinessCases('medium', 2, selectedCategory);
      setCases(generatedCases);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to load cases:', error);
      setIsLoading(false);
      // Retry after delay
      setTimeout(loadCases, 2000);
    }
  };

  const handleAnswerChange = (caseIndex: number, questionIndex: number, value: string) => {
    const updatedCases = [...cases];
    updatedCases[caseIndex].questions[questionIndex].userAnswer = value;
    setCases(updatedCases);
  };

  const handleSubmit = async () => {
    const allAnswered = cases.every(c => 
      c.questions.every(q => q.userAnswer.trim().length > 0)
    );

    if (!allAnswered) {
      alert('Please answer all questions before submitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      const evaluation = await evaluateAnswers(cases);
      setMediumStage(evaluation);
      navigate('/assessment/medium/feedback');
    } catch (error) {
      console.error('Evaluation failed:', error);
      alert('An error occurred during evaluation. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <button
              onClick={() => navigate('/assessment/easy')}
              className="flex items-center gap-2 text-secondary hover:text-secondary/80 mb-6 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-paragraph text-sm">Back to Easy Stage</span>
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h1 className="font-heading text-5xl text-foreground">Medium Stage Assessment</h1>
                <p className="font-paragraph text-sm text-muted-gray-foreground mt-2">
                  Complete 2 business cases with 3 questions each • Category: <span className="capitalize">{selectedCategory}</span>
                </p>
              </div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-secondary to-electric-teal"></div>
          </motion.div>

          {isLoading ? (
            <div className="flex items-center justify-center py-32">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="space-y-12">
              {cases.map((caseItem, caseIndex) => (
                <motion.div
                  key={caseIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + caseIndex * 0.1 }}
                  className="bg-gradient-to-br from-secondary/5 to-electric-teal/5 border border-secondary/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-secondary/20 px-4 py-2 rounded-lg">
                      <span className="font-heading text-lg text-secondary">Case {caseIndex + 1}</span>
                    </div>
                    <h2 className="font-heading text-3xl text-foreground">
                      {caseItem.caseTitle}
                    </h2>
                  </div>
                  
                  <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 mb-8">
                    <h3 className="font-heading text-lg text-electric-teal mb-4">Business Scenario</h3>
                    <p className="font-paragraph text-base text-foreground leading-relaxed whitespace-pre-wrap">
                      {caseItem.scenario}
                    </p>
                  </div>

                  <div className="space-y-8">
                    {caseItem.questions.map((question, questionIndex) => (
                      <div key={questionIndex} className="space-y-4">
                        <label className="font-heading text-lg text-foreground block">
                          Question {questionIndex + 1}: {question.question}
                        </label>
                        <Textarea
                          value={question.userAnswer}
                          onChange={(e) => handleAnswerChange(caseIndex, questionIndex, e.target.value)}
                          placeholder="Type your answer here..."
                          className="min-h-[200px] bg-background border-secondary/30 text-foreground font-paragraph resize-none"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center"
              >
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading text-lg px-12 py-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner className="mr-2" />
                      Evaluating...
                    </>
                  ) : (
                    <>
                      Submit Answers <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
