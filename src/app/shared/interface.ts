export interface Employee {
  name: string;
  age: number;
  job: string;
  employed: boolean;
}

export interface Header {
  key: keyof Employee;
  label: string;
}

export interface Stat {
  value: number;
  label: string;
}

export interface Item {
  image: string;
  title: string;
  description: string;
}

export interface Question {
  title: string;
  content: string;
}
