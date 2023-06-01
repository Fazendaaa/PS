import { User } from "../models/user";
import { addUser, getUser, getUsers, updateUser } from "../mongo/user";

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
}: User) => {
  const user = new User();

  user.name = name;
  user.birthday = birthday;
  user.mobile = mobile;
  user.password = password;
  user.isAdmin = isAdmin;

  return addUser(user);
};

export const updateUserController = (mobile: string, user: User) =>
  updateUser(mobile, user);

export const deleteUserController = () => {
  const user = { foo: "deleteuser" };

  return user;
};
