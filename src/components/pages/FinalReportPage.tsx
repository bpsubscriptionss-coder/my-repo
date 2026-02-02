import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, TrendingUp, Target, RotateCcw, Home } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAssessmentStore } from '@/store/assessmentStore';

export default function FinalReportPage() {
  const navigate = useNavigate();
  const { easyStage, mediumStage, difficultStage, reset } = useAssessmentStore();

  if (!easyStage || !mediumStage || !difficultStage) {
    navigate('/');
    return null;
  }

  const averageRating = Math.round(
    (easyStage.rating + mediumStage.rating + difficultStage.rating) / 3
  );

  const getOverallPerformance = (avg: number) => {
    if (avg >= 8) return {
      title: 'Excellent Performance',
      message: 'Outstanding work! You have demonstrated exceptional strategic thinking and problem-solving abilities. Your answers show deep understanding of business concepts and their practical applications.',
      recommendation: 'You are well-prepared for corporate challenges. Continue to stay updated with industry trends and consider taking on leadership roles in case competitions or business projects.',
      color: 'text-electric-teal',
      bgColor: 'from-electric-teal/10 to-electric-teal/5',
      borderColor: 'border-electric-teal/30',
    };
    if (avg >= 6) return {
      title: 'Good Performance',
      message: 'Well done! You have shown solid understanding of business case-solving. Your strategic thinking is developing well, though there is room for refinement in certain areas.',
      recommendation: 'Focus on strengthening your analytical frameworks and practice more complex cases. Consider studying successful business strategies and their implementation in real-world scenarios.',
      color: 'text-secondary',
      bgColor: 'from-secondary/10 to-secondary/5',
      borderColor: 'border-secondary/30',
    };
    return {
      title: 'Needs Improvement',
      message: 'You have made a good start, but there is significant room for growth. Case-solving requires practice and structured thinking, which develops over time.',
      recommendation: 'We strongly recommend revisiting fundamental business concepts, practicing more cases regularly, and seeking feedback. Consider studying case frameworks like SWOT, Porter\'s Five Forces, and the 4Ps of Marketing.',
      color: 'text-destructive',
      bgColor: 'from-destructive/10 to-destructive/5',
      borderColor: 'border-destructive/30',
    };
  };

  const performance = getOverallPerformance(averageRating);

  const handleRetake = () => {
    reset();
    navigate('/assessment/easy');
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
            className="mb-12 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl">
                <Award className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="font-heading text-6xl text-foreground mb-4">Final Assessment Report</h1>
            <p className="font-paragraph text-lg text-muted-gray-foreground">
              Your complete performance analysis across all three stages
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
          </motion.div>

          {/* Overall Rating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`bg-gradient-to-br ${performance.bgColor} border ${performance.borderColor} rounded-2xl p-12 mb-12`}
          >
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl text-foreground mb-4">{performance.title}</h2>
              <div className={`font-heading text-8xl ${performance.color} mb-4`}>
                {averageRating}/10
              </div>
              <p className="font-paragraph text-sm text-muted-gray-foreground">
                Average Rating Across All Stages
              </p>
            </div>
            
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-8 space-y-6">
              <div>
                <h3 className="font-heading text-xl text-foreground mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Performance Summary
                </h3>
                <p className="font-paragraph text-base text-foreground leading-relaxed">
                  {performance.message}
                </p>
              </div>
              
              <div>
                <h3 className="font-heading text-xl text-foreground mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  Recommendations
                </h3>
                <p className="font-paragraph text-base text-foreground leading-relaxed">
                  {performance.recommendation}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stage-by-Stage Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl text-foreground mb-8 text-center">
              Stage-by-Stage Performance
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-2xl text-foreground">Easy Stage</h3>
                  <div className="font-heading text-4xl text-primary">{easyStage.rating}</div>
                </div>
                <p className="font-paragraph text-sm text-muted-gray-foreground mb-4">
                  1 business case completed
                </p>
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-paragraph text-xs text-foreground leading-relaxed">
                    {easyStage.feedback.substring(0, 120)}...
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-2xl text-foreground">Medium Stage</h3>
                  <div className="font-heading text-4xl text-secondary">{mediumStage.rating}</div>
                </div>
                <p className="font-paragraph text-sm text-muted-gray-foreground mb-4">
                  2 business cases completed
                </p>
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-paragraph text-xs text-foreground leading-relaxed">
                    {mediumStage.feedback.substring(0, 120)}...
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-electric-teal/10 to-electric-teal/5 border border-electric-teal/30 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-2xl text-foreground">Difficult Stage</h3>
                  <div className="font-heading text-4xl text-electric-teal">{difficultStage.rating}</div>
                </div>
                <p className="font-paragraph text-sm text-muted-gray-foreground mb-4">
                  4 business cases completed
                </p>
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-paragraph text-xs text-foreground leading-relaxed">
                    {difficultStage.feedback.substring(0, 120)}...
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Button
              onClick={handleRetake}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg px-10 py-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Retake Assessment
            </Button>
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 font-heading text-lg px-10 py-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </motion.div>

          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="font-heading text-2xl text-foreground mb-4">
                Continue Your Journey
              </h3>
              <p className="font-paragraph text-base text-muted-gray-foreground leading-relaxed">
                Remember, mastery comes with consistent practice. Each case you solve strengthens your strategic thinking and prepares you for real-world corporate challenges. Keep learning, stay curious, and embrace every opportunity to grow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
