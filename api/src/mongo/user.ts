import { Schema, model } from "mongoose";
import { User } from "../models/user";
import { connection } from "./mongo";

const schema = new Schema<User>({
  name: String,
  illnesses: [String],
  hair: [String],
  skin: [String],
  medication: [String],
  others: [String],
  mobile: String,
  password: String,
  birthday: String,
  isAdmin: Boolean,
  questions: Map,
  weight: [Number],
  waist: [Number],
  arterialPressure: [Number],
  height: [Number],
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
    found.others = user.others;
    found.mobile = user.mobile;
    found.password = user.password;
    found.birthday = user.birthday;
    found.isAdmin = user.isAdmin;
    found.questions = user.questions;
    found.weight = user.weight;
    found.waist = user.waist;
    found.arterialPressure = user.arterialPressure;
    found.height = user.height;

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
