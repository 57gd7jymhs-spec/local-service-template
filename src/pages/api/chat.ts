import type { APIRoute } from 'astro';
import { client } from '../../config/client';

export const POST: APIRoute = async ({ request }) => {
  const { messages } = await request.json();

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: 'messages required' }), { status: 400 });
  }

  const apiKey = import.meta.env.GROQ_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'not_configured' }), { status: 500 });
  }

  try {
    const gatewayUrl = import.meta.env.CF_AI_GATEWAY_URL;
    const groqUrl = gatewayUrl || 'https://api.groq.com/openai/v1/chat/completions';
    const response = await fetch(groqUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: client.ai.model,
        messages: [
          { role: 'system', content: client.ai.systemPrompt },
          ...messages,
        ],
        max_tokens: client.ai.maxTokens,
        temperature: client.ai.temperature,
      }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content;
    if (!text) return new Response(JSON.stringify({ error: 'empty_response', raw: data }), { status: 500 });

    return new Response(JSON.stringify({ reply: text }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'unknown';
    return new Response(JSON.stringify({ error: 'ai_unavailable', detail: msg }), { status: 500 });
  }
};
