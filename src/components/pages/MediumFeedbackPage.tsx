import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, XCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAssessmentStore } from '@/store/assessmentStore';

export default function MediumFeedbackPage() {
  const navigate = useNavigate();
  const mediumStage = useAssessmentStore((state) => state.mediumStage);

  if (!mediumStage) {
    navigate('/assessment/medium');
    return null;
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'text-electric-teal';
    if (rating >= 5) return 'text-secondary';
    return 'text-destructive';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="font-heading text-5xl text-foreground mb-4">Medium Stage Feedback</h1>
            <p className="font-paragraph text-lg text-muted-gray-foreground">
              Review your performance and learn from the model answers
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-secondary to-electric-teal mt-6"></div>
          </motion.div>

          {/* Rating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-secondary/10 to-electric-teal/10 border border-secondary/30 rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div>
                <h2 className="font-heading text-2xl text-foreground mb-2">Your Performance Rating</h2>
                <p className="font-paragraph text-sm text-muted-gray-foreground">
                  Based on strategic thinking and answer quality
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className={`font-heading text-6xl ${getRatingColor(mediumStage.rating)}`}>
                  {mediumStage.rating}
                </div>
                <div className="flex flex-col gap-1">
                  {[...Array(10)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < mediumStage.rating ? 'text-electric-teal fill-electric-teal' : 'text-muted-gray'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 bg-background/50 backdrop-blur-sm rounded-xl p-6">
              <p className="font-paragraph text-base text-foreground leading-relaxed">
                {mediumStage.feedback}
              </p>
            </div>
          </motion.div>

          {/* Cases Feedback */}
          <div className="space-y-12">
            {mediumStage.cases.map((caseItem, caseIndex) => (
              <motion.div
                key={caseIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + caseIndex * 0.1 }}
                className="bg-gradient-to-br from-electric-teal/5 to-secondary/5 border border-electric-teal/20 rounded-2xl p-8"
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
                  <p className="font-paragraph text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                    {caseItem.scenario}
                  </p>
                </div>

                <div className="space-y-8">
                  {caseItem.questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="space-y-4">
                      <h3 className="font-heading text-xl text-foreground">
                        Question {questionIndex + 1}: {question.question}
                      </h3>

                      {/* Your Answer */}
                      <div className="bg-background/30 rounded-xl p-6 border border-muted-gray/30">
                        <div className="flex items-center gap-2 mb-3">
                          <XCircle className="h-5 w-5 text-muted-gray" />
                          <h4 className="font-heading text-base text-muted-gray-foreground">Your Answer</h4>
                        </div>
                        <p className="font-paragraph text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                          {question.userAnswer}
                        </p>
                      </div>

                      {/* Model Answer */}
                      <div className="bg-electric-teal/10 rounded-xl p-6 border border-electric-teal/30">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="h-5 w-5 text-electric-teal" />
                          <h4 className="font-heading text-base text-electric-teal">Model Answer</h4>
                        </div>
                        <p className="font-paragraph text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                          {question.modelAnswer}
                        </p>
                      </div>

                      {/* Explanation */}
                      <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/30">
                        <h4 className="font-heading text-base text-secondary mb-3">Detailed Explanation</h4>
                        <p className="font-paragraph text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next Stage Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Button
              onClick={() => navigate('/assessment/difficult')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading text-lg px-12 py-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Continue to Difficult Stage <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
