module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ],
          root: ['./src'],
          alias: {
            "@/*": "./src/*",
            '@assets': './src/assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
          }
        }
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
