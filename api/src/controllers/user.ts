import { User } from "../models/user";
import { addUser, getUser, getUsers } from "../mongo/user";

export const authUserController = async (mobile: string, password: string) => {
  const user = (await getUser(mobile)) || { password: "" };
  console.log(user);

  if (user["password"] === password) {
    return user;
  }

  return null;
};

export const getUserController = async (mobile: string) => getUser(mobile);

export const getUsersController = async () => getUsers();

export const insertUserController = async () => {
  const user = new User();

  user.name = "Fazenda";
  user.birthday = "27";
  user.mobile = "00000000000";
  user.password = "00000000000";
  user.isAdmin = true;

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
