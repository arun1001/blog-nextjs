/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
const nextConfig = (phase) => {
  console.log(phase)
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongo_username: 'arun1001',
        mongo_password: 'mongopassword',
        mongo_clustername: 'cluster0',
        mongo_db: 'my-blog-dev'
      }
    }
  }
  return {
    reactStrictMode: true,
    env: {
      mongo_username: 'arun1001',
      mongo_password: 'mongopassword',
      mongo_clustername: 'cluster0',
      mongo_db: 'my-blog-prod'
    }
  }

}

module.exports = nextConfig
