let data = [
  {
    theName: "steve",
    age: 30,
  },
  {
    theName: "jol",
    age: 56,
  },
  {
    theName: "ely",
    age: 14,
  },
  {
    theName: "marlen",
    age: 35,
  },
  {
    theName: "tommy",
    age: 35,
  },
  {
    theName: "rody",
    age: 18,
  },
  {
    theName: "sam",
    age: 25,
  },
  {
    theName: "locus",
    age: 26,
  },
  {
    theName: "jon",
    age: 43,
  },
  {
    theName: "dax",
    age: 33,
  },
  {
    theName: "trevor",
    age: 22,
  },
  {
    theName: "jacob",
    age: 34,
  },
];

let info = document.querySelector(".info");
let mydata = data.map(function (el) {
  return `<div><span>${el.theName}</span><p>${el.age} years old</p></div>`;
});

info.innerHTML = mydata.join("");

let myDiv = document.querySelectorAll(".info div");
console.log(myDiv);
myDiv.forEach((el) => {
  el.setAttribute("class", "cards");
});

let divs = document.querySelectorAll(".cards");

console.log(divs[0]);

divs.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    if (!el.classList.contains("change-color"))
      el.classList.add("change-color");
    else el.classList.remove("change-color");
  });
});
divs.forEach((el) => {
  el.addEventListener("mouseleave", () => {
    if (el.classList.contains("change-color"))
      el.classList.remove("change-color");
  });
});
