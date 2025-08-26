require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function testAnthropicConnection() {
  try {
    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 100,
      messages: [
        {
          role: "user", 
          content: "Hello! This is a test connection for the WC2026 project."
        }
      ]
    });
    
    console.log('✅ Anthropic API connection successful!');
    console.log('Response:', response.content[0].text);
  } catch (error) {
    console.error('❌ Anthropic API connection failed:', error.message);
  }
}

// Test the connection when running the file
if (require.main === module) {
  testAnthropicConnection();
}