import express from "express";
const router = express.Router();

import { GET_ALL_CARS, ADD_CAR, DELETE_CAR } from "../controller/cars.js";

router.get("/cars", GET_ALL_CARS);

router.post("/cars", ADD_CAR);

router.delete("/cars/:id", DELETE_CAR)

export default router;
