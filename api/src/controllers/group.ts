import { Group } from "../models/group";
import { addGroup, getGroups } from "../mongo/group";

export const getGroupsController = async () => getGroups();

export const insertGroupController = async ({
  name,
  link,
  responsible,
}: Group) => {
  const group = new Group();

  console.log({
    name,
    link,
    responsible,
  });

  group.name = name;
  group.link = link;
  group.responsible = responsible;

  return addGroup(group);
};
