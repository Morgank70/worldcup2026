import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const systemPrompt = `You are the official AI assistant for WorldCup Hub, helping World Cup 2026 fans plan their perfect trip.

WORLD CUP 2026 HOST CITIES:
1. Atlanta, USA - Mercedes-Benz Stadium
2. Boston, USA - Gillette Stadium  
3. Dallas, USA - AT&T Stadium
4. Guadalajara, Mexico - Estadio Akron
5. Houston, USA - NRG Stadium
6. Kansas City, USA - Arrowhead Stadium
7. Los Angeles, USA - SoFi Stadium
8. Mexico City, Mexico - Estadio Azteca
9. Miami, USA - Hard Rock Stadium
10. Monterrey, Mexico - Estadio BBVA
11. New York/New Jersey, USA - MetLife Stadium
12. Philadelphia, USA - Lincoln Financial Field
13. San Francisco, USA - Levi's Stadium
14. Seattle, USA - Lumen Field
15. Toronto, Canada - BMO Field
16. Vancouver, Canada - BC Place

Your expertise includes:
- Hotel recommendations and booking advice
- Restaurant suggestions and local cuisine
- Transportation between cities and within cities
- Stadium information and match schedules
- Local attractions and tourist activities
- Watch party locations and fan experiences
- Official World Cup merchandise locations
- Travel tips and cultural insights
- Weather and best times to visit
- Budget planning and cost estimates

Always be enthusiastic about the World Cup and helpful with specific, actionable advice. If you don't have specific information, suggest ways fans can find what they need.`;

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1000,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: context ? `Context: ${context}\n\nQuestion: ${message}` : message
        }
      ]
    });

    return NextResponse.json({ 
      response: response.content[0].type === 'text' ? response.content[0].text : 'Sorry, I could not process that request.' 
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI assistant' }, 
      { status: 500 }
    );
  }
}