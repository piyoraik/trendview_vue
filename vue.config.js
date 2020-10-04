module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/v1": {
        target: "http://api:3000",
      },
    },
  },
};
