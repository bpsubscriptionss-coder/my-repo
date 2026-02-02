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

export async function generateBusinessCases(difficulty: string, count: number): Promise<Case[]> {
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
          content: `Generate ${count} business case(s) at ${difficulty} difficulty level. Each case should have:
- A compelling case title
- A detailed business scenario (150-250 words)
- Exactly 2 strategic questions that test problem-solving skills

Return ONLY a valid JSON array with this exact structure:
[
  {
    "caseTitle": "string",
    "scenario": "string",
    "questions": [
      {"question": "string"},
      {"question": "string"}
    ]
  }
]

Make the scenarios realistic and relevant to modern business challenges like digital transformation, market entry, brand positioning, operational efficiency, or strategic planning.`,
        },
      ],
      temperature: 0.8,
    }),
  });

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
          content: `Evaluate these business case solutions:

${JSON.stringify(casesForEvaluation, null, 2)}

For each question, provide:
1. A model answer (what an ideal response would include)
2. A detailed explanation comparing the user's answer to the model answer
3. An overall rating from 1-10 based on how well the student understood the case and provided strategic insights
4. Overall feedback on performance

Return ONLY a valid JSON object with this exact structure:
{
  "cases": [
    {
      "caseTitle": "string",
      "scenario": "string",
      "questions": [
        {
          "question": "string",
          "userAnswer": "string",
          "modelAnswer": "string (150-200 words)",
          "explanation": "string (detailed comparison, 100-150 words)"
        }
      ]
    }
  ],
  "rating": number (1-10),
  "feedback": "string (overall performance feedback, 100-150 words)"
}`,
        },
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  const content = data.choices[0].message.content;
  
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }
  
  throw new Error('Failed to parse AI evaluation');
}
