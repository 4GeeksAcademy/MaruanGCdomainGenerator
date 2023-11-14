/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "big", "bestial"];
  let noun = ["jogger", "racoon"];
  for (let onePronoun of pronoun) {
    for (let oneAdj of adj) {
      for (let oneNoun of noun) {
        console.log(onePronoun + oneAdj + oneNoun + ".com");
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
