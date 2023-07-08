"use strict";

// capture data from form
const form = document.getElementById("student-form");
const displayCGPA = document.querySelector(".display-cgpa");

// punchlines
const punch = [
  {
    up: 10,
    down: 9,
    line: "🎶 another banger, baby, calm down, calm down",
  },
  { up: 9, down: 8.5, line: "🎶 citi baja ke bol 'all isss wellll' 🫶🏼" },
  {
    up: 8.5,
    down: 8,
    line: "🎶 dil sambhal jaa zara, phir mohobat karne chala hai tuuu 🙈",
  },
  {
    up: 8,
    down: 7.5,
    line: "🎶 aiyyaayo aiyyaayo, dreamum wakeuppam critical conditionum 👻",
  },
  { up: 7.5, down: 7, line: "🎶 teri umar hai karle, galati se mistake 🤡" },
  {
    up: 7,
    down: 5,
    line: "🎤 jahanpanah! tussi great ho, tohfa kabool karo! 🤓",
  },
  { up: 5, down: 2, line: "🎤 well, nobody's perfect ❤‍🩹" },
];

const calcCGPA = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let [sem, prevCGPA, sgpa] = [...formData].map((item) => Number(item[1]));
  console.log(prevCGPA, sem, sgpa);

  // credits of individual semesters (RC 2019-20)
  const credits = [16, 18, 23, 24, 22, 22, 17, 18];

  let totalCredits = 0;
  for (let i = 0; i < sem - 1; i++) {
    totalCredits += credits[i];
  }

  const num = prevCGPA * totalCredits + credits[sem - 1] * sgpa;
  totalCredits += credits[sem - 1];

//   display final cgpa
  const finalCGPA = (num / totalCredits).toFixed(2);
  displayCGPA.innerHTML = finalCGPA;

//   display paragraph
  let punchLine;
  punch.forEach((item) => {
    if (finalCGPA >= item.down && finalCGPA < item.up) punchLine = item.line;
  });
  document.querySelector(".prop").innerHTML = `${punchLine}`;
};

// form submission listener
form.addEventListener("submit", calcCGPA);
