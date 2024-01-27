/** @type {import('next').NextConfig} */
const nextConfig = {
    cssModules: true,
    postcssLoaderOptions: {
      plugins: {
        'postcss-preset-env': {
          stage: 3,
          features: {
            'nesting-rules': true
          }
        }
      }
    }
  };
  
  export default nextConfig;