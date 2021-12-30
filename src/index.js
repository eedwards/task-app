const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET REKT");
//   } else {
//     next();
//   }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("61cddde5db06d4e462325ee7");
  // await task.populate("owner");
  // console.log(task.owner._id);
  const user = User.findById("61cce833db06d4e462325ee1");
  await user.populate("tasks");
  console.log(user.tasks);
};
main();
