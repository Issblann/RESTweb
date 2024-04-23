import { Router } from "express";
import { FurnitureController } from "./controller";

export class FurnitureRoutes {
  static get routes(): Router {
    const router = Router();

    const furnitureController = new FurnitureController();
    router.get("/", furnitureController.getFurnitures);
    router.get("/:id", furnitureController.getFurnitureById);
    router.post("/", furnitureController.createFurniture);
    router.put("/:id", furnitureController.updateFurniture);
    router.delete("/:id", furnitureController.deleteFurniture);
    return router;
  }
}
