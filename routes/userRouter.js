const userController = require("../controllers/userController.js");

const router = require("express").Router();

router.post("/addUser", userController.addUser);
router.get("/allUsers", userController.getAllUser);
router.get("/published", userController.getPublishedUser);
router.get("/:id", userController.getSingleUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
