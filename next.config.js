// const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  }
  // webpack: (config, { isServer, dev }) => {
  //   if (!isServer && !dev) {
  //     // Only apply the mock during the client-side build in production
  //     config.resolve.alias['node-fetch$'] = path.resolve(__dirname, './fetch-mock.js');
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;
