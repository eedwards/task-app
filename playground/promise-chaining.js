require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("61b3c3850e26b4375d96019a", { age: 25 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 25 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("61b3c3850e26b4375d96019a", 21)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
