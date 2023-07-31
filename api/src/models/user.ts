interface Answers {
  answered: boolean;
  attempts: number;
}

interface Questions {
  [id: number]: Answers;
}

export class User {
  name: string;
  mobile: string;
  password: string;
  birthday: string;
  isAdmin: boolean;
  questions: Questions;
  hair: string[];
  skin: string[];
  illnesses: string[];
  medication: string[];
  others: string[];
  weight: number[];
  waist: number[];
  arterialPressure: number[];
  height: number[];

  constructor() {
    this.name = "";
    this.mobile = "";
    this.password = "";
    this.birthday = "";
    this.isAdmin = false;
    this.hair = [];
    this.skin = [];
    this.illnesses = [];
    this.medication = [];
    this.others = [];
    this.questions = [];
    this.weight = [];
    this.waist = [];
    this.arterialPressure = [];
    this.height = [];
  }
}
