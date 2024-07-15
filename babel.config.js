module.exports = function(api) {
  assets: ['./assets/Fonts'],
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
