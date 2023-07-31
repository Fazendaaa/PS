interface Answers {
  answered: boolean;
  attempts: number;
}

interface Questions {
  [id: number]: Answers;
}

export class User {
  hair: string;
  skin: string;
  name: string;
  illnesses: string[];
  medication: string[];
  docs: string[];
  mobile: string;
  password: string;
  birthday: string;
  isAdmin: boolean;
  questions: Questions;

  constructor() {
    this.hair = "";
    this.skin = "";
    this.name = "";
    this.illnesses = [""];
    this.medication = [""];
    this.docs = [""];
    this.mobile = "";
    this.password = "";
    this.birthday = "";
    this.isAdmin = false;
    this.questions = [];
  }
}
