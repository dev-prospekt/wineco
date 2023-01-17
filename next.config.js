const { i18n } = require('./next-i18next.config')


/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    domains: ['https://strapi.wine-co.hr']
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}

module.exports = nextConfig;
