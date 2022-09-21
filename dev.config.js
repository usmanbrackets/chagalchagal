module.exports = {
  apps: [
    {
      name: "dev-api",
      script: "./index.js",
      env: {
        error_file: "../logs/error.log",
        out_file: "../logs/out.log",
        MONITAIR_APP_ENV: "mydummypath",
        NODE_PATH: ".",
        PORT: 8000,
      },
    },
  ],
};
