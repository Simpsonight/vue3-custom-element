module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/scss/_variables.scss";
        @import "@/scss/global.scss";
        `,
      },
    },
    extract: false,
  },
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with my- as custom elements
          isCustomElement: (tag) => tag.startsWith("my-"),
        },
      }));
  },
};
