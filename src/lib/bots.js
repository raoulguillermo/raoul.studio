// Server-side bot/crawler detection from the User-Agent string.
//
// The client beacon only fires in real browsers that run JavaScript, so most
// classic (non-JS) crawlers never reach /api/track at all. What DOES reach us
// and needs labelling is the JS-capable crowd: headless Chrome, AI answer-engine
// crawlers, preview/unfurl bots (Slack, WhatsApp, Discord), synthetic monitors,
// and the occasional scripted browser. We record those too, but flag them so the
// dashboard can show "humans" and "bots" separately.

// Ordered most-specific first so the matched name is meaningful. Each entry is
// [displayName, regex] tested against the lowercased UA.
const SIGNATURES = [
  // ---- AI answer-engine / LLM crawlers ----
  ['GPTBot', /gptbot/],
  ['OAI-SearchBot', /oai-searchbot/],
  ['ChatGPT-User', /chatgpt-user/],
  ['ClaudeBot', /claudebot|claude-web|anthropic-ai|anthropic/],
  ['PerplexityBot', /perplexitybot|perplexity-user/],
  ['Google-Extended', /google-extended/],
  ['Applebot', /applebot/],
  ['Amazonbot', /amazonbot/],
  ['Bytespider', /bytespider|bytedance/],
  ['CCBot', /ccbot/],
  ['DiffBot', /diffbot/],
  ['Meta-AI', /meta-externalagent|facebookbot|meta-externalfetcher/],
  ['YouBot', /youbot/],
  ['Timpibot', /timpibot/],
  ['Cohere', /cohere-ai|cohere-training/],

  // ---- Search engines ----
  ['Googlebot', /googlebot|google-inspectiontool|storebot-google|adsbot-google|mediapartners-google/],
  ['Bingbot', /bingbot|adidxbot|msnbot/],
  ['DuckDuckBot', /duckduckbot|duckduckgo/],
  ['YandexBot', /yandex/],
  ['Baiduspider', /baiduspider/],
  ['Sogou', /sogou/],
  ['Seznam', /seznambot/],

  // ---- Link preview / social unfurlers ----
  ['Slackbot', /slackbot|slack-imgproxy/],
  ['WhatsApp', /whatsapp/],
  ['Telegram', /telegrambot/],
  ['Discord', /discordbot/],
  ['Twitterbot', /twitterbot/],
  ['LinkedInBot', /linkedinbot/],
  ['Facebook', /facebookexternalhit/],
  ['Pinterest', /pinterest/],

  // ---- SEO / marketing crawlers ----
  ['AhrefsBot', /ahrefsbot|ahrefssiteaudit/],
  ['SemrushBot', /semrushbot/],
  ['DotBot', /dotbot/],
  ['MJ12bot', /mj12bot/],
  ['DataForSeo', /dataforseo/],
  ['Barkrowler', /barkrowler/],
  ['BLEXBot', /blexbot/],
  ['PetalBot', /petalbot/],

  // ---- Uptime / synthetic monitoring ----
  ['UptimeRobot', /uptimerobot/],
  ['Pingdom', /pingdom/],
  ['StatusCake', /statuscake/],
  ['Lighthouse', /lighthouse|chrome-lighthouse|pagespeed/],
  ['GTmetrix', /gtmetrix/],

  // ---- Headless / automation / scripted browsers ----
  ['HeadlessChrome', /headlesschrome|headless/],
  ['Puppeteer', /puppeteer/],
  ['Playwright', /playwright/],
  ['PhantomJS', /phantomjs/],
  ['Selenium', /selenium|webdriver/],

  // ---- HTTP libraries / scripts ----
  ['curl', /curl\//],
  ['wget', /wget/],
  ['Python', /python-requests|python-urllib|aiohttp|httpx|scrapy/],
  ['Go-http', /go-http-client/],
  ['Java', /java\/|okhttp|apache-httpclient/],
  ['Node', /node-fetch|axios|got \(|undici/],
  ['Ruby', /ruby|faraday/],
  ['PHP', /guzzlehttp|php\//],

  // ---- Catch-all: anything self-identifying as a bot ----
  ['Other bot', /\bbot\b|crawler|crawl|spider|scraper|archiver|feedfetcher|preview|fetch|monitor/],
]

// Detect whether a User-Agent belongs to a bot/crawler/automation.
// Returns { isBot, botName }. An empty or missing UA is treated as a bot —
// a real browser always sends one.
export function detectBot(userAgent) {
  const ua = String(userAgent || '').toLowerCase().trim()
  if (!ua) return { isBot: true, botName: 'No user-agent' }

  for (const [name, re] of SIGNATURES) {
    if (re.test(ua)) return { isBot: true, botName: name }
  }
  return { isBot: false, botName: null }
}

// Very small device classifier from the UA (mobile vs desktop). Screen width
// from the client is more reliable, but this is a server-side fallback.
export function deviceFromUA(userAgent) {
  const ua = String(userAgent || '').toLowerCase()
  if (/mobile|iphone|ipod|android.*mobile|windows phone/.test(ua)) return 'mobile'
  if (/ipad|tablet|android(?!.*mobile)/.test(ua)) return 'tablet'
  return 'desktop'
}
