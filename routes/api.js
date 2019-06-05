var express = require("express");
var router = express.Router();
let f = async () => {};
/* GET home page. */
router.post("/login", async function(req, res, next) {
  let w = await f();
  setTimeout(() => {
    res.send({ username: "hello" });
  }, 1000);
});

module.exports = router;
