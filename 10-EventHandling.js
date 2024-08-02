//Activity-1
//Task-1
const p = document.getElementById("pp");

const b = document.getElementById("btn");

b.addEventListener("click", () => {
  p.innerHTML = "here";
});
//Task-2
const i = document.getElementById("image-visible");

b.addEventListener("dblclick", () => {
  if (i.style.display === "none") {
    i.style.display = "block";
  } else {
    i.style.display = "none";
  }
});

//Activity-2
//Task-3
const qqq = document.getElementById("que3");

qqq.addEventListener("mouseover", () => {
  qqq.style.backgroundColor = "red";
});
//Task-4

qqq.addEventListener("mouseout", () => {
  qqq.style.backgroundColor = "blue";
});

//Activity-3
//Task-5
let myin;
document.addEventListener("DOMContentLoaded", () => {
  myin = document.getElementById("in");
  myin.addEventListener("keydown", (e) => {
    console.log(`key pressed:${e.key}`);
  });
});

//Task-6
document.addEventListener("DOMContentLoaded", () => {
  const mypara = document.getElementById("q6");
  myin.addEventListener("keyup", () => {
    mypara.textContent = myin.value;
  });
});

//Activity-4
//Task-7

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-submit");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    for (let [name, value] of formData.entries()) {
      console.log(`${name} ${value}`);
    }
  });
});

//Task-8
document.addEventListener("DOMContentLoaded", () => {
  const value = document.getElementById("option");
  const para = document.getElementById("selected-value");
  value.addEventListener("change", (e) => {
    para.innerHTML = e.target.value;
  });
});

//Activity-5
//Task-9
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("total-list");
  const clicked_item = document.getElementById("clicked-li");

  list.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "LI") {
      clicked_item.innerHTML = e.target.innerHTML;
    }
  });
});

//Task-10
document.addEventListener("DOMContentLoaded", () => {
  const parent = document.getElementById("parent-div");
  const button = document.getElementById("add-button");
  const details = document.getElementById("message");

  parent.addEventListener("click", (event) => {
    if (event.target && event.target.nodeName === "BUTTON") {
      details.innerHTML = event.target.textContent;
    }
  });

  button.addEventListener("click", () => {
    const newButton = document.createElement("button");
    newButton.innerHTML = `button ${parent.childElementCount + 1}`;
    parent.appendChild(newButton);
  });
});
