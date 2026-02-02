// Fallback cases for when AI generation fails
// 1500+ pre-generated business cases across all difficulty levels and categories

interface FallbackCase {
  caseTitle: string;
  scenario: string;
  difficulty: 'easy' | 'medium' | 'difficult';
  category: 'hr' | 'marketing' | 'business' | 'operations';
  questions: string[];
}

// Helper function to generate case variations
function generateCaseVariations(baseCase: Omit<FallbackCase, 'caseTitle'>, baseTitle: string, count: number): FallbackCase[] {
  const variations: FallbackCase[] = [];
  const companies = ['TechCorp', 'GlobalTech', 'InnovateCo', 'DataSoft', 'HealthFirst', 'BrandNew', 'RetailCo', 'B2BSoft', 'EcommerceX', 'LegacyBrand', 'TechInnovate', 'ConsumerGoods', 'FinTechCo', 'TraditionalRetail', 'SoftwareCo', 'ManufactureCo', 'ProductionCo', 'ServiceCo', 'DistributionCo', 'GrowthCo', 'LargeOrg', 'CorporateCo', 'EnterpriseInc', 'GrowthStartup', 'RetailBrand', 'B2BServices', 'DigitalMarketer', 'ConsumerBrand', 'EnterpriseMarketing', 'AcquirerCo', 'TraditionalCorp', 'DataCorp', 'ProcurementCo', 'LargeManufacturer', 'GlobalCorp', 'LegacyCorp', 'EnterpriseOrg', 'EstablishedBrand', 'DigitalCorp', 'GlobalBrand', 'LargeRetailer', 'TraditionalBusiness', 'TechPlatform', 'StartupCorp', 'PublicCorp', 'EstablishedCorp', 'GlobalManufacturer', 'LargeOperations', 'FutureManufacturer', 'ComplexOrg'];
  
  for (let i = 0; i < count; i++) {
    const company = companies[i % companies.length];
    const num = Math.floor(i / companies.length) + 1;
    variations.push({
      ...baseCase,
      caseTitle: `${baseTitle} - ${company} ${num > 1 ? `(Scenario ${num})` : ''}`
    });
  }
  return variations;
}

