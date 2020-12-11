exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "Need to pass this sprint, but there is a lot to do.",
          project_id: 1,
          completed: false,
        },
        {
          description: "Not sure what we will talk about :{",
          project_id: 2,
          completed: false,
        },
      ]);
    });
};
