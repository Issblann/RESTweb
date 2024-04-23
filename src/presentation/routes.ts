import { Router } from "express";
import { FurnitureRoutes } from "./furniture/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/furniture", FurnitureRoutes.routes);
    return router;
  }
}
