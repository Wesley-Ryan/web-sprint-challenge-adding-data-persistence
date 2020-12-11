exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Pass Sprint",
          description: "Need to pass this sprint, but there is a lot to do.",
          resource_id: 1,
          completed: false,
        },
        {
          name: "Ace interview",
          description: "Not sure what we will talk about :{",
          resource_id: 1,
          completed: false,
        },
      ]);
    });
};
