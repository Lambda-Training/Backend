exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("comments").truncate();
  await knex("comments").insert([
    {
      id: 1,
      comment: "I'm the first comment."
    },
    {
      id: 2,
      comment: "I'm the second comment."
    },
    {
      id: 3,
      comment: "I'm the third comment."
    }
  ]);
};
