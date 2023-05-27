export class User {
  hair: string;
  skin: string;
  name: string;
  age: number;
  illnesses: string[];
  medication: string[];
  docs: string[];

  constructor() {
    this.hair = "";
    this.skin = "";
    this.name = "";
    this.age = 0;
    this.illnesses = [""];
    this.medication = [""];
    this.docs = [""];
  }
}

export const getUser = () => {};

export const insertUser = () => {};

export const updateUser = () => {};

export const deleteUser = () => {};
