const router = require("express").Router();
const knex = require("../../knex/knex.js");

router.post("/user_info", async function (req, res, next) {
  try {
    const selectedRows = await knex("account").select("*");
    console.log(selectedRows);
    return res.json({
      result: selectedRows,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/grail_info", async function (req, res, next) {
  try {
    const selectedRows = await knex("grail").select("*");
    console.log(selectedRows);
    return res.json({
      result: selectedRows,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/drop_info", async function (req, res, next) {
  try {
    const selectedRows = await knex("drop").select("*");
    console.log(selectedRows);
    return res.json({
      result: selectedRows,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/contact_info", async function (req, res, next) {
  try {
    const selectedRows = await knex("contact_request").select("*");
    console.log(selectedRows);
    return res.json({
      result: selectedRows,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
