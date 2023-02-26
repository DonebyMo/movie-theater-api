const express = require("express");
const app = express();
const port = 3000;
const UserRouter = require("./routers/users");
app.use("/users", UserRouter);
const ShowRouter = require("./routers/shows");
app.use("/shows", ShowRouter);

app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});

module.export = { app };
