module.exports = ({ config }) => {
  // Typescript support
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: "ts-loader",
    options: { appendTsSuffixTo: [/\.vue$/] }
  });
  config.resolve.extensions.push(".ts", ".tsx");

  // Scss support
  config.module.rules.push({
    test: /\.scss$/,
    use: [ "style-loader", "css-loader", "sass-loader" ]
  });
  config.resolve.extensions.push(".scss");

  // Storybook Addon Storysource
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  return config;
};