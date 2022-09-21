module.exports = {
  apps: [
    {
      name: "dev-api",
      script: "./index.js",
      env: {
        MONITAIR_APP_ENV: "mydummypath",
        NODE_PATH: ".",
      },
    },
  ],
};
