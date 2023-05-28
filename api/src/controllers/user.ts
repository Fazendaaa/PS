import { User } from "../models/user";
import { addUser } from "../mongo/user";

export const getUserController = async (id: number) => {
  const user = { foo: "getid" };

  return user;
};

export const getUsersController = async () => {
  const user = { foo: "getusers" };

  return user;
};

export const insertUserController = async () => {
  const user = new User();

  user.name = "Fazenda";
  user.birthday = "27";

  const added = await addUser(user);

  return added;
};

export const updateUserController = () => {
  const user = { foo: "updateuser" };

  return user;
};

export const deleteUserController = () => {
  const user = { foo: "deleteuser" };

  return user;
};
