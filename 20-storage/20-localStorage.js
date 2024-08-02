//Activity-1
//Task-1
localStorage.setItem("myGod", "Hanuman");

const val = localStorage.getItem("myGod");
console.log(val);

//Task-2
const User = { name: "Harsha", place: "Mangalore", rollnumber: 8 };

const userString = JSON.stringify(User);

localStorage.setItem("User", userString);

const Usergot = localStorage.getItem("User");

const userObject = JSON.parse(Usergot);

console.log(userObject);

// Activity - 2;
// Task - 3;
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userform");
  const dataSubmitted = document.getElementById("submittedInfo");

  function displayData() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");

    document.getElementById("submittedName").innerHTML = name;
    document.getElementById("submittedEmail").innerHTML = email;
    document.getElementById("submittedNumber").innerHTML = phone;
  }

  //  Disspay data while loading
  displayData();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    console.log(name);
    const email = document.getElementById("email").value;
    const phone = document.getElementById("number").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    displayData();

    form.reset();
  });
});

//Task-4

function printLocalStorageElement() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(`${key}:${localStorage.getItem(key)}`);
  }
}

printLocalStorageElement();

localStorage.removeItem("User");

printLocalStorageElement();

//Activity-3
//Task-5

sessionStorage.setItem("Greet", "Jai");

let greeting = sessionStorage.getItem("Greet");
// console.log(greeting);

//Task-6
const Profile = {
  name: "Jai Ganesh",
  Book: "Random",
  count: 1000,
};

const profile = JSON.stringify(Profile);

sessionStorage.setItem("Profile", profile);

const getprofile = sessionStorage.getItem("Profile");

// console.log(getprofile);

//Activity-4
//Task-7

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userform");
  const info = document.getElementById("submittedInfo");

  function printSessionStorage() {
    const name = sessionStorage.getItem("name");
    const email = sessionStorage.getItem("email");
    const phone = sessionStorage.getItem("phone");

    document.getElementById("submittedName").textContent = name;
    document.getElementById("submittedEmail").textContent = email;
    document.getElementById("submittedNumber").textContent = phone;
  }

  printSessionStorage();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("number").value;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("phone", phone);

    printSessionStorage();
    form.reset();
  });
});

//Task-8
function printSessionStorageElement() {
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    console.log(key, ":", sessionStorage.getItem(key));
  }
}

printSessionStorageElement();

sessionStorage.removeItem("Profile");

printSessionStorageElement();
//Activity-5
//Task-9

function storagesaver(a, b) {
  localStorage.setItem(a, b);
  sessionStorage.setItem(a, b);

  const local = localStorage.getItem(a);
  const session = sessionStorage.getItem(a);

  console.log(local, " ", session);
}

storagesaver("indianGreet", "namasthe");

function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();
}

clearStorage();
