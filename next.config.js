/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    env:{
      apiURL: process.env.RESEND_API_KEY
    }
  };
  
  module.exports = nextConfig;
  