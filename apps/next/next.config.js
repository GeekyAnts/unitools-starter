const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'dripsy',
    '@dripsy/core',
    'moti',
    'app',
    'react-native-reanimated',
    '@expo/html-elements',
    'react-native-gesture-handler',
    '@unitools/link-next',
  ],
  images: {
    domains: ['robohash.org'],
  },
  webpack: (config) => {
    config.resolve.alias['@unitools/link'] = '@unitools/link-next'
    config.resolve.alias['@unitools/router'] = '@unitools/router-next'
    config.resolve.alias['@unitools/image'] = '@unitools/image-next'
    return config
  },
}

module.exports = withExpo(nextConfig)
