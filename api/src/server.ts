import cors from "cors";
import helmet from "helmet";
import express, { Request, Response, NextFunction } from "express";

const app = express();
const port = 80;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message);
});

export default app;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
