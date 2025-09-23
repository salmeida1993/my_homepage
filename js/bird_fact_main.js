import { birdFacts } from "./bird_fact.js";

const factBtn = document.getElementById("fact-btn");
const factDisplay = document.getElementById("bird-fact");

factBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * birdFacts.length);
  factDisplay.textContent = birdFacts[randomIndex];
});
