
/*-------------------------------- Constants --------------------------------*/

import {works} from "../data/works.js"
import {bio, skills, contacts} from "../data/content.js"


/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/

const cardContainer = document.getElementById('card-container')
const contactCtn = document.getElementById('contact-container')
const bioCtn = document.getElementById('bio-container')
const skillsCtnr = document.getElementById('skills-container')
const lightDarkBtn = document.querySelector('#light-dark-button')
const body = document.querySelector('body')
let navLinks = document.getElementById('nav-links')


/*----------------------------- Event Listeners -----------------------------*/
lightDarkBtn.addEventListener("click", toggleLightDark)
navLinks.addEventListener("mouseover", function( event ) {
  event.target.style.color = "white"
  
  setTimeout(function() {
    event.target.style.color = ""
  }, 700)
}, false)
/*-------------------------------- Functions --------------------------------*/

let worksMarkup = works.map (work =>
  `<div class="card bg-dark text-white">
    <img src="${work.image}" class="card-img" alt="...">
      <div class="card-img-overlay"> 
        <center> <h5 class="card-title">${work.title}</h5>
         <p class="card-text">${work.description}</p>
         <a href="${work.github}" class="btn btn-link">GitHub</a>
         <a href="${work.deployment}" class="btn btn-link">Deployment</a></center>
      </div>
  </div>
   `
  ).join('')

  cardContainer.innerHTML = worksMarkup

  let contactsMarkup = contacts.map(contact =>
    `<a target="_blank" href="${contact.link}">
    <img src="${contact.image}" alt="png"></a>
    `
  ).join('')
  
  contactCtn.innerHTML = contactsMarkup
  
  let bioMarkup = `${bio}`
  bioCtn.innerHTML = bioMarkup

   let skillsMarkup = skills.map(skill =>
    `<img src="${skill.image}" alt="png">`
    
    ).join('')
    skillsCtnr.innerHTML = skillsMarkup

    function toggleLightDark() {
      body.className = body.className === "dark" ? "" : "dark"
    }
    
    function checkDarkPref () {
      if (
        window.matchMedia("(prefers-color-scheme:dark)").matches &&
        body.className !=="dark"

        ) {
          toggleLightDark()
        }
      
    }

    checkDarkPref()

