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
