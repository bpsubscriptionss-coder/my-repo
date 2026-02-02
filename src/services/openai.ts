import { getRandomFallbackCases } from './fallbackCases';

const OPENAI_API_KEY = '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';

interface Question {
  question: string;
  userAnswer: string;
}

interface Case {
  caseTitle: string;
  scenario: string;
  questions: Question[];
}

export async function generateBusinessCases(difficulty: string, count: number, category: string = 'general'): Promise<Case[]> {
  // Determine number of questions based on difficulty
  const questionCount = difficulty === 'easy' ? 2 : difficulty === 'medium' ? 3 : 4;
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert business case creator for corporate training. Generate realistic business cases with strategic questions.',
          },
          {
            role: 'user',
            content: `Generate ${count} business case(s) at ${difficulty} difficulty level in the ${category} category. Each case should have:
- A compelling case title
- A detailed business scenario (150-250 words)
- Exactly ${questionCount} strategic questions that test problem-solving skills

Return ONLY a valid JSON array with this exact structure:
[
  {
    "caseTitle": "string",
    "scenario": "string",
    "questions": [
      ${Array(questionCount).fill('{"question": "string"}').join(',\n      ')}
    ]
  }
]

Make the scenarios realistic and relevant to modern business challenges in the ${category} domain.`,
          },
        ],
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      const cases = JSON.parse(jsonMatch[0]);
      return cases.map((c: any) => ({
        caseTitle: c.caseTitle,
        scenario: c.scenario,
        questions: c.questions.map((q: any) => ({
          question: q.question,
          userAnswer: '',
        })),
      }));
    }
    
    throw new Error('Failed to parse AI response');
  } catch (error) {
    console.error('AI generation failed, using fallback cases:', error);
    // Fallback to pre-generated cases
    const fallbackCases = getRandomFallbackCases(difficulty as 'easy' | 'medium' | 'difficult', count, category);
    return fallbackCases.map(c => ({
      caseTitle: c.caseTitle,
      scenario: c.scenario,
      questions: c.questions.map(q => ({
        question: q.question,
        userAnswer: '',
      })),
    }));
  }
}

export async function evaluateAnswers(cases: Case[]): Promise<{
  cases: Array<{
    caseTitle: string;
    scenario: string;
    questions: Array<{
      question: string;
      userAnswer: string;
      modelAnswer: string;
      explanation: string;
    }>;
  }>;
  rating: number;
  feedback: string;
}> {
  const casesForEvaluation = cases.map(c => ({
    caseTitle: c.caseTitle,
    scenario: c.scenario,
    questions: c.questions.map(q => ({
      question: q.question,
      userAnswer: q.userAnswer,
    })),
  }));

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert business consultant evaluating student case solutions. Provide detailed, constructive feedback.',
          },
          {
            role: 'user',
            content: `Evaluate these business case solutions:\n\n${JSON.stringify(casesForEvaluation, null, 2)}\n\nFor each question, provide:\n1. A model answer (what an ideal response would include)\n2. A detailed explanation comparing the user's answer to the model answer\n3. An overall rating from 1-10 based on how well the student understood the case and provided strategic insights\n4. Overall feedback on performance\n\nReturn ONLY a valid JSON object with this exact structure:\n{\n  "cases": [\n    {\n      "caseTitle": "string",\n      "scenario": "string",\n      "questions": [\n        {\n          "question": "string",\n          "userAnswer": "string",\n          "modelAnswer": "string (150-200 words)",\n          "explanation": "string (detailed comparison, 100-150 words)"\n        }\n      ]\n    }\n  ],\n  "rating": number (1-10),\n  "feedback": "string (overall performance feedback, 100-150 words)"\n}`,
          },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    throw new Error('Failed to parse AI evaluation');
  } catch (error) {
    console.error('AI evaluation failed, using fallback evaluation:', error);
    // Fallback evaluation when API fails
    return generateFallbackEvaluation(cases);
  }
}

// Fallback evaluation function
function generateFallbackEvaluation(cases: Case[]): {
  cases: Array<{
    caseTitle: string;
    scenario: string;
    questions: Array<{
      question: string;
      userAnswer: string;
      modelAnswer: string;
      explanation: string;
    }>;
  }>;
  rating: number;
  feedback: string;
} {
  const evaluatedCases = cases.map(c => ({
    caseTitle: c.caseTitle,
    scenario: c.scenario,
    questions: c.questions.map(q => ({
      question: q.question,
      userAnswer: q.userAnswer,
      modelAnswer: `An ideal answer would demonstrate strategic thinking by analyzing the key business drivers, considering multiple perspectives, and providing actionable recommendations. It should show understanding of the business context and propose solutions that balance various stakeholder interests while addressing the core challenge presented in the case.`,
      explanation: `Your answer shows engagement with the case. To improve, consider incorporating more structured frameworks for analysis, such as SWOT analysis, Porter's Five Forces, or the 4Ps model. Also, try to quantify your recommendations where possible and discuss potential implementation challenges and mitigation strategies.`
    })),
  }));

  // Calculate rating based on answer quality indicators
  let totalScore = 0;
  let totalQuestions = 0;
  
  cases.forEach(c => {
    c.questions.forEach(q => {
      const answerLength = q.userAnswer.trim().length;
      const hasFramework = /swot|porter|4p|analysis|framework|strategy|implement|approach|method|process/i.test(q.userAnswer);
      const hasMetrics = /\d+%|\$|metric|measure|kpi|roi|revenue|profit|cost|budget/i.test(q.userAnswer);
      const hasRiskMitigation = /risk|challenge|mitigation|contingency|alternative|scenario|potential|issue/i.test(q.userAnswer);
      const hasStakeholder = /stakeholder|customer|employee|investor|market|competitive|competitor/i.test(q.userAnswer);
      const hasActionable = /implement|execute|action|step|phase|timeline|resource|team|responsible/i.test(q.userAnswer);
      
      let score = 3; // Base score
      
      // Length-based scoring (more detailed answers tend to be better)
      if (answerLength > 150) score += 0.5;
      if (answerLength > 300) score += 0.5;
      if (answerLength > 500) score += 0.5;
      
      // Quality indicators
      if (hasFramework) score += 1.5;
      if (hasMetrics) score += 1.5;
      if (hasRiskMitigation) score += 1;
      if (hasStakeholder) score += 1;
      if (hasActionable) score += 1;
      
      totalScore += Math.min(score, 10);
      totalQuestions += 1;
    });
  });

  const rating = totalQuestions > 0 ? Math.round(totalScore / totalQuestions * 2) / 2 : 5;

  return {
    cases: evaluatedCases,
    rating: Math.max(1, Math.min(10, rating)),
    feedback: `Your performance demonstrates engagement with the business cases. You've provided thoughtful responses that show understanding of the scenarios. To further improve, focus on: 1) Using structured analytical frameworks to organize your thinking, 2) Including specific metrics and data to support your recommendations, 3) Discussing implementation challenges and risk mitigation strategies, and 4) Considering multiple stakeholder perspectives in your solutions. Continue practicing case analysis to develop deeper strategic insights.`
  };
}
