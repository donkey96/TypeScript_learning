export class Human {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public show(): string {
    return `${this.name}は${this.age}歳です。`;
  }
  public action(): string {
    return "歩く";
  }
}