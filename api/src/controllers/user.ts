import { User } from "../models/user";
import { addUser, getUser, getUsers } from "../mongo/user";

interface InsertUser {
  isAdmin: boolean;
  name: string;
  birthday: string;
  mobile: string;
  password: string;
}

export const authUserController = async (mobile: string, password: string) => {
  const user = (await getUser(mobile)) || { password: "" };

  if (user["password"] === password) {
    return user;
  }

  return null;
};

export const getUserController = async (mobile: string) => getUser(mobile);

export const getUsersController = async () => getUsers();

export const insertUserController = async ({
  isAdmin,
  name,
  birthday,
  mobile,
  password,
}: InsertUser) => {
  const user = new User();

  user.name = name;
  user.birthday = birthday;
  user.mobile = mobile;
  user.password = password;
  user.isAdmin = isAdmin;

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
