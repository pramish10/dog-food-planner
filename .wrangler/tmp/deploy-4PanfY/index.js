var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// worker/index.js
var json = /* @__PURE__ */ __name((body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  }
}), "json");
async function identifyBreed(request, env) {
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
  const { image } = await request.json().catch(() => ({}));
  if (typeof image !== "string" || !/^[A-Za-z0-9+/=]+$/.test(image) || image.length > 7e6) {
    return json({ error: "Please send one JPG or PNG photo under 5 MB." }, 400);
  }
  try {
    const bytes = Uint8Array.from(atob(image), (character) => character.charCodeAt(0));
    const predictions = await env.AI.run("@cf/microsoft/resnet-50", {
      // Workers AI expects JSON-compatible 8-bit values, not a Uint8Array object.
      image: [...bytes]
    });
    return json({ predictions });
  } catch (error) {
    console.error("Breed prediction failed:", error);
    return json({ error: "The Cloudflare breed model is temporarily unavailable." }, 502);
  }
}
__name(identifyBreed, "identifyBreed");
var index_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/breed") return identifyBreed(request, env);
    return env.ASSETS.fetch(request);
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
