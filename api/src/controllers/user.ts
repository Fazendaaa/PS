import { User } from "../models/user";
import { addUser, getUser, getUsers } from "../mongo/user";

export const getUserController = async (mobile: string) => getUser(mobile);

export const getUsersController = async () => getUsers();

export const insertUserController = async () => {
  const user = new User();

  user.name = "Fazenda";
  user.birthday = "27";
  user.mobile = "16987654321";

  return addUser(user);
};

export const updateUserController = () => {
  const user = { foo: "updateuser" };

  return user;
};

export const deleteUserController = () => {
  const user = { foo: "deleteuser" };

  return user;
};
