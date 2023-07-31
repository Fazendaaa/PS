interface Answers {
  answered: boolean;
  attempts: number;
}

interface Questions {
  [id: number]: Answers;
}

interface Activity {
  name: string;
  duration: number;
}

interface Activities {
  [id: string]: Activity[];
}

export class User {
  name: string;
  mobile: string;
  password: string;
  birthday: string;
  isAdmin: boolean;
  questions: Questions;
  activities: Activities;
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
    this.questions = {};
    this.activities = {};
    this.isAdmin = false;
    this.hair = [];
    this.skin = [];
    this.illnesses = [];
    this.medication = [];
    this.others = [];
    this.weight = [];
    this.waist = [];
    this.arterialPressure = [];
    this.height = [];
  }
}
