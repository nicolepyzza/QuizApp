const router = require("express").Router();
const userRoutes = require("./user");
// const db = require("../../models/");

router.use("/user", userRoutes); // api/user

module.exports = router;
