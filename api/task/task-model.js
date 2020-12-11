// build your `Task` model here

const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("tasks as t")
      .leftJoin("projects as p", "p.project_id", "t.project_id")
      .select(
        "t.task_id",
        "t.description",
        "t.notes",
        "t.completed",
        "p.project_id",
        "p.name"
      );
  },
  create(task) {
    return db("tasks")
      .insert(task)
      .then(([id]) => {
        return db("tasks").where("task_id", id).first();
      });
  },
};
