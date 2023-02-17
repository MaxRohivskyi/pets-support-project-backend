const express = require("express");
const router = express.Router();

const { asyncWrapper } = require("../../helpers/apiHelpers");
const { noticesControllers } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");

router.get(
  "/category/:category",
  asyncWrapper(noticesControllers.getNoticesByCategoryController)
);
router.put(
  "/add-to-fav/:id",
  authMiddleware,
  asyncWrapper(noticesControllers.addNoticeToFavoriteController)
);
router.put(
  "/del-from-fav/:id",
  authMiddleware,
  asyncWrapper(noticesControllers.delNoticeFromFavoriteController)
);
router.get(
  "/fav-notice/",
  authMiddleware,
  asyncWrapper(noticesControllers.getFavoriteNoticesController)
);
router.get(
  "/notice/:noticeId",
  asyncWrapper(noticesControllers.getOneNoticeByIdController)
);

router.post("/notice", noticesControllers.addOneNoticeController);

module.exports = router;
