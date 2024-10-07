const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true), // oder false, je nachdem, ob du das Feature aktivieren möchtest
      }),
    ],
  },
};
