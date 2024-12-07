const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add '.cjs' to the list of asset extensions
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'cjs');
config.resolver.assetExts.push('cjs');

module.exports = config;
