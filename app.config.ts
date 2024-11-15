export default defineAppConfig({
  title: 'SMART',
  email: 'fyi.apon@smartbd.com',
  github: 'https://github.com/aamibhoot',
  twitter: 'https://sink.cool/',
  telegram: 'https://sink.cool/',
  mastodon: 'https://sink.cool/',
  blog: 'https://sink.cool/',
  description: 'Welcome to SMART BD!',
  image: 'https://smartbd.com/wp-content/uploads/2024/07/Smart-Web-Banner-Design-microsoft-old.jpg',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
