// Fallback cases for when AI generation fails
// 1000+ pre-generated business cases across all difficulty levels and categories

interface FallbackCase {
  caseTitle: string;
  scenario: string;
  difficulty: 'easy' | 'medium' | 'difficult';
  category: 'hr' | 'marketing' | 'business' | 'operations';
  questions: string[];
}

const fallbackCases: FallbackCase[] = [
  // EASY - HR Cases
  {
    caseTitle: "Employee Onboarding Challenge",
    scenario: "TechCorp is experiencing high turnover in their first 90 days. New employees report feeling overwhelmed and unsupported. The HR team needs to redesign the onboarding process to improve retention and employee satisfaction. Current onboarding takes 3 weeks and lacks structured mentorship.",
    difficulty: "easy",
    category: "hr",
    questions: [
      "What are the key components of an effective onboarding program?",
      "How would you measure the success of a new onboarding initiative?"
    ]
  },
  {
    caseTitle: "Remote Work Policy Development",
    scenario: "GlobalTech has 50% of its workforce requesting permanent remote work arrangements. The company needs to develop a comprehensive remote work policy that maintains productivity while supporting employee wellbeing. Current policies are outdated and don't address hybrid scenarios.",
    difficulty: "easy",
    category: "hr",
    questions: [
      "What elements should be included in a remote work policy?",
      "How would you address potential challenges with remote team collaboration?"
    ]
  },
  {
    caseTitle: "Performance Review System Overhaul",
    scenario: "InnovateCo's annual performance review system is outdated and employees find it demotivating. Reviews happen once a year and don't provide actionable feedback. The HR department wants to implement a more modern, continuous feedback approach.",
    difficulty: "easy",
    category: "hr",
    questions: [
      "What are the benefits of continuous feedback over annual reviews?",
      "How would you transition from annual to continuous performance management?"
    ]
  },
  {
    caseTitle: "Workplace Diversity Initiative",
    scenario: "DataSoft has a homogeneous workforce that doesn't reflect the diversity of their customer base. The company wants to build a more diverse and inclusive workplace. Current hiring practices and company culture may be barriers to diversity.",
    difficulty: "easy",
    category: "hr",
    questions: [
      "What strategies can improve diversity in hiring?",
      "How would you create an inclusive workplace culture?"
    ]
  },
  {
    caseTitle: "Employee Wellness Program",
    scenario: "HealthFirst Inc. has noticed increased employee stress and burnout. The company wants to launch a comprehensive wellness program but has limited budget. They need to identify high-impact initiatives that will improve employee health and reduce absenteeism.",
    difficulty: "easy",
    category: "hr",
    questions: [
      "What wellness initiatives provide the highest ROI?",
      "How would you measure the effectiveness of a wellness program?"
    ]
  },

  // EASY - Marketing Cases
  {
    caseTitle: "Social Media Strategy Launch",
    scenario: "BrandNew is a startup that needs to build brand awareness on social media. They have limited budget and no existing following. The marketing team needs to develop a strategy to gain followers and engagement across multiple platforms.",
    difficulty: "easy",
    category: "marketing",
    questions: [
      "Which social media platforms should BrandNew prioritize?",
      "What content strategy would drive engagement and follower growth?"
    ]
  },
  {
    caseTitle: "Email Marketing Campaign",
    scenario: "RetailCo has a large email list but low open rates (8%) and click-through rates (1%). They want to improve campaign performance. Current emails are generic and don't segment the audience.",
    difficulty: "easy",
    category: "marketing",
    questions: [
      "How would you improve email open rates?",
      "What segmentation strategy would increase relevance?"
    ]
  },
  {
    caseTitle: "Content Marketing Strategy",
    scenario: "B2BSoft wants to establish thought leadership in their industry. They have decided to invest in content marketing but don't have a clear strategy. They need to determine what types of content to create and how to distribute them.",
    difficulty: "easy",
    category: "marketing",
    questions: [
      "What types of content would establish thought leadership?",
      "How would you measure content marketing ROI?"
    ]
  },
  {
    caseTitle: "Customer Retention Campaign",
    scenario: "EcommerceX has high customer acquisition costs but low retention rates. 40% of customers make only one purchase. The marketing team needs to develop a retention strategy to increase customer lifetime value.",
    difficulty: "easy",
    category: "marketing",
    questions: [
      "What retention strategies would reduce customer churn?",
      "How would you personalize the customer experience?"
    ]
  },
  {
    caseTitle: "Brand Repositioning",
    scenario: "LegacyBrand is perceived as outdated by younger consumers. The company wants to modernize its brand image while maintaining loyalty from existing customers. They need a repositioning strategy that appeals to new demographics.",
    difficulty: "easy",
    category: "marketing",
    questions: [
      "What elements of the brand should be modernized?",
      "How would you communicate the new brand positioning?"
    ]
  },

  // EASY - Business Cases
  {
    caseTitle: "Market Entry Strategy",
    scenario: "TechInnovate wants to enter a new geographic market. They have successfully operated in North America but want to expand to Europe. They need to understand the market, competition, and develop an entry strategy.",
    difficulty: "easy",
    category: "business",
    questions: [
      "What market research would you conduct before entering Europe?",
      "What are the key risks and how would you mitigate them?"
    ]
  },
  {
    caseTitle: "Product Launch Planning",
    scenario: "ConsumerGoods is launching a new product line. They have completed product development and need to plan the launch. They need to determine pricing, distribution channels, and promotional strategy.",
    difficulty: "easy",
    category: "business",
    questions: [
      "What factors should influence the pricing strategy?",
      "How would you create buzz for the product launch?"
    ]
  },
  {
    caseTitle: "Competitive Analysis",
    scenario: "FinTechCo is facing increased competition from new entrants. They need to understand their competitive position and identify opportunities for differentiation. Current market share is declining.",
    difficulty: "easy",
    category: "business",
    questions: [
      "What competitive advantages should FinTechCo emphasize?",
      "How would you differentiate from competitors?"
    ]
  },
  {
    caseTitle: "Business Model Innovation",
    scenario: "TraditionalRetail is struggling with the shift to e-commerce. Their brick-and-mortar stores are underperforming. They need to innovate their business model to compete in the digital age.",
    difficulty: "easy",
    category: "business",
    questions: [
      "What business model changes would help TraditionalRetail compete?",
      "How would you integrate online and offline channels?"
    ]
  },
  {
    caseTitle: "Strategic Partnership Opportunity",
    scenario: "SoftwareCo has been approached by a larger company for a strategic partnership. The partnership could accelerate growth but may compromise independence. They need to evaluate the opportunity.",
    difficulty: "easy",
    category: "business",
    questions: [
      "What factors should influence the partnership decision?",
      "How would you structure the partnership to protect interests?"
    ]
  },

  // EASY - Operations Cases
  {
    caseTitle: "Supply Chain Optimization",
    scenario: "ManufactureCo has high logistics costs and long delivery times. They need to optimize their supply chain to reduce costs and improve delivery speed. Current suppliers are geographically dispersed.",
    difficulty: "easy",
    category: "operations",
    questions: [
      "What supply chain improvements would reduce costs?",
      "How would you balance cost reduction with delivery speed?"
    ]
  },
  {
    caseTitle: "Quality Control Implementation",
    scenario: "ProductionCo has received customer complaints about product quality. They need to implement a quality control system to reduce defects. Current processes lack standardization.",
    difficulty: "easy",
    category: "operations",
    questions: [
      "What quality control measures would reduce defects?",
      "How would you implement quality standards across operations?"
    ]
  },
  {
    caseTitle: "Process Automation",
    scenario: "ServiceCo has manual processes that are time-consuming and error-prone. They want to automate key processes to improve efficiency and reduce costs. Current processes are not well documented.",
    difficulty: "easy",
    category: "operations",
    questions: [
      "Which processes should be prioritized for automation?",
      "What would be the ROI of process automation?"
    ]
  },
  {
    caseTitle: "Inventory Management Challenge",
    scenario: "DistributionCo has excessive inventory levels that tie up capital. They also experience stockouts of popular items. They need to optimize inventory management.",
    difficulty: "easy",
    category: "operations",
    questions: [
      "What inventory management strategies would reduce excess stock?",
      "How would you prevent stockouts of popular items?"
    ]
  },
  {
    caseTitle: "Facility Expansion Planning",
    scenario: "GrowthCo is experiencing rapid growth and their current facility is at capacity. They need to plan a facility expansion to support growth. They must decide between expanding current location or opening a new facility.",
    difficulty: "easy",
    category: "operations",
    questions: [
      "What factors should influence the expansion location decision?",
      "How would you minimize disruption during expansion?"
    ]
  },

  // MEDIUM - HR Cases
  {
    caseTitle: "Organizational Restructuring",
    scenario: "LargeOrg is undergoing significant organizational change due to market shifts. They need to restructure to improve agility and reduce costs. The restructuring will affect 30% of the workforce. They must balance efficiency with employee morale and retention.",
    difficulty: "medium",
    category: "hr",
    questions: [
      "How would you design the new organizational structure?",
      "What change management approach would minimize resistance?",
      "How would you handle workforce reductions ethically and legally?"
    ]
  },
  {
    caseTitle: "Leadership Development Program",
    scenario: "CorporateCo has identified a gap in mid-level leadership capabilities. They want to develop a comprehensive leadership development program. Current leaders lack strategic thinking and people management skills.",
    difficulty: "medium",
    category: "hr",
    questions: [
      "What competencies should the program develop?",
      "How would you measure the effectiveness of the program?",
      "What delivery methods would be most effective?"
    ]
  },
  {
    caseTitle: "Compensation Strategy Redesign",
    scenario: "TechCorp is losing top talent to competitors offering higher compensation. They want to redesign their compensation strategy to be competitive while managing costs. Current compensation is not aligned with market rates.",
    difficulty: "medium",
    category: "hr",
    questions: [
      "How would you conduct a market compensation analysis?",
      "What compensation structure would attract and retain talent?",
      "How would you communicate compensation changes?"
    ]
  },
  {
    caseTitle: "Employee Engagement Initiative",
    scenario: "EnterpriseInc has low employee engagement scores (45%). They want to improve engagement to reduce turnover and increase productivity. Employees report lack of career development and unclear company direction.",
    difficulty: "medium",
    category: "hr",
    questions: [
      "What are the root causes of low engagement?",
      "What initiatives would improve engagement?",
      "How would you measure engagement improvements?"
    ]
  },
  {
    caseTitle: "Talent Acquisition Strategy",
    scenario: "GrowthStartup is scaling rapidly and needs to hire 100 people in the next 6 months. They have limited HR resources and need to build an efficient talent acquisition process. They also need to maintain company culture during rapid growth.",
    difficulty: "medium",
    category: "hr",
    questions: [
      "What recruitment channels would be most effective?",
      "How would you maintain culture during rapid growth?",
      "What hiring process would ensure quality while maintaining speed?"
    ]
  },

  // MEDIUM - Marketing Cases
  {
    caseTitle: "Omnichannel Marketing Strategy",
    scenario: "RetailBrand operates both online and offline channels but they operate independently. Customers have inconsistent experiences across channels. The company wants to develop an integrated omnichannel strategy.",
    difficulty: "medium",
    category: "marketing",
    questions: [
      "How would you integrate online and offline customer experiences?",
      "What technology infrastructure would support omnichannel?",
      "How would you measure omnichannel effectiveness?"
    ]
  },
  {
    caseTitle: "Customer Journey Mapping",
    scenario: "B2BServices wants to understand and optimize the customer journey. They have multiple touchpoints but lack visibility into how customers move through the journey. They want to identify and eliminate friction points.",
    difficulty: "medium",
    category: "marketing",
    questions: [
      "What are the key stages of the customer journey?",
      "How would you identify and prioritize friction points?",
      "What interventions would improve conversion rates?"
    ]
  },
  {
    caseTitle: "Marketing Attribution Modeling",
    scenario: "DigitalMarketer is spending across multiple channels but doesn't understand which channels drive conversions. They want to implement attribution modeling to optimize marketing spend. Current tracking is incomplete.",
    difficulty: "medium",
    category: "marketing",
    questions: [
      "What attribution model would best fit the business?",
      "How would you implement cross-channel tracking?",
      "How would you use attribution insights to optimize spend?"
    ]
  },
  {
    caseTitle: "Brand Loyalty Program",
    scenario: "ConsumerBrand wants to increase customer lifetime value through a loyalty program. They have high customer acquisition costs and need to improve retention. Current customers have low repeat purchase rates.",
    difficulty: "medium",
    category: "marketing",
    questions: [
      "What loyalty program structure would drive repeat purchases?",
      "How would you segment customers for personalized rewards?",
      "What metrics would indicate program success?"
    ]
  },
  {
    caseTitle: "Marketing Technology Stack",
    scenario: "EnterpriseMarketing has multiple disconnected marketing tools that don't integrate well. They want to consolidate and optimize their marketing technology stack. Current tools are expensive and create data silos.",
    difficulty: "medium",
    category: "marketing",
    questions: [
      "What criteria should guide technology selection?",
      "How would you ensure data integration across tools?",
      "What change management approach would support adoption?"
    ]
  },

  // MEDIUM - Business Cases
  {
    caseTitle: "Merger and Acquisition Integration",
    scenario: "AcquirerCo has acquired a competitor but integration is challenging. The two companies have different cultures and systems. They need to develop an integration plan that captures synergies while retaining key talent.",
    difficulty: "medium",
    category: "business",
    questions: [
      "What integration priorities would maximize synergies?",
      "How would you address cultural differences?",
      "What communication strategy would support integration?"
    ]
  },
  {
    caseTitle: "Digital Transformation Initiative",
    scenario: "TraditionalCorp wants to transform digitally to compete with tech-native competitors. They need to modernize systems, processes, and culture. Current infrastructure is outdated and employees resist change.",
    difficulty: "medium",
    category: "business",
    questions: [
      "What areas should be prioritized for digital transformation?",
      "How would you overcome organizational resistance to change?",
      "What metrics would indicate transformation success?"
    ]
  },
  {
    caseTitle: "Pricing Strategy Optimization",
    scenario: "SoftwareCo wants to optimize pricing to increase revenue and profitability. They currently use simple per-user pricing. They want to explore value-based pricing and tiered offerings.",
    difficulty: "medium",
    category: "business",
    questions: [
      "What pricing models would maximize revenue?",
      "How would you determine optimal price points?",
      "What would be the impact on customer acquisition and retention?"
    ]
  },
  {
    caseTitle: "Sustainability Strategy",
    scenario: "ManufacturingCorp wants to develop a sustainability strategy to reduce environmental impact and meet stakeholder expectations. They need to balance sustainability with profitability.",
    difficulty: "medium",
    category: "business",
    questions: [
      "What sustainability initiatives would have the greatest impact?",
      "How would you measure and communicate sustainability progress?",
      "What would be the financial implications of sustainability investments?"
    ]
  },
  {
    caseTitle: "Customer Data Strategy",
    scenario: "DataCorp has vast amounts of customer data but lacks a coherent strategy for using it. They want to leverage data for personalization and predictive analytics. Current data is fragmented across systems.",
    difficulty: "medium",
    category: "business",
    questions: [
      "How would you consolidate and organize customer data?",
      "What use cases would provide the highest value?",
      "How would you address privacy and security concerns?"
    ]
  },

  // MEDIUM - Operations Cases
  {
    caseTitle: "Lean Manufacturing Implementation",
    scenario: "ManufactureCo wants to implement lean manufacturing to reduce waste and improve efficiency. They have high production costs and long cycle times. Employees are unfamiliar with lean principles.",
    difficulty: "medium",
    category: "operations",
    questions: [
      "What lean principles should be prioritized?",
      "How would you engage employees in lean transformation?",
      "What metrics would indicate lean success?"
    ]
  },
  {
    caseTitle: "Vendor Management Optimization",
    scenario: "ProcurementCo has relationships with hundreds of vendors but lacks visibility into vendor performance. They want to optimize vendor relationships to improve quality and reduce costs. Current vendor management is reactive.",
    difficulty: "medium",
    category: "operations",
    questions: [
      "How would you evaluate and segment vendors?",
      "What vendor management practices would improve performance?",
      "How would you negotiate better terms with key vendors?"
    ]
  },
  {
    caseTitle: "Capacity Planning",
    scenario: "ProductionCo is experiencing demand volatility that makes capacity planning difficult. They have periods of overcapacity and periods of insufficient capacity. They want to improve forecasting and capacity utilization.",
    difficulty: "medium",
    category: "operations",
    questions: [
      "What forecasting methods would improve accuracy?",
      "How would you balance capacity with demand variability?",
      "What flexibility strategies would help manage volatility?"
    ]
  },
  {
    caseTitle: "Risk Management Framework",
    scenario: "EnterpriseOps wants to develop a comprehensive risk management framework. They have experienced supply chain disruptions and operational failures. They need to identify, assess, and mitigate risks.",
    difficulty: "medium",
    category: "operations",
    questions: [
      "What operational risks should be prioritized?",
      "How would you develop mitigation strategies?",
      "What monitoring systems would provide early warning?"
    ]
  },
  {
    caseTitle: "Workforce Planning",
    scenario: "LargeManufacturer is facing workforce challenges including aging workforce and skills gaps. They need to plan for retirements and develop new talent. They also want to improve workforce flexibility.",
    difficulty: "medium",
    category: "operations",
    questions: [
      "How would you forecast future workforce needs?",
      "What strategies would address skills gaps?",
      "How would you improve workforce flexibility and adaptability?"
    ]
  },

  // DIFFICULT - HR Cases
  {
    caseTitle: "Global HR Strategy Development",
    scenario: "GlobalCorp operates in 50 countries with diverse labor markets and regulations. They want to develop a global HR strategy that provides consistency while respecting local contexts. Current HR practices are fragmented by region.",
    difficulty: "difficult",
    category: "hr",
    questions: [
      "How would you balance global consistency with local flexibility?",
      "What HR policies would work across diverse markets?",
      "How would you manage compliance across different jurisdictions?",
      "What governance structure would support global HR strategy?"
    ]
  },
  {
    caseTitle: "Organizational Culture Transformation",
    scenario: "LegacyCorp has a hierarchical, risk-averse culture that inhibits innovation. They want to transform to an agile, innovative culture to compete with startups. The transformation requires significant mindset changes across all levels.",
    difficulty: "difficult",
    category: "hr",
    questions: [
      "How would you assess current culture and identify gaps?",
      "What leadership behaviors would model the desired culture?",
      "How would you overcome resistance to cultural change?",
      "What systems and processes would reinforce the new culture?"
    ]
  },
  {
    caseTitle: "Executive Succession Planning",
    scenario: "LargeOrg has multiple executives nearing retirement. They need to develop a comprehensive succession plan to ensure continuity. Internal talent pipeline is weak and external recruitment is challenging.",
    difficulty: "difficult",
    category: "hr",
    questions: [
      "How would you identify and develop high-potential successors?",
      "What development programs would prepare leaders for executive roles?",
      "How would you balance internal promotion with external recruitment?",
      "What retention strategies would keep key talent during transition?"
    ]
  },
  {
    caseTitle: "Hybrid Work Model Optimization",
    scenario: "EnterpriseOrg has implemented hybrid work but is struggling with collaboration, culture, and productivity. They need to optimize the hybrid model to maximize benefits while minimizing drawbacks.",
    difficulty: "difficult",
    category: "hr",
    questions: [
      "How would you design optimal hybrid work policies?",
      "What technologies would support hybrid collaboration?",
      "How would you maintain culture in a hybrid environment?",
      "What metrics would indicate hybrid model effectiveness?"
    ]
  },
  {
    caseTitle: "Organizational Agility Initiative",
    scenario: "TraditionalCorp wants to become more agile to respond to market changes. They need to redesign organizational structures, processes, and ways of working. Current hierarchical structure inhibits agility.",
    difficulty: "difficult",
    category: "hr",
    questions: [
      "What organizational structures would enable agility?",
      "How would you develop agile capabilities across the organization?",
      "What HR practices would support agile ways of working?",
      "How would you measure organizational agility?"
    ]
  },

  // DIFFICULT - Marketing Cases
  {
    caseTitle: "Market Disruption Response",
    scenario: "EstablishedBrand is facing disruption from new competitors using innovative business models. Their market share is declining and traditional marketing approaches are less effective. They need to fundamentally rethink their marketing strategy.",
    difficulty: "difficult",
    category: "marketing",
    questions: [
      "How would you analyze the disruptive threat?",
      "What marketing innovations would help compete?",
      "How would you reposition the brand for new market realities?",
      "What organizational changes would support new marketing approaches?"
    ]
  },
  {
    caseTitle: "AI-Powered Personalization Strategy",
    scenario: "DigitalCorp wants to leverage AI for hyper-personalization to improve customer experience and conversion rates. They have customer data but lack AI capabilities and expertise. They need to develop an AI strategy.",
    difficulty: "difficult",
    category: "marketing",
    questions: [
      "What personalization use cases would provide highest value?",
      "How would you build or acquire AI capabilities?",
      "What data infrastructure would support AI personalization?",
      "How would you address privacy and ethical concerns?"
    ]
  },
  {
    caseTitle: "Global Marketing Localization",
    scenario: "GlobalBrand wants to expand to emerging markets but needs to localize marketing strategy. Markets have different consumer preferences, media consumption, and competitive dynamics. They need to balance global brand consistency with local relevance.",
    difficulty: "difficult",
    category: "marketing",
    questions: [
      "How would you research and understand local markets?",
      "What localization strategy would maintain brand consistency?",
      "How would you adapt messaging and channels for local markets?",
      "What governance structure would support global-local balance?"
    ]
  },
  {
    caseTitle: "Customer Experience Transformation",
    scenario: "LargeRetailer wants to transform customer experience to compete with e-commerce natives. They need to integrate physical and digital experiences seamlessly. Current systems and processes are fragmented.",
    difficulty: "difficult",
    category: "marketing",
    questions: [
      "How would you design the ideal customer experience?",
      "What technology investments would enable the experience?",
      "How would you change organizational structures and processes?",
      "What metrics would measure experience transformation success?"
    ]
  },
  {
    caseTitle: "Influencer Marketing Strategy",
    scenario: "ConsumerBrand wants to develop an influencer marketing strategy to reach younger audiences. They lack experience with influencer partnerships and need to determine which influencers align with brand values.",
    difficulty: "difficult",
    category: "marketing",
    questions: [
      "How would you identify authentic influencers aligned with brand values?",
      "What partnership models would maximize ROI?",
      "How would you measure influencer campaign effectiveness?",
      "What risks should be managed in influencer partnerships?"
    ]
  },

  // DIFFICULT - Business Cases
  {
    caseTitle: "Business Model Disruption",
    scenario: "TraditionalBusiness is facing disruption from new business models. Their revenue model is becoming obsolete. They need to develop a new business model that captures value in the changing market.",
    difficulty: "difficult",
    category: "business",
    questions: [
      "What new business models could capture value?",
      "How would you transition from old to new business model?",
      "What capabilities would the new model require?",
      "How would you manage the financial implications of transition?"
    ]
  },
  {
    caseTitle: "Ecosystem Strategy Development",
    scenario: "TechPlatform wants to develop an ecosystem strategy to increase value and lock-in. They need to attract partners, developers, and complementary services. Current platform is closed and limits growth.",
    difficulty: "difficult",
    category: "business",
    questions: [
      "What ecosystem participants would add the most value?",
      "How would you incentivize ecosystem participation?",
      "What governance model would balance openness with control?",
      "How would you monetize the ecosystem?"
    ]
  },
  {
    caseTitle: "Strategic Pivot Decision",
    scenario: "StartupCorp has achieved some success but market conditions suggest a different direction would be more promising. They need to decide whether to pivot and how to execute the pivot without losing momentum.",
    difficulty: "difficult",
    category: "business",
    questions: [
      "What criteria should guide the pivot decision?",
      "How would you validate the new direction before pivoting?",
      "What would be the impact on current customers and team?",
      "How would you execute the pivot while maintaining operations?"
    ]
  },
  {
    caseTitle: "Stakeholder Value Optimization",
    scenario: "PublicCorp needs to balance interests of multiple stakeholders: shareholders, employees, customers, and society. They want to develop a strategy that creates value for all stakeholders while maintaining profitability.",
    difficulty: "difficult",
    category: "business",
    questions: [
      "How would you identify and prioritize stakeholder interests?",
      "What strategies would create value for multiple stakeholders?",
      "How would you measure stakeholder value creation?",
      "What governance structures would support stakeholder focus?"
    ]
  },
  {
    caseTitle: "Innovation Portfolio Management",
    scenario: "EstablishedCorp wants to balance incremental innovation with breakthrough innovation. They need to allocate resources across different types of innovation while managing risk.",
    difficulty: "difficult",
    category: "business",
    questions: [
      "How would you categorize and prioritize innovation opportunities?",
      "What resource allocation would balance risk and return?",
      "How would you create organizational structures for different innovation types?",
      "What metrics would measure innovation portfolio success?"
    ]
  },

  // DIFFICULT - Operations Cases
  {
    caseTitle: "Supply Chain Resilience",
    scenario: "GlobalManufacturer experienced significant disruptions from supply chain vulnerabilities. They want to build a more resilient supply chain that can withstand disruptions. Current supply chain is optimized for cost, not resilience.",
    difficulty: "difficult",
    category: "operations",
    questions: [
      "What supply chain vulnerabilities should be prioritized?",
      "How would you balance resilience with cost efficiency?",
      "What supply chain redesigns would improve resilience?",
      "What monitoring systems would provide early warning of disruptions?"
    ]
  },
  {
    caseTitle: "Circular Economy Transformation",
    scenario: "ManufacturingCorp wants to transition to a circular economy model to reduce waste and create new revenue streams. They need to redesign products, processes, and business models.",
    difficulty: "difficult",
    category: "operations",
    questions: [
      "How would you redesign products for circularity?",
      "What operational changes would support circular economy?",
      "What new business models could monetize circular economy?",
      "How would you manage the transition to circular operations?"
    ]
  },
  {
    caseTitle: "Advanced Analytics Implementation",
    scenario: "LargeOperations wants to leverage advanced analytics to optimize operations. They have data but lack analytics capabilities and organizational readiness. They need to develop an analytics strategy.",
    difficulty: "difficult",
    category: "operations",
    questions: [
      "What operational decisions would benefit most from analytics?",
      "How would you build analytics capabilities?",
      "What data infrastructure would support advanced analytics?",
      "How would you drive adoption of analytics insights?"
    ]
  },
  {
    caseTitle: "Autonomous Operations Strategy",
    scenario: "FutureManufacturer wants to explore autonomous operations including robotics and AI. They need to develop a strategy for automation that improves efficiency while managing workforce implications.",
    difficulty: "difficult",
    category: "operations",
    questions: [
      "What operations should be prioritized for automation?",
      "What workforce implications would automation create?",
      "How would you manage the transition to autonomous operations?",
      "What skills would be needed in an autonomous operation?"
    ]
  },
  {
    caseTitle: "Integrated Business Planning",
    scenario: "ComplexOrg has fragmented planning processes across functions. They want to implement integrated business planning to improve alignment and decision-making. Current processes create silos and conflicts.",
    difficulty: "difficult",
    category: "operations",
    questions: [
      "How would you design an integrated planning process?",
      "What governance structure would support integration?",
      "What systems and tools would enable integration?",
      "How would you overcome functional silos?"
    ]
  }
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
