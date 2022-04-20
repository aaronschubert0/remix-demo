import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => context.env,
});

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (
    url.pathname.startsWith("/test-remix") ||
    url.pathname.startsWith("/remix")
  ) {
    return handleRequest(context);
  } else {
    const { pathname, search } = url;
    const response = await fetch(`https://folksy.com` + pathname + search);
    return response;
  }
}
