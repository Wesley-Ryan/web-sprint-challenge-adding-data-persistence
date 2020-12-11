const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("projects as p").select("p.name", "p.description", "p.completed");
  },

  addProject(project) {
    return db("projects")
      .insert(project)
      .then(([id]) => {
        return db("projects").where("project_id", id).first();
      });
  },
};

// adding a new resource - [POST] /api/resources
// retrieving all resources - [GET] /api/resources
// adding a new project - [POST] /api/projects
// retrieving all projects - [GET] /api/projects
// adding a new task - [POST] /api/tasks
// retrieving all tasks - [GET] /api/tasks Each task must include project_name and project description so you will need to join tables
