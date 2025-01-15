module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // Transpile JS and JSX files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };
  