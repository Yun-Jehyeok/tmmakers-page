import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-b5548700/health", (c) => {
  return c.json({ status: "ok" });
});

// Submit application endpoint
app.post("/make-server-b5548700/applications", async (c) => {
  try {
    const body = await c.req.json();
    const { name, phone, track, message } = body;

    // Validation
    if (!name || !phone || !track) {
      return c.json({ error: "필수 항목을 모두 입력해주세요." }, 400);
    }

    // Phone validation
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      return c.json({ error: "전화번호는 XXX-XXXX-XXXX 형식으로 입력해주세요." }, 400);
    }

    // Create application data
    const applicationId = `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const applicationData = {
      id: applicationId,
      name,
      phone,
      track,
      message: message || "",
      createdAt: new Date().toISOString(),
    };

    // Save to KV store
    await kv.set(applicationId, applicationData);

    console.log("Application submitted:", applicationData);

    return c.json({ 
      success: true, 
      message: "신청이 완료되었습니다!",
      applicationId 
    }, 201);
  } catch (error) {
    console.error("Error submitting application:", error);
    return c.json({ error: "신청 처리 중 오류가 발생했습니다." }, 500);
  }
});

// Get all applications endpoint
app.get("/make-server-b5548700/applications", async (c) => {
  try {
    const applications = await kv.getByPrefix("app_");
    return c.json({ applications });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return c.json({ error: "신청 목록을 불러오는 중 오류가 발생했습니다." }, 500);
  }
});

Deno.serve(app.fetch);