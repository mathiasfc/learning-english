const withPWA = require('next-pwa')({
  dest: 'public'
});

const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
  trailingSlash: true
};

module.exports = prod ? withPWA(nextConfig) : nextConfig;
