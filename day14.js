// Activity 1
class Person {
  constructor() {
    this.name = "Haider";
    this.age = "20 years";
    this.firstName = "Haider";
    this.lastName = "Ali";
  }
  greeings() {
    console.log(`Greeings from ${this.name}`);
  }
  updateName(value) {
    this.name = value;
    this.greeings();
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(first) {
    this.firstName = first.split(" ")[0];
    this.lastName = first.split(" ")[1];
  }

  static greet() {
    console.log("Hi i'm person class");
  }
}
let P = new Person();
P.greeings();
P.updateName("Ali");
console.log(P.fullName);
P.firstName = "Usman Khalil";
console.log(P.fullName);

// Activity 2
class Student extends Person {
  static instances = 1;
  constructor() {
    super();
    this.studentId = 542;
    console.log(Student.instances++);
  }

  greeings() {
    console.log(`the id is ${this.studentId}`);
  }
}

S = new Student();
console.log(S.studentId);
S.greeings();
// Activity 3
Person.greet();
S1 = new Student();

// Activity 5
class Account {
  #balance = 0;
  getBalance() {
    return this.#balance;
  }
  updateBalance(value) {
    this.#balance += value;
  }
}
A = new Account();
A.updateBalance(100);
console.log(A.getBalance());
