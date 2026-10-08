const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const tasks = [
  {
    id: 1,
    title: "FinTech Website Update",
    description: "Update the FinTech website design and content.",
    category: "Urgent",
    completed: false,
  },
  {
    id: 2,
    title: "Agro Website Update",
    description: "Update the Agro website with the latest information.",
    category: "Important",
    completed: false,
  },
  {
    id: 3,
    title: "FinTech Website Update",
    description: "Review the FinTech website changes.",
    category: "Urgent",
    completed: false,
  },
  {
    id: 4,
    title: "Agro Website Update",
    description: "Check the Agro website before launch.",
    category: "Important",
    completed: false,
  },
];

app.get("/api/tasks/search", (req, res) => {
  const search = req.query.search?.toLowerCase() || "";

  const results = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search) ||
      task.description.toLowerCase().includes(search) ||
      task.category.toLowerCase().includes(search)
  );

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});