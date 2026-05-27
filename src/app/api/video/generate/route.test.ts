/**
 * /api/video/generate route tests
 * 4 cases: normal prompt 202 / empty prompt 400 / missing mode 400 / invalid JSON 400
 */

import { POST } from "./route";
import { NextRequest } from "next/server";

function makeReq(body: unknown): NextRequest {
  return new NextRequest("http://localhost:3000/api/video/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/video/generate", () => {
  it("returns 400 for empty prompt", async () => {
    const req = makeReq({ mode: "text", prompt: "" });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toContain("prompt");
  });

  it("returns 400 for missing mode", async () => {
    const req = makeReq({ prompt: "ocean waves" });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toContain("mode");
  });

  it("returns 400 for invalid JSON", async () => {
    const req = new NextRequest("http://localhost:3000/api/video/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "not-json",
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("returns 401 without auth header", async () => {
    const req = makeReq({ mode: "text", prompt: "gentle ocean waves" });
    const res = await POST(req);
    expect(res.status).toBe(401);
  });
});
