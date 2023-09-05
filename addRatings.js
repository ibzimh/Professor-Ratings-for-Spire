/*
* Ibrahim Hasaan 2023
* MIT License
*/

addRatings();

function getLinks() {
  const doc = getDocument();
  const links = doc.querySelectorAll('[href*="mailto:"]');
  console.log("i'm trying to find the links!");

  // retry in 5 seconds if the links are not found
  return links.length > 0 ? Promise.resolve(links) : new Promise((resolve, _) => {
      setTimeout(() => resolve(getLinks()), 5000);
  });
}

// ratings for the current professor
function getProfRating(data, first_name, last_name) {
  // search for the professors 
  let professor = data.filter(prof => prof.firstName === first_name && prof.lastName === last_name)
  
  // if no professors found then do a more lenient search 
  if (professor.length === 0) {
    // if a shortened version of the name is displayed (or if last and middle names have been mixed up)
    professor = data.filter(prof => {
      return (prof.firstName.indexOf(first_name) === 0) && prof.lastName.indexOf(last_name) === 0
    })
  }
  
  return professor.length > 0 ? professor[0].avgRating : undefined;
}

function addRatings() {
  let url = "https://raw.githubusercontent.com/ibzimh/UMA_RMP_Data/main/professorsJSON.json";
  
  fetch(url)
    .then((response) => response.json())
    .then(data => {
      return getLinks().then(links => [data, links])
    })
    .then(data_and_links => {
      let [data, links] = data_and_links;

      for (const link of links) {
        // (1) NameOfTheProfessor <span style="color:theColor">theRating</span>
        let current_link = link.innerHTML.toString();
        // put all the text of (1) into an array and remove ones which are only spaces
        let names_array = current_link.trim().split(" ").filter(entry => entry.trim() !== "");

        // data, first name, last name
        let prof_rating = getProfRating(data, names_array[0], names_array[1]);

        // If no rating found
        if (prof_rating === undefined) {
          prof_rating = "No rating found!";
        }

        // alas! display the ratings
        if (prof_rating >= 4) {
          link.innerHTML += ` <span style="color:green">${prof_rating}</span>`;
        } else if (prof_rating >= 3) {
          link.innerHTML += ` <span style="color:orange">${prof_rating}</span>`;
        } else {
          link.innerHTML += ` <span style="color:red">${prof_rating}</span>`;
        }
      }
    });
}

function getDocument() {
  // if in parent frame
  if (window.frames[0]) {
      return window.frames[0].document;
  }
  return window.frames.document;
}