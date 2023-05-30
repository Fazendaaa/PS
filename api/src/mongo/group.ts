import { Schema, model } from "mongoose";
import { Group } from "../models/group";
import { connection } from "./mongo";

const schema = new Schema<Group>({
  name: String,
  link: String,
  responsible: String,
});
const groupModel = model("Group", schema);

export const addGroup = async (group: Group) => {
  await connection();
  const added = new groupModel(group);
  await added.save();

  return added;
};

export const getGroups = async () => {
  await connection();

  return groupModel.find();
};
