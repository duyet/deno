import api from './api/index.ts';

function handleRequest(request) {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith("/api")) {
        return api
    }

    const json = JSON.stringify({
        message: "Hello :))",
    });

    return new Response(json, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    });
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});
