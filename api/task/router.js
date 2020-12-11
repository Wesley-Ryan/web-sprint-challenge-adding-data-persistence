// build your `/api/tasks` router here
const express = require("express");
const Helper = require("./task-model");
const router = express.Router();

const validateTask = (req, res, next) => {
  const task = req.body;

  if (!task.project_id) {
    res.status(400).json({ message: "Missing project id." });
  } else {
    req.task = task;
    next();
  }
};

router.get("/", async (req, res) => {
  try {
    let tasks = await Helper.getAll();
    tasks.forEach((task) => {
      if (task.completed === 0) {
        task.completed = false;
      } else {
        task.completed = true;
      }
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ Message: error.Message });
  }
});
router.post("/", validateTask, async (req, res) => {
  try {
    Helper.create(req.task);
    res.status(201).json(req.task);
  } catch (error) {
    res.status(500).json({ Message: error.Message });
  }
});

module.exports = router;
