/**
 * Smoke tests for POST /api/generate
 *
 * TODO: Phase 4c — 补充 auth + creditGuard 测试用例
 * - 未登录 401
 * - 额度耗尽 402
 */

describe("POST /api/generate", () => {
  const endpoint = "http://localhost:3000/api/generate";

  it("returns 200 with videoUrl for valid prompt", async () => {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "gentle ocean waves" }),
    });

    expect(res.status).toBe(200);
    const json = (await res.json()) as {
      videoUrl: string;
      model: string;
      creditsRemaining: number;
    };
    expect(json.videoUrl).toBeDefined();
    expect(json.model).toBeDefined();
    expect(json.creditsRemaining).toBeDefined();
  });

  it("returns 400 for empty prompt", async () => {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "" }),
    });

    expect(res.status).toBe(400);
    const json = (await res.json()) as { error: string };
    expect(json.error).toMatch(/prompt/i);
  });

  it("returns 400 for missing prompt field", async () => {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(400);
    const json = (await res.json()) as { error: string };
    expect(json.error).toMatch(/prompt/i);
  });

  it("returns 400 for invalid JSON", async () => {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "not-json",
    });

    expect(res.status).toBe(400);
  });

  // TODO: Phase 4c — 启用以下测试
  // it("returns 401 for unauthenticated user", async () => {
  //   const res = await fetch(endpoint, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ prompt: "test" }),
  //   });
  //   expect(res.status).toBe(401);
  // });

  // TODO: Phase 4c — 启用以下测试
  // it("returns 402 when credits exhausted", async () => {
  //   // Mock creditGuard to return allowed: false
  //   const res = await fetch(endpoint, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ prompt: "test" }),
  //   });
  //   expect(res.status).toBe(402);
  //   const json = await res.json();
  //   expect(json.error).toBe("CREDITS_EXHAUSTED");
  //   expect(json.upgradeUrl).toBe("/pricing");
  // });
});
