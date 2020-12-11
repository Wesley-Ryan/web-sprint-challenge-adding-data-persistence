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
  findById(id) {
    return db("Task").where({ id }).first();
  },

  async addTask(task) {
    const [id] = await db("tasks").insert(task);
    return this.findById(id);
  },
};
