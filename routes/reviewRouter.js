const reviewController = require("../controllers/reviewController.js");

const router = require("express").Router();

router.post("/addReview", reviewController.addReview);
router.get("/allReviews", reviewController.getAllReviews);
router.get("/published", reviewController.getPublishedReview);
router.get("/:id", reviewController.getSingleReview);
router.put("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