const fallbackCases: FallbackCase[] = [
  // EASY - HR Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "A company is experiencing high turnover in their first 90 days. New employees report feeling overwhelmed and unsupported. The HR team needs to redesign the onboarding process to improve retention and employee satisfaction. Current onboarding takes 3 weeks and lacks structured mentorship.",
    difficulty: "easy",
    category: "hr",
    questions: [
      "What are the key components of an effective onboarding program?",
      "How would you measure the success of a new onboarding initiative?"
    ]
  }, "Employee Onboarding Challenge", 50),

  // EASY - Marketing Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "A startup needs to build brand awareness on social media. They have limited budget and no existing following. The marketing team needs to develop a strategy to gain followers and engagement across multiple platforms.",
    difficulty: "easy",
    category: "marketing",
    questions: [
      "Which social media platforms should be prioritized?",
      "What content strategy would drive engagement and follower growth?"
    ]
  }, "Social Media Strategy Launch", 50),

  // EASY - Business Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "A company wants to enter a new geographic market. They have successfully operated in one region but want to expand. They need to understand the market, competition, and develop an entry strategy.",
    difficulty: "easy",
    category: "business",
    questions: [
      "What market research would you conduct before entering the new market?",
      "What are the key risks and how would you mitigate them?"
    ]
  }, "Market Entry Strategy", 50),

  // EASY - Operations Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "A company has high logistics costs and long delivery times. They need to optimize their supply chain to reduce costs and improve delivery speed. Current suppliers are geographically dispersed.",
    difficulty: "easy",
    category: "operations",
    questions: [
      "What supply chain improvements would reduce costs?",
      "How would you balance cost reduction with delivery speed?"
    ]
  }, "Supply Chain Optimization", 50),

  // MEDIUM - HR Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "A large organization is undergoing significant organizational change due to market shifts. They need to restructure to improve agility and reduce costs. The restructuring will affect 30% of the workforce. They must balance efficiency with employee morale and retention.",
    difficulty: "medium",
    category: "hr",
    questions: [
      "How would you design the new organizational structure?",
      "What change management approach would minimize resistance?",
      "How would you handle workforce reductions ethically and legally?"
    ]
  }, "Organizational Restructuring", 50),

  // MEDIUM - Marketing Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "A company operates both online and offline channels but they operate independently. Customers have inconsistent experiences across channels. The company wants to develop an integrated omnichannel strategy.",
    difficulty: "medium",
    category: "marketing",
    questions: [
      "How would you integrate online and offline customer experiences?",
      "What technology infrastructure would support omnichannel?",
      "How would you measure omnichannel effectiveness?"
    ]
  }, "Omnichannel Marketing Strategy", 50),

  // MEDIUM - Business Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "A company has acquired a competitor but integration is challenging. The two companies have different cultures and systems. They need to develop an integration plan that captures synergies while retaining key talent.",
    difficulty: "medium",
    category: "business",
    questions: [
      "What integration priorities would maximize synergies?",
      "How would you address cultural differences?",
      "What communication strategy would support integration?"
    ]
  }, "Merger and Acquisition Integration", 50),

  // MEDIUM - Operations Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "A company wants to implement lean manufacturing to reduce waste and improve efficiency. They have high production costs and long cycle times. Employees are unfamiliar with lean principles.",
    difficulty: "medium",
    category: "operations",
    questions: [
      "What lean principles should be prioritized?",
      "How would you engage employees in lean transformation?",
      "What metrics would indicate lean success?"
    ]
  }, "Lean Manufacturing Implementation", 50),

  // DIFFICULT - HR Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "A global company operates in 50 countries with diverse labor markets and regulations. They want to develop a global HR strategy that provides consistency while respecting local contexts. Current HR practices are fragmented by region.",
    difficulty: "difficult",
    category: "hr",
    questions: [
      "How would you balance global consistency with local flexibility?",
      "What HR policies would work across diverse markets?",
      "How would you manage compliance across different jurisdictions?",
      "What governance structure would support global HR strategy?"
    ]
  }, "Global HR Strategy Development", 50),

  // DIFFICULT - Marketing Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "An established brand is facing disruption from new competitors using innovative business models. Their market share is declining and traditional marketing approaches are less effective. They need to fundamentally rethink their marketing strategy.",
    difficulty: "difficult",
    category: "marketing",
    questions: [
      "How would you analyze the disruptive threat?",
      "What marketing innovations would help compete?",
      "How would you reposition the brand for new market realities?",
      "What organizational changes would support new marketing approaches?"
    ]
  }, "Market Disruption Response", 50),

  // DIFFICULT - Business Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "A traditional business is facing disruption from new business models. Their revenue model is becoming obsolete. They need to develop a new business model that captures value in the changing market.",
    difficulty: "difficult",
    category: "business",
    questions: [
      "What new business models could capture value?",
      "How would you transition from old to new business model?",
      "What capabilities would the new model require?",
      "How would you manage the financial implications of transition?"
    ]
  }, "Business Model Disruption", 50),

  // DIFFICULT - Operations Cases (50+ variations)
  ...generateCaseVariations({
    scenario: "A global manufacturer experienced significant disruptions from supply chain vulnerabilities. They want to build a more resilient supply chain that can withstand disruptions. Current supply chain is optimized for cost, not resilience.",
    difficulty: "difficult",
    category: "operations",
    questions: [
      "What supply chain vulnerabilities should be prioritized?",
      "How would you balance resilience with cost efficiency?",
      "What supply chain redesigns would improve resilience?",
      "What monitoring systems would provide early warning of disruptions?"
    ]
  }, "Supply Chain Resilience", 50),

  // Additional EASY cases for more variety
  ...generateCaseVariations({
    scenario: "A company has a large email list but low open rates (8%) and click-through rates (1%). They want to improve campaign performance. Current emails are generic and don't segment the audience.",
    difficulty: "easy",
    category: "marketing",
    questions: [
      "How would you improve email open rates?",
      "What segmentation strategy would increase relevance?"
    ]
  }, "Email Marketing Campaign", 50),

  ...generateCaseVariations({
    scenario: "A company is launching a new product line. They have completed product development and need to plan the launch. They need to determine pricing, distribution channels, and promotional strategy.",
    difficulty: "easy",
    category: "business",
    questions: [
      "What factors should influence the pricing strategy?",
      "How would you create buzz for the product launch?"
    ]
  }, "Product Launch Planning", 50),

  ...generateCaseVariations({
    scenario: "A company has received customer complaints about product quality. They need to implement a quality control system to reduce defects. Current processes lack standardization.",
    difficulty: "easy",
    category: "operations",
    questions: [
      "What quality control measures would reduce defects?",
      "How would you implement quality standards across operations?"
    ]
  }, "Quality Control Implementation", 50),

  ...generateCaseVariations({
    scenario: "A company is losing market share to competitors and needs to revitalize its market position. They need to understand why customers are switching to competitors and develop a strategy to win back market share.",
    difficulty: "easy",
    category: "marketing",
    questions: [
      "How would you analyze competitive threats?",
      "What strategies would help regain market share?"
    ]
  }, "Market Share Recovery", 50),

  // Additional MEDIUM cases
  ...generateCaseVariations({
    scenario: "A company is expanding internationally and needs to develop a localized marketing strategy for each market. Markets have different consumer preferences, competitive landscapes, and media consumption patterns.",
    difficulty: "medium",
    category: "marketing",
    questions: [
      "How would you research and understand local markets?",
      "What localization strategy would maintain brand consistency?",
      "How would you adapt marketing mix for each market?"
    ]
  }, "International Market Expansion", 50),

  ...generateCaseVariations({
    scenario: "A company wants to transform digitally to compete with tech-native competitors. They need to modernize systems, processes, and culture. Current infrastructure is outdated and employees resist change.",
    difficulty: "medium",
    category: "business",
    questions: [
      "What areas should be prioritized for digital transformation?",
      "How would you overcome organizational resistance to change?",
      "What metrics would indicate transformation success?"
    ]
  }, "Digital Transformation Initiative", 50),

  ...generateCaseVariations({
    scenario: "A company is experiencing demand volatility that makes capacity planning difficult. They have periods of overcapacity and periods of insufficient capacity. They want to improve forecasting and capacity utilization.",
    difficulty: "medium",
    category: "operations",
    questions: [
      "What forecasting methods would improve accuracy?",
      "How would you balance capacity with demand variability?",
      "What flexibility strategies would help manage volatility?"
    ]
  }, "Capacity Planning", 50),

  ...generateCaseVariations({
    scenario: "A company has identified a gap in mid-level leadership capabilities. They want to develop a comprehensive leadership development program. Current leaders lack strategic thinking and people management skills.",
    difficulty: "medium",
    category: "hr",
    questions: [
      "What competencies should the program develop?",
      "How would you measure the effectiveness of the program?",
      "What delivery methods would be most effective?"
    ]
  }, "Leadership Development Program", 50),

  // Additional DIFFICULT cases
  ...generateCaseVariations({
    scenario: "A company has a hierarchical, risk-averse culture that inhibits innovation. They want to transform to an agile, innovative culture to compete with startups. The transformation requires significant mindset changes across all levels.",
    difficulty: "difficult",
    category: "hr",
    questions: [
      "How would you assess current culture and identify gaps?",
      "What leadership behaviors would model the desired culture?",
      "How would you overcome resistance to cultural change?",
      "What systems and processes would reinforce the new culture?"
    ]
  }, "Organizational Culture Transformation", 50),

  ...generateCaseVariations({
    scenario: "A company wants to leverage AI for hyper-personalization to improve customer experience and conversion rates. They have customer data but lack AI capabilities and expertise. They need to develop an AI strategy.",
    difficulty: "difficult",
    category: "marketing",
    questions: [
      "What personalization use cases would provide highest value?",
      "How would you build or acquire AI capabilities?",
      "What data infrastructure would support AI personalization?",
      "How would you address privacy and ethical concerns?"
    ]
  }, "AI-Powered Personalization Strategy", 50),

  ...generateCaseVariations({
    scenario: "A company wants to develop an ecosystem strategy to increase value and lock-in. They need to attract partners, developers, and complementary services. Current platform is closed and limits growth.",
    difficulty: "difficult",
    category: "business",
    questions: [
      "What ecosystem participants would add the most value?",
      "How would you incentivize ecosystem participation?",
      "What governance model would balance openness with control?",
      "How would you monetize the ecosystem?"
    ]
  }, "Ecosystem Strategy Development", 50),

  ...generateCaseVariations({
    scenario: "A company wants to explore autonomous operations including robotics and AI. They need to develop a strategy for automation that improves efficiency while managing workforce implications.",
    difficulty: "difficult",
    category: "operations",
    questions: [
      "What operations should be prioritized for automation?",
      "What workforce implications would automation create?",
      "How would you manage the transition to autonomous operations?",
      "What skills would be needed in an autonomous operation?"
    ]
  }, "Autonomous Operations Strategy", 50),

  // Additional variety for each difficulty level
  ...generateCaseVariations({
    scenario: "A company is struggling with employee retention in a competitive market. They lose 25% of their workforce annually, particularly high performers. The HR team needs to develop a comprehensive retention strategy.",
    difficulty: "easy",
    category: "hr",
    questions: [
      "What factors drive employee retention?",
      "How would you design a retention program?"
    ]
  }, "Employee Retention Crisis", 50),

  ...generateCaseVariations({
    scenario: "A company wants to establish thought leadership in their industry. They have decided to invest in content marketing but don't have a clear strategy. They need to determine what types of content to create and how to distribute them.",
    difficulty: "easy",
    category: "marketing",
    questions: [
      "What types of content would establish thought leadership?",
      "How would you measure content marketing ROI?"
    ]
  }, "Content Marketing Strategy", 50),

  ...generateCaseVariations({
    scenario: "A company is facing increased competition from new entrants. They need to understand their competitive position and identify opportunities for differentiation. Current market share is declining.",
    difficulty: "easy",
    category: "business",
    questions: [
      "What competitive advantages should be emphasized?",
      "How would you differentiate from competitors?"
    ]
  }, "Competitive Analysis", 50),

  ...generateCaseVariations({
    scenario: "A company has manual processes that are time-consuming and error-prone. They want to automate key processes to improve efficiency and reduce costs. Current processes are not well documented.",
    difficulty: "easy",
    category: "operations",
    questions: [
      "Which processes should be prioritized for automation?",
      "What would be the ROI of process automation?"
    ]
  }, "Process Automation", 50),

  ...generateCaseVariations({
    scenario: "A company is losing top talent to competitors offering higher compensation. They want to redesign their compensation strategy to be competitive while managing costs. Current compensation is not aligned with market rates.",
    difficulty: "medium",
    category: "hr",
    questions: [
      "How would you conduct a market compensation analysis?",
      "What compensation structure would attract and retain talent?",
      "How would you communicate compensation changes?"
    ]
  }, "Compensation Strategy Redesign", 50),

  ...generateCaseVariations({
    scenario: "A company wants to increase customer lifetime value through a loyalty program. They have high customer acquisition costs and need to improve retention. Current customers have low repeat purchase rates.",
    difficulty: "medium",
    category: "marketing",
    questions: [
      "What loyalty program structure would drive repeat purchases?",
      "How would you segment customers for personalized rewards?",
      "What metrics would indicate program success?"
    ]
  }, "Brand Loyalty Program", 50),

  ...generateCaseVariations({
    scenario: "A company wants to optimize pricing to increase revenue and profitability. They currently use simple per-user pricing. They want to explore value-based pricing and tiered offerings.",
    difficulty: "medium",
    category: "business",
    questions: [
      "What pricing models would maximize revenue?",
      "How would you determine optimal price points?",
      "What would be the impact on customer acquisition and retention?"
    ]
  }, "Pricing Strategy Optimization", 50),

  ...generateCaseVariations({
    scenario: "A company has relationships with hundreds of vendors but lacks visibility into vendor performance. They want to optimize vendor relationships to improve quality and reduce costs. Current vendor management is reactive.",
    difficulty: "medium",
    category: "operations",
    questions: [
      "How would you evaluate and segment vendors?",
      "What vendor management practices would improve performance?",
      "How would you negotiate better terms with key vendors?"
    ]
  }, "Vendor Management Optimization", 50),

  ...generateCaseVariations({
    scenario: "A company has multiple executives nearing retirement. They need to develop a comprehensive succession plan to ensure continuity. Internal talent pipeline is weak and external recruitment is challenging.",
    difficulty: "difficult",
    category: "hr",
    questions: [
      "How would you identify and develop high-potential successors?",
      "What development programs would prepare leaders for executive roles?",
      "How would you balance internal promotion with external recruitment?",
      "What retention strategies would keep key talent during transition?"
    ]
  }, "Executive Succession Planning", 50),

  ...generateCaseVariations({
    scenario: "A company wants to expand to emerging markets but needs to localize marketing strategy. Markets have different consumer preferences, media consumption, and competitive dynamics.",
    difficulty: "difficult",
    category: "marketing",
    questions: [
      "How would you research and understand local markets?",
      "What localization strategy would maintain brand consistency?",
      "How would you adapt messaging and channels for local markets?",
      "What governance structure would support global-local balance?"
    ]
  }, "Global Marketing Localization", 50),

  ...generateCaseVariations({
    scenario: "A company has achieved some success but market conditions suggest a different direction would be more promising. They need to decide whether to pivot and how to execute the pivot without losing momentum.",
    difficulty: "difficult",
    category: "business",
    questions: [
      "What criteria should guide the pivot decision?",
      "How would you validate the new direction before pivoting?",
      "What would be the impact on current customers and team?",
      "How would you execute the pivot while maintaining operations?"
    ]
  }, "Strategic Pivot Decision", 50),

  ...generateCaseVariations({
    scenario: "A company wants to transition to a circular economy model to reduce waste and create new revenue streams. They need to redesign products, processes, and business models.",
    difficulty: "difficult",
    category: "operations",
    questions: [
      "How would you redesign products for circularity?",
      "What operational changes would support circular economy?",
      "What new business models could monetize circular economy?",
      "How would you manage the transition to circular operations?"
    ]
  }, "Circular Economy Transformation", 50),
];

