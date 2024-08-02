//Activity-1
//Task-1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Jai ${this.name}`;
  }
  //Task-2
  updateAge(newAge) {
    this.age = newAge;
    console.log(`New age of ${this.name} is ${this.age}`);
  }
  //Task-5
  static greet() {
    return "Jai Bajarangi";
  }
}

const p1 = new Person("Hanuman", 24);

console.log(p1.greet());

//Task-2
p1.updateAge(15);
//Activity-2
//Task-3
class Student extends Person {
  //Task-6
  static count = 0;
  constructor(name, age) {
    super(name, age);
    Student.count += 1;
    this.studentId = `S${Student.count.toString().padStart(5, "0")}`;
  }
  getStudentId() {
    return this.studentId;
  }
  //Task-4
  greet() {
    return `Namaskara ${this.name} your ID is ${this.studentId}`;
  }
}
const std1 = new Student("Hari", 18);

console.log(std1.getStudentId());
console.log(std1.greet());
//Activity-3
//Task-5
console.log(Person.greet());

//Activity-4
//Task-7
class secondPerson {
  constructor(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.secondName}`;
  }

  set fullName(name) {
    const [firstName, secondName] = name.trim().split(" ");
    this.firstName = firstName;

    this.secondName = secondName;
  }
}

const sp1 = new secondPerson("Ganesh", "Hanuman", 25);

console.log(sp1.fullName);
sp1.fullName = "Saraswathi Lakshmi";
console.log(sp1.fullName);
//Activity-5
//Task-9

class Account {
  #balance;
  constructor(initialAmount) {
    if (initialAmount < 0) {
      throw new Error("Initial amount can't be negetive");
    }
    this.#balance = initialAmount;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(
        `Amount ${amount} added successfully, balance is ${this.#balance}`
      );
    } else {
      console.log("Amount can't be negetive");
    }
  }

  withDraw(amount) {
    if (amount > 0 && amount < this.#balance) {
      this.#balance -= amount;
      console.log(
        `Amount ${amount} added successfully, balance is ${this.#balance}`
      );
    } else if (amount > this.#balance) {
      console.log("insufficient balance");
    } else {
      console.log("amount can't be negative");
    }
  }

  get getBalance() {
    console.log(`Current Balance is ${this.#balance}`);
  }
}

//Task-10
const account1 = new Account(150);

account1.deposit(800);
account1.deposit(-250);

account1.withDraw(8000);
account1.withDraw(-268);
account1.withDraw(400);

account1.getBalance;
