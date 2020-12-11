exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "Computer", description: "A computer to get the job done." },
        { name: "Paper", description: "A paper to get the job done." },
        {
          name: "Whiteboard",
          description: "A whiteboard to get the job done.",
        },
        {
          name: "Google",
          description: "A little googling to get the job done.",
        },
        {
          name: "Gabe",
          description: "A great instructor to get the job done.",
        },
      ]);
    });
};
