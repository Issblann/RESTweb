import { error } from "console";
import { Request, Response } from "express";

const furnitures = [
  { id: 1, text: "couch", createdAt: new Date() },
  { id: 2, text: "bed", createdAt: new Date() },
  { id: 3, text: "blanket", createdAt: new Date() },
  { id: 4, text: "desk", createdAt: new Date() },
];
export class FurnitureController {
  constructor() {}

  public getFurnitures = (req: Request, res: Response) => {
    return res.json(furnitures);
  };

  public getFurnitureById = (req: Request, res: Response) => {
    const id = +req.params.id;

    const furniture = furnitures.find((furniture) => furniture.id === id);
    if (isNaN(id)) return res.status(400).json({ error: `Invalid id` });
    if (furniture) {
      return res.json(furniture);
    } else {
      return res.status(404).json({ error: `Furniture not found` });
    }
  };

  public createFurniture = (req: Request, res: Response) => {
    const { text } = req.body;
    if (!text)
      return res.status(400).json({ error: `Text property is required` });
    const newFurniture = {
      id: furnitures.length + 1,
      text,
      createdAt: new Date(),
    };
    furnitures.push(newFurniture);
  };

  public updateFurniture = (req: Request, res: Response) => {
    const id = +req.params.id;

    const furniture = furnitures.find((furniture) => furniture.id === id);
    if (!furniture)
      return res.status(400).json({ error: `Furniture not found` });

    const { text } = req.body;
    if (!text)
      return res.status(400).json({ error: `Text property is required` });

    furniture.text = text;
    return res.json(furniture);
  };

  public deleteFurniture = (req: Request, res: Response) => {
    const id = +req.params.id;

    const furniture = furnitures.find((furniture) => furniture.id === id);
    if (!furniture)
      return res.status(400).json({ error: `Furniture not found` });

    furnitures.splice(furnitures.indexOf(furniture), 1);
    return res.json(furniture);
  };
}
