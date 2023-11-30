/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /\.\/native/,
        contextRegExp: /\/pg\//,
      })
    );

    return config;
  },
};

module.exports = nextConfig;
