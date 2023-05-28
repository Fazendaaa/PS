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
  await connection();
  const added = new userModel(user);
  await added.save();

  return added;
};

export const getUser = async (mobile: string) => {
  await connection();

  return userModel.findOne({ mobile });
};

export const getUsers = async () => {
  await connection();

  return userModel.find();
};

export const updateUser = async (user: User) => {
  await connection();
  const added = new userModel(user);
  await added.save();

  return added;
};

export const deleteUser = async (user: User) => {
  await connection();
  const added = new userModel(user);
  await added.save();

  return added;
};
