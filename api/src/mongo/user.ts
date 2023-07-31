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
  isAdmin: Boolean,
  questions: Map,
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

export const updateUser = async (mobile: string, user: User) => {
  const found = await getUser(user["mobile"]);

  if (null !== found) {
    found.hair = user.hair;
    found.skin = user.skin;
    found.name = user.name;
    found.illnesses = user.illnesses;
    found.medication = user.medication;
    found.docs = user.docs;
    found.mobile = user.mobile;
    found.password = user.password;
    found.birthday = user.birthday;
    found.isAdmin = user.isAdmin;
    found.questions = user.questions;

    await found.save();

    return found;
  }

  return null;
};

export const deleteUser = async (user: User) => {
  await connection();
  const added = new userModel(user);
  await added.save();

  return added;
};
