import type { APIRoute } from 'astro';
import { client } from '../../config/client';

export const POST: APIRoute = async ({ request }) => {
  const { messages } = await request.json();

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: 'messages_required' }), { status: 400 });
  }

  const apiKey = import.meta.env.GROQ_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'no_api_key' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
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

    if (!text) {
      return new Response(JSON.stringify({ error: 'empty_response', status: response.status, raw: data }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ reply: text }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(JSON.stringify({ error: 'fetch_failed', detail: msg }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
