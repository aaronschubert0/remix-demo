/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "cloudflare-pages",
  server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: [".*"],
  // appDirectory: "app",
  assetsBuildDirectory: "public/remix/build",
  // serverBuildPath: "functions/[[path]].js",
  publicPath: "/remix/build/",
};
