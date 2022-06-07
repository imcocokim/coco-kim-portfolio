
/*-------------------------------- Constants --------------------------------*/

import {works} from "../data/works.js"

/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/

const cardContainer = document.getElementById('card-container')


/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

let worksMarkup = works.map (work =>
  `<div class="card bg-dark text-white">
    <img src="${work.image}" class="card-img" alt="...">
      <div class="card-img-overlay"> 
        <center> <h5 class="card-title">${work.title}</h5>
         <p class="card-text">${work.description}</p>
         <a href="${works.github}" class="btn btn-primary">GitHub</a>
         <a href="${works.deployment}" class="btn btn-secondary">Deployment</a></center>
  </div>
</div>
  
  `
  ).join('')

  cardContainer.innerHTML = worksMarkup