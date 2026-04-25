const express = require("express");
const routes = require("./routes/index");

const app = express();
const PORT = 3000;

// ── Middleware ────────────────────────────────────────────────────────────────
// Logs every incoming request: method, URL, and timestamp
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // pass control to the next handler
});

// Parse incoming JSON request bodies
app.use(express.json());

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("/", routes);

// ── 404 Handler ───────────────────────────────────────────────────────────────
// Catches any request that didn't match a defined route
app.use((req, res) => {
  res.status(404).json({ error: `Route '${req.url}' not found.` });
});

// ── Start Server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
