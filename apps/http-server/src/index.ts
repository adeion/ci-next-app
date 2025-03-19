import express, { Request, Response } from "express";
import { prismaClient } from "@repo/db/client";
const app = express();

app.use(express());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello" });
});

app.post("/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await prismaClient.user.create({
    data: {
      username,
      password,
    },
  });
  if (user) {
    res.json({
      message: "signup successfull",
    });
  }
});

app.listen(3000);
