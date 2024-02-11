const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'], // add here

    assetExts: [
      'glb',
      'gltf',
      'png',
      'jpg',
      'ttf',
      'otf',
      'obj',
      'fbx',
      'mp3',
      'wav',
      'mp4',
      'mov',
      'm4v',
      'pdf',
      'bin',
      'sqlite',
      'db',
      'db3',
      'sql',
      'xml',
      'svg',
    ], // add here
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