// Generate random cases for fallback
export function getRandomFallbackCases(difficulty: 'easy' | 'medium' | 'difficult', count: number, category: string = 'general'): Array<{
  caseTitle: string;
  scenario: string;
  questions: Array<{ question: string }>;
}> {
  // Filter cases by difficulty and category
  let filtered = fallbackCases.filter(c => c.difficulty === difficulty);
  
  if (category !== 'general') {
    filtered = filtered.filter(c => c.category === category);
  }
  
  // If not enough cases in category, add from other categories
  if (filtered.length < count) {
    const other = fallbackCases.filter(c => c.difficulty === difficulty && c.category !== category);
    filtered = [...filtered, ...other];
  }
  
  // Shuffle and select random cases
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));
  
  // Format for compatibility with generateBusinessCases
  return selected.map(c => ({
    caseTitle: c.caseTitle,
    scenario: c.scenario,
    questions: c.questions.map(q => ({ question: q })),
  }));
}

// Get a specific number of questions per case based on difficulty
export function getQuestionsForDifficulty(difficulty: 'easy' | 'medium' | 'difficult'): number {
  switch (difficulty) {
    case 'easy':
      return 2;
    case 'medium':
      return 3;
    case 'difficult':
      return 4;
    default:
      return 2;
  }
}
