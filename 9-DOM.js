//Activity-1
//Task-1
document.getElementById("hi-div").innerHTML = "Hello";

//Task-2
document.querySelector(".here-div").style.backgroundColor = "red";

//Activity-2
//Task-3
const newEle = document.createElement("div");
newEle.innerHTML = "Harsha";
document.body.appendChild(newEle);

//Task-4
const ele = document.createElement("li");
ele.innerHTML = "6";
document.getElementById("list").appendChild(ele);

//Activity-3
//Task-5
//removing from dom
const hi = document.getElementById("hi-div");
hi.remove();

//tsak-6
const last = document.getElementById("list");
if (last.lastElementChild) {
  last.removeChild(last.lastElementChild);
}

//Activity-4
//Task-7
const image = document.getElementById("image");
image.src =
  "https://imgproxy.learnyst.com/https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/171024/schoolLogo/1717484431216banner_lyst1717484431227.png?w=80&h=40&resizetype=fit";

//task-8
const sq = document.getElementById("sq");
sq.classList.remove("sq1");

const circle = document.getElementById("circle");

circle.classList.add("sq1");

//Activity-5
//Task-9
const btn = document.getElementById("button");
const para = document.getElementById("para");
btn.addEventListener("click", () => {
  para.innerHTML = "let's dance";
});

//Task-10

const final = document.getElementById("10");
final.addEventListener("mouseover", () => {
  final.style.borderColor = "red";
});
final.addEventListener("mouseout", () => {
  final.style.borderColor = "blue";
});
