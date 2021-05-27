module.exports = {
  siteUrl: 'https://learning-english.vercel.app/',
  changefreq: 'weekly',
  priority: 0.7,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    additionalSitemaps: ['https://learning-english.vercel.app//sitemap.xml']
  }
};
