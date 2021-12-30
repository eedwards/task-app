require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("61b3daee6438bb8e9125c8d4")
//   .then((task) => {
//     console.log(task);
//     return Task.count({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("61b3db23ec97f478c664465e")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
