const BASE_URL = 'https://raoul.studio'

// Search + AI/answer-engine crawlers. We explicitly welcome the major AI
// crawlers so the studio can surface in ChatGPT, Perplexity, Claude and
// Google AI Overviews. Remove a UA from `allow` to opt out of that engine.
export default function robots() {
  const aiBots = [
    'GPTBot', // ChatGPT training
    'OAI-SearchBot', // ChatGPT search
    'ChatGPT-User', // ChatGPT live browsing
    'ClaudeBot', // Anthropic / Claude index
    'Claude-SearchBot', // Claude search
    'Claude-User', // Claude live browsing
    'anthropic-ai',
    'PerplexityBot', // Perplexity index
    'Perplexity-User', // Perplexity live browsing
    'Google-Extended', // Gemini / AI Overviews
    'Applebot-Extended', // Apple Intelligence
    'CCBot', // Common Crawl (feeds many models)
    'Bingbot',
  ]

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiBots.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
