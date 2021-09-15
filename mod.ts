import api from "./api/mod.ts";
import blog from "./blog/mod.ts";

function handleRequest(request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/api")) {
    return api;
  }

  if (pathname.startsWith("/blog")) {
    return blog;
  }

  const json = JSON.stringify({
    message: "Hello :)",
    name: "Duyet",
    blog: "https://blog.duyet.net",
  });

  return new Response(json, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
