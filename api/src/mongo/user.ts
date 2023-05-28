import { Schema, model } from "mongoose";
import { User } from "../models/user";
import { connection } from "./mongo";

const schema = new Schema<User>({
  hair: String,
  skin: String,
  name: String,
  illnesses: [String],
  medication: [String],
  docs: [String],
  mobile: String,
  password: String,
  birthday: String,
});
const userModel = model("User", schema);

export const addUser = async (user: User) => {
  const conn = await connection();
  const added = new userModel(user);
  await added.save();

  console.log(added);
  console.log(added.name);

  return added;
};
