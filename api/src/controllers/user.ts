import { getUser } from "../models/user";

export const getUserController = async (id: number) => {
  const user = { foo: "getid" };

  return user;
};

export const getUsersController = async () => {
  const user = { foo: "getusers" };

  return user;
};

export const insertUserController = () => {
  const user = { foo: "insertuser" };

  return user;
};

export const updateUserController = () => {
  const user = { foo: "updateuser" };

  return user;
};

export const deleteUserController = () => {
  const user = { foo: "deleteuser" };

  return user;
};
