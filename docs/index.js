// Docs:
// https://developers.cloudflare.com/pages/functions/

export default {
    async fetch(request, env) {
        // const url = new URL(request.url);
        //
        // if (url.pathname.startsWith("/api/")) {
        //     return new Response(JSON.stringify({ name: "Cloudflare" }), {
        //         headers: { "Content-Type": "application/json" },
        //     });
        // }

        console.log(`${request.method} ${new URL(request.url).pathname} ${request.headers.get("user-agent")}`);

        return env.ASSETS.fetch(request);
    },
};
