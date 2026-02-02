import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Users, TrendingUp, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAssessmentStore } from '@/store/assessmentStore';

const categories = [
  {
    id: 'hr',
    name: 'Human Resources',
    description: 'Master HR strategies, talent management, organizational development, and employee engagement challenges.',
    icon: Users,
    color: 'primary',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Develop marketing strategies, brand positioning, customer acquisition, and digital marketing expertise.',
    icon: TrendingUp,
    color: 'secondary',
  },
  {
    id: 'business',
    name: 'Business Strategy',
    description: 'Navigate complex business scenarios, strategic planning, market entry, and competitive analysis.',
    icon: Briefcase,
    color: 'electric-teal',
  },
  {
    id: 'operations',
    name: 'Operations',
    description: 'Optimize operations, supply chain management, process improvement, and efficiency challenges.',
    icon: Zap,
    color: 'neon-magenta',
  },
];

export default function CategorySelectionPage() {
  const navigate = useNavigate();
  const setSelectedCategory = useAssessmentStore((state) => state.setSelectedCategory);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    navigate('/assessment/easy');
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
            className="mb-16 text-center"
          >
            <h1 className="font-heading text-6xl text-foreground mb-6">
              Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Domain</span>
            </h1>
            <p className="font-paragraph text-lg text-muted-gray-foreground max-w-2xl mx-auto">
              Choose a business domain to focus your assessment. Each domain offers specialized case studies tailored to industry-specific challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const colorMap: Record<string, string> = {
                primary: 'from-primary/5 to-primary/10 border-primary/20 hover:border-primary/50',
                secondary: 'from-secondary/5 to-secondary/10 border-secondary/20 hover:border-secondary/50',
                'electric-teal': 'from-electric-teal/5 to-electric-teal/10 border-electric-teal/20 hover:border-electric-teal/50',
                'neon-magenta': 'from-neon-magenta/5 to-neon-magenta/10 border-neon-magenta/20 hover:border-neon-magenta/50',
              };

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative bg-gradient-to-br ${colorMap[category.color]} border rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-lg bg-${category.color}/20`}>
                      <Icon className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-gray-foreground group-hover:text-foreground transition-colors" />
                  </div>

                  <h3 className="font-heading text-2xl text-foreground mb-3">
                    {category.name}
                  </h3>
                  <p className="font-paragraph text-sm text-muted-gray-foreground leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <Button
                    onClick={() => handleCategorySelect(category.id)}
                    className={`w-full bg-${category.color} hover:bg-${category.color}/90 text-white font-heading text-sm px-6 py-3 rounded-lg transition-all duration-300`}
                  >
                    Select {category.name}
                  </Button>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <h3 className="font-heading text-xl text-foreground mb-3">
              Not Sure Which Domain?
            </h3>
            <p className="font-paragraph text-muted-gray-foreground mb-6">
              Start with Business Strategy for a comprehensive overview of core business concepts and strategic thinking.
            </p>
            <Button
              onClick={() => handleCategorySelect('business')}
              className="bg-primary hover:bg-primary/90 text-white font-heading px-8 py-3 rounded-lg"
            >
              Start with Business Strategy
            </Button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
