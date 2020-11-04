const { Router } = require("express");

const wilders = require("../controllers/wilders");

const router = Router();

router.get("/api/wilders", wilders.getAllWilders);
router.post("/api/wilder/create", wilders.create);
router.delete("/api/wilder/delete/:id", wilders.delete);

module.exports = router;
