const express = require("express");

const app = express();
const PORT = 8001;

app.use(express.json());

const tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure",
];

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.post("/tasks", (req, res) => {
  const { text } = req.body;
  tasks.push(text);
  return res.json({ message: "Task added successfully" });
});

app.get("/tasks", (_req, res) => {
  return res.json({ tasks });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
