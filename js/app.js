
/*-------------------------------- Constants --------------------------------*/

import {works} from "../data/works.js"

/*-------------------------------- Variables --------------------------------*/

const works = {}

/*------------------------ Cached Element References ------------------------*/

const workSection = document.querySelector("#work-section")

/*----------------------------- Event Listeners -----------------------------*/
// console.log(works.image)
works.forEach(work => 
  console.log(work.image)
  )
function appendWork(work, idx) {
  let workBox = document.createElement("div")
}
// works.title.push("div")
// console.log(works.title)

/*-------------------------------- Functions --------------------------------*/