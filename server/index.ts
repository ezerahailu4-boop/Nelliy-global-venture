import express, { type Request, type Response } from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const DATA_FILE = path.join(process.cwd(), "server", "submissions.json");

app.use(cors());
app.use(express.json());

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  org?: string;
  message: string;
  receivedAt: string;
}

function readSubmissions(): ContactSubmission[] {
  if (!fs.existsSync(DATA_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function writeSubmissions(items: ContactSubmission[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2));
}

app.post("/api/contact", (req: Request, res: Response) => {
  const { name, email, org, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are required" });
  }

  const submission: ContactSubmission = {
    id: crypto.randomUUID(),
    name,
    email,
    org,
    message,
    receivedAt: new Date().toISOString(),
  };

  const all = readSubmissions();
  all.push(submission);
  writeSubmissions(all);

  return res.status(201).json({ ok: true, id: submission.id });
});

app.get("/api/contact", (_req: Request, res: Response) => {
  // Simple listing endpoint for NGV staff to review inbound partnership requests
  res.json(readSubmissions());
});

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`NGV API listening on http://localhost:${PORT}`);
});
