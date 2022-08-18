import express from "express";
import controller from "../controllers/launches";
const router = express.Router();

router.get("/launches/:id", controller.getLaunch);
router.get("/launches", controller.getAllLaunches);
router.get("/latest", controller.getLatestLaunch);
router.get("/next", controller.getNextLaunch);
router.get("/past", controller.getPastLaunches);
router.get("/upcoming", controller.getUpcomigLaunches);

export = router;
