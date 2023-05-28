import mongoose from "mongoose";

const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_NAME;
const port = process.env.DB_PORT;
const srv = process.env.DB_SRV;
let URI = `${username}:${password}@${host}:${port}/${name}`;

if (String(true) === srv) {
  URI = `mongodb+srv://${URI}`;
} else {
  URI = `mongodb://${URI}`;
}

export const connection = async () => mongoose.connect(URI);
